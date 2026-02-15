# Margret - Complete Site Architecture

## Table of Contents

1. [Framework Decision](#1-framework-decision)
2. [High-Level Architecture](#2-high-level-architecture)
3. [URL Structure & Page Types](#3-url-structure--page-types)
4. [Data Schema](#4-data-schema)
5. [Project File Structure](#5-project-file-structure)
6. [Page Generation Strategy](#6-page-generation-strategy)
7. [Caching & Performance](#7-caching--performance)
8. [SEO Strategy](#8-seo-strategy)
9. [Security & Rate Limiting](#9-security--rate-limiting)
10. [Scaling Plan](#10-scaling-plan)

---

## 1. Framework Decision

**Recommendation: Next.js 14+ (App Router) with ISR**

### Why Next.js over the alternatives

| Criterion          | Next.js (ISR)    | Astro (Static)   | Nuxt (Vue SSG)   | Plain HTML + Build |
|--------------------|------------------|-------------------|-------------------|--------------------|
| SEO                | Excellent        | Excellent         | Good              | Excellent          |
| Dynamic content    | ISR + SSR        | Limited           | SSR possible      | None               |
| Scale to 50K pages | ISR on-demand    | Full rebuild      | Full rebuild      | Full rebuild       |
| Reviews/UGC        | Native API routes| Needs external API| Needs external API| Needs external API |
| DX & ecosystem     | Largest          | Growing           | Moderate          | Manual             |
| Incremental builds | Yes (ISR)        | No (full rebuild) | No (full rebuild) | No                 |
| Image optimization | Built-in         | Plugin            | Plugin            | Manual             |

**Key reasoning:**

- **ISR (Incremental Static Regeneration)** solves the 42-cities x 8-categories x N-businesses combinatorial explosion. Pages are generated on first request and revalidated in the background, meaning you never need a full site rebuild.
- **API Routes** handle review submission, search, and user auth without a separate backend service.
- **The existing design** (Tailwind CSS, Inter/Playfair Display, Lucide icons) ports directly to Next.js with zero friction.
- **Dynamic content** (reviews, ratings, new businesses) updates automatically via ISR revalidation without manual deploys.

---

## 2. High-Level Architecture

```
                                   ARCHITECTURE OVERVIEW
 ==========================================================================================

  [Browser]
      |
      v
  [Vercel Edge / CDN]  <-- Static assets cached at edge (HTML, CSS, JS, images)
      |
      v
  [Next.js App Router]
      |
      +-- Static Pages (SSG at build time)
      |     Homepage, About, Contact, Privacy, Terms
      |
      +-- ISR Pages (generated on-demand, revalidated periodically)
      |     City pages, Category pages, City+Category combos,
      |     Business profiles, Article pages, Author profiles
      |
      +-- Server Components (real-time)
      |     Search results page
      |
      +-- API Routes (/api/*)
      |     POST /api/reviews
      |     POST /api/search
      |     POST /api/auth/*
      |     POST /api/revalidate (webhook)
      |
      v
  [Database Layer]
      |
      +-- PostgreSQL (Supabase)  <-- Primary data store
      |     Cities, Categories, Businesses, Reviews, Articles, Users
      |
      +-- Redis (Upstash)  <-- Cache layer
      |     Search results, rating aggregates, session tokens
      |
      +-- Cloudinary / Vercel Blob  <-- Image storage
            Business photos, user avatars, article images


  DATA FLOW FOR ISR PAGES:
  ========================

  1. First request  -->  Next.js generates page  -->  Cached at CDN
  2. Subsequent requests  -->  Served from CDN cache (fast)
  3. After revalidation period  -->  Background regeneration  -->  New cache
  4. Business owner updates listing  -->  On-demand revalidation webhook  -->  Instant update


  DATA FLOW FOR REVIEWS:
  ======================

  1. User submits review  -->  API Route validates  -->  Write to PostgreSQL
  2. API Route triggers  -->  On-demand revalidation for business page
  3. Rating aggregate  -->  Updated in Redis cache  -->  Reflected on next page load
```

---

## 3. URL Structure & Page Types

### Complete URL Map

```
STATIC PAGES (built at deploy time):
  /                                       Homepage
  /over-ons                               About page
  /contact                                Contact page
  /privacy                                Privacy policy
  /voorwaarden                            Terms & conditions
  /sitemap.xml                            Dynamic sitemap index

ISR PAGES - CITIES (42 pages, revalidate: 3600s):
  /steden                                 All cities overview
  /steden/amsterdam                       City landing page
  /steden/rotterdam                       City landing page
  /steden/utrecht                         City landing page
  /steden/den-haag                        City landing page
  /steden/eindhoven                       City landing page
  /steden/groningen                       City landing page
  ... (42 total)

ISR PAGES - CATEGORIES (8+ pages, revalidate: 3600s):
  /categorieen                            All categories overview
  /categorieen/restaurants                Category landing page
  /categorieen/wellness                   Category landing page
  /categorieen/nachtleven                 Category landing page
  /categorieen/hotels                     Category landing page
  /categorieen/beauty                     Category landing page
  /categorieen/shopping                   Category landing page
  /categorieen/cafes                      Category landing page
  /categorieen/sport-fitness              Category landing page

ISR PAGES - CITY + CATEGORY COMBOS (42 x 8 = 336 pages, revalidate: 3600s):
  /amsterdam/restaurants                  City + category combo
  /amsterdam/wellness                     City + category combo
  /rotterdam/nachtleven                   City + category combo
  ... (336+ combinations)

ISR PAGES - BUSINESSES (N pages, revalidate: 1800s):
  /amsterdam/restaurants/restaurant-locale         Business profile
  /rotterdam/wellness/spa-wellness-oase            Business profile
  /utrecht/nachtleven/club-velvet                  Business profile
  ... (thousands of pages)

ISR PAGES - NEWS (revalidate: 900s):
  /nieuws                                 News/blog overview
  /nieuws/[slug]                          Individual article
  /nieuws/categorie/[category]            Articles by category

ISR PAGES - USERS (revalidate: 3600s):
  /reviewer/[username]                    Reviewer profile page

SERVER-RENDERED (no cache, real-time):
  /zoeken?q=...&stad=...&categorie=...    Search results page

API ROUTES:
  /api/reviews          POST    Submit a review
  /api/reviews/[id]     PUT     Edit a review
  /api/search           POST    Search businesses (backing /zoeken)
  /api/auth/login       POST    User login
  /api/auth/register    POST    User registration
  /api/auth/session     GET     Check session
  /api/revalidate       POST    Webhook to trigger on-demand ISR
  /api/businesses/claim POST    Business owner claim
```

### Page Template Mapping

```
TEMPLATE                  USED BY                          ESTIMATED COUNT
--------------------------------------------------------------------------------
HomeTemplate              /                                1
CityOverviewTemplate      /steden                          1
CityTemplate              /steden/[city]                   42
CategoryOverviewTemplate  /categorieen                     1
CategoryTemplate          /categorieen/[category]          8
CityCategory Template     /[city]/[category]               336
BusinessTemplate          /[city]/[category]/[business]    2,847+ (grows)
NewsOverviewTemplate      /nieuws                          1
ArticleTemplate           /nieuws/[slug]                   ~200 (grows)
ReviewerTemplate          /reviewer/[username]             ~500 (grows)
SearchTemplate            /zoeken                          1 (SSR)
StaticTemplate            /over-ons, /contact, etc.        4
--------------------------------------------------------------------------------
TOTAL AT LAUNCH:          ~3,442 pages
TOTAL AT SCALE:           ~10,000+ pages (handled by ISR)
```

---

## 4. Data Schema

### PostgreSQL Schema (Supabase)

```sql
-- ============================================================
-- CITIES
-- ============================================================
CREATE TABLE cities (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(100) NOT NULL,           -- "Amsterdam"
    slug            VARCHAR(100) NOT NULL UNIQUE,     -- "amsterdam"
    province        VARCHAR(100) NOT NULL,           -- "Noord-Holland"
    description     TEXT,                             -- SEO description
    meta_title      VARCHAR(160),                    -- Custom SEO title
    meta_description VARCHAR(320),                   -- Custom meta description
    latitude        DECIMAL(10, 7),                  -- 52.3676
    longitude       DECIMAL(10, 7),                  -- 4.9041
    population      INTEGER,                         -- For sorting/display
    image_url       VARCHAR(500),                    -- Hero image
    business_count  INTEGER DEFAULT 0,               -- Denormalized counter
    is_featured     BOOLEAN DEFAULT false,           -- Show on homepage
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_cities_slug ON cities(slug);
CREATE INDEX idx_cities_featured ON cities(is_featured) WHERE is_featured = true;
CREATE INDEX idx_cities_province ON cities(province);


-- ============================================================
-- CATEGORIES
-- ============================================================
CREATE TABLE categories (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(100) NOT NULL,           -- "Restaurants"
    slug            VARCHAR(100) NOT NULL UNIQUE,     -- "restaurants"
    description     TEXT,
    meta_title      VARCHAR(160),
    meta_description VARCHAR(320),
    icon            VARCHAR(50) NOT NULL,            -- Lucide icon name: "utensils"
    color           VARCHAR(50),                     -- Tailwind color: "fuchsia"
    sort_order      INTEGER DEFAULT 0,
    business_count  INTEGER DEFAULT 0,               -- Denormalized counter
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_categories_slug ON categories(slug);


-- ============================================================
-- BUSINESSES
-- ============================================================
CREATE TABLE businesses (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(200) NOT NULL,           -- "Restaurant Locale"
    slug            VARCHAR(200) NOT NULL,           -- "restaurant-locale"
    city_id         UUID NOT NULL REFERENCES cities(id),
    description     TEXT,                            -- Short description
    content         TEXT,                            -- Rich content / long description
    meta_title      VARCHAR(160),
    meta_description VARCHAR(320),

    -- Address
    street          VARCHAR(200),
    house_number    VARCHAR(20),
    postal_code     VARCHAR(10),
    neighborhood    VARCHAR(100),                    -- "Centrum", "Zuid"
    latitude        DECIMAL(10, 7),
    longitude       DECIMAL(10, 7),

    -- Contact
    phone           VARCHAR(30),
    email           VARCHAR(200),
    website         VARCHAR(500),
    instagram       VARCHAR(200),
    facebook        VARCHAR(200),

    -- Media
    image_url       VARCHAR(500),                    -- Primary image
    images          JSONB DEFAULT '[]',              -- Array of image URLs

    -- Ratings (denormalized for performance)
    average_rating  DECIMAL(2, 1) DEFAULT 0,         -- 4.9
    review_count    INTEGER DEFAULT 0,
    rating_breakdown JSONB DEFAULT '{"1":0,"2":0,"3":0,"4":0,"5":0}',

    -- Business details
    price_range     SMALLINT CHECK (price_range BETWEEN 1 AND 4),  -- 1=budget, 4=luxury
    opening_hours   JSONB,                           -- {"mon":"09:00-17:00", ...}
    features        JSONB DEFAULT '[]',              -- ["Terras", "WiFi", "Parkeren"]
    is_claimed      BOOLEAN DEFAULT false,           -- Business owner verified
    is_featured     BOOLEAN DEFAULT false,
    is_published    BOOLEAN DEFAULT true,
    status          VARCHAR(20) DEFAULT 'active',    -- active, pending, suspended

    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Composite unique: slug must be unique within a city
CREATE UNIQUE INDEX idx_businesses_city_slug ON businesses(city_id, slug);
CREATE INDEX idx_businesses_city ON businesses(city_id);
CREATE INDEX idx_businesses_rating ON businesses(average_rating DESC);
CREATE INDEX idx_businesses_featured ON businesses(is_featured) WHERE is_featured = true;
CREATE INDEX idx_businesses_published ON businesses(is_published, status);
CREATE INDEX idx_businesses_updated ON businesses(updated_at DESC);

-- Full-text search index
ALTER TABLE businesses ADD COLUMN search_vector tsvector;
CREATE INDEX idx_businesses_search ON businesses USING GIN(search_vector);

-- Trigger to keep search_vector updated
CREATE OR REPLACE FUNCTION update_business_search_vector()
RETURNS trigger AS $$
BEGIN
    NEW.search_vector :=
        setweight(to_tsvector('dutch', COALESCE(NEW.name, '')), 'A') ||
        setweight(to_tsvector('dutch', COALESCE(NEW.description, '')), 'B') ||
        setweight(to_tsvector('dutch', COALESCE(NEW.neighborhood, '')), 'C');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_businesses_search_vector
    BEFORE INSERT OR UPDATE ON businesses
    FOR EACH ROW EXECUTE FUNCTION update_business_search_vector();


-- ============================================================
-- BUSINESS <-> CATEGORY (many-to-many)
-- ============================================================
CREATE TABLE business_categories (
    business_id     UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    category_id     UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    is_primary      BOOLEAN DEFAULT false,           -- Primary category for URL
    PRIMARY KEY (business_id, category_id)
);

CREATE INDEX idx_bc_category ON business_categories(category_id);
CREATE INDEX idx_bc_primary ON business_categories(business_id) WHERE is_primary = true;


-- ============================================================
-- USERS (reviewers)
-- ============================================================
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username        VARCHAR(50) NOT NULL UNIQUE,
    display_name    VARCHAR(100) NOT NULL,
    email           VARCHAR(200) NOT NULL UNIQUE,
    password_hash   VARCHAR(200) NOT NULL,
    avatar_url      VARCHAR(500),
    bio             TEXT,
    city_id         UUID REFERENCES cities(id),      -- Reviewer's city
    review_count    INTEGER DEFAULT 0,               -- Denormalized
    is_verified     BOOLEAN DEFAULT false,
    is_admin        BOOLEAN DEFAULT false,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);


-- ============================================================
-- REVIEWS
-- ============================================================
CREATE TABLE reviews (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id     UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    rating          SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title           VARCHAR(200),
    content         TEXT NOT NULL,
    pros            JSONB DEFAULT '[]',              -- ["Goede sfeer", "Lekker eten"]
    cons            JSONB DEFAULT '[]',              -- ["Druk op zaterdag"]
    images          JSONB DEFAULT '[]',              -- User-uploaded review photos
    helpful_count   INTEGER DEFAULT 0,
    reply_count     INTEGER DEFAULT 0,
    is_published    BOOLEAN DEFAULT true,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- One review per user per business
CREATE UNIQUE INDEX idx_reviews_user_business ON reviews(user_id, business_id);
CREATE INDEX idx_reviews_business ON reviews(business_id, created_at DESC);
CREATE INDEX idx_reviews_user ON reviews(user_id, created_at DESC);
CREATE INDEX idx_reviews_rating ON reviews(business_id, rating);


-- ============================================================
-- REVIEW HELPFUL VOTES
-- ============================================================
CREATE TABLE review_votes (
    review_id       UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    is_helpful      BOOLEAN NOT NULL,                -- true = helpful, false = not helpful
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (review_id, user_id)
);


-- ============================================================
-- ARTICLES (News/Blog)
-- ============================================================
CREATE TABLE articles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           VARCHAR(300) NOT NULL,
    slug            VARCHAR(300) NOT NULL UNIQUE,
    excerpt         TEXT,                            -- Short preview
    content         TEXT NOT NULL,                   -- Markdown or HTML
    meta_title      VARCHAR(160),
    meta_description VARCHAR(320),
    image_url       VARCHAR(500),                    -- Hero image
    author_id       UUID NOT NULL REFERENCES users(id),
    category        VARCHAR(100),                    -- "Trending", "Wellness", "Nachtleven"
    tags            JSONB DEFAULT '[]',
    city_id         UUID REFERENCES cities(id),      -- Optional city association
    read_time       INTEGER,                         -- Minutes
    view_count      INTEGER DEFAULT 0,
    is_featured     BOOLEAN DEFAULT false,
    is_published    BOOLEAN DEFAULT true,
    published_at    TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_published ON articles(is_published, published_at DESC);
CREATE INDEX idx_articles_author ON articles(author_id);
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_city ON articles(city_id);
CREATE INDEX idx_articles_featured ON articles(is_featured) WHERE is_featured = true;


-- ============================================================
-- DENORMALIZED COUNTER UPDATE FUNCTIONS
-- ============================================================

-- Update business rating aggregates when a review is inserted/updated/deleted
CREATE OR REPLACE FUNCTION update_business_rating()
RETURNS trigger AS $$
DECLARE
    target_business_id UUID;
BEGIN
    IF TG_OP = 'DELETE' THEN
        target_business_id := OLD.business_id;
    ELSE
        target_business_id := NEW.business_id;
    END IF;

    UPDATE businesses SET
        average_rating = COALESCE((
            SELECT ROUND(AVG(rating)::numeric, 1)
            FROM reviews
            WHERE business_id = target_business_id AND is_published = true
        ), 0),
        review_count = (
            SELECT COUNT(*)
            FROM reviews
            WHERE business_id = target_business_id AND is_published = true
        ),
        rating_breakdown = COALESCE((
            SELECT jsonb_object_agg(r, cnt)
            FROM (
                SELECT rating AS r, COUNT(*) AS cnt
                FROM reviews
                WHERE business_id = target_business_id AND is_published = true
                GROUP BY rating
            ) sub
        ), '{"1":0,"2":0,"3":0,"4":0,"5":0}'::jsonb),
        updated_at = NOW()
    WHERE id = target_business_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_business_rating
    AFTER INSERT OR UPDATE OR DELETE ON reviews
    FOR EACH ROW EXECUTE FUNCTION update_business_rating();


-- Update city business count
CREATE OR REPLACE FUNCTION update_city_business_count()
RETURNS trigger AS $$
DECLARE
    target_city_id UUID;
BEGIN
    IF TG_OP = 'DELETE' THEN
        target_city_id := OLD.city_id;
    ELSE
        target_city_id := NEW.city_id;
    END IF;

    UPDATE cities SET
        business_count = (
            SELECT COUNT(*)
            FROM businesses
            WHERE city_id = target_city_id AND is_published = true AND status = 'active'
        ),
        updated_at = NOW()
    WHERE id = target_city_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_city_count
    AFTER INSERT OR UPDATE OR DELETE ON businesses
    FOR EACH ROW EXECUTE FUNCTION update_city_business_count();
```

### Entity Relationship Diagram

```
  +------------------+          +---------------------+
  |     cities       |          |    categories        |
  +------------------+          +---------------------+
  | id (PK)          |          | id (PK)             |
  | name             |          | name                |
  | slug (UNIQUE)    |          | slug (UNIQUE)       |
  | province         |          | icon                |
  | latitude         |          | color               |
  | longitude        |          | business_count      |
  | business_count   |          +---------------------+
  | is_featured      |                  |
  +------------------+                  |
          |                             |
          | 1:N                         | M:N
          |                             |
  +------------------+     +-------------------------+
  |   businesses     |<--->|  business_categories    |
  +------------------+     +-------------------------+
  | id (PK)          |     | business_id (FK)        |
  | name             |     | category_id (FK)        |
  | slug             |     | is_primary              |
  | city_id (FK)     |     +-------------------------+
  | average_rating   |
  | review_count     |
  | is_featured      |
  +------------------+
          |
          | 1:N
          |
  +------------------+          +------------------+
  |    reviews       |          |     users        |
  +------------------+          +------------------+
  | id (PK)          |          | id (PK)          |
  | business_id (FK) |<-------->| username (UNIQUE)|
  | user_id (FK)     |   N:1    | display_name     |
  | rating           |          | email (UNIQUE)   |
  | content          |          | review_count     |
  | helpful_count    |          | is_verified      |
  +------------------+          +------------------+
          |                            |
          | 1:N                        | 1:N
          |                            |
  +------------------+          +------------------+
  |  review_votes    |          |    articles      |
  +------------------+          +------------------+
  | review_id (FK)   |          | id (PK)          |
  | user_id (FK)     |          | title            |
  | is_helpful       |          | slug (UNIQUE)    |
  +------------------+          | author_id (FK)   |
                                | city_id (FK)     |
                                | category         |
                                +------------------+
```

---

## 5. Project File Structure

```
margret/
+-- app/                                    # Next.js App Router
|   +-- (marketing)/                        # Route group: static/marketing pages
|   |   +-- layout.tsx                      # Shared marketing layout
|   |   +-- page.tsx                        # Homepage (/)
|   |   +-- over-ons/
|   |   |   +-- page.tsx                    # About page
|   |   +-- contact/
|   |   |   +-- page.tsx                    # Contact page
|   |   +-- privacy/
|   |   |   +-- page.tsx                    # Privacy policy
|   |   +-- voorwaarden/
|   |       +-- page.tsx                    # Terms
|   |
|   +-- (directory)/                        # Route group: directory pages
|   |   +-- layout.tsx                      # Directory layout (nav + footer)
|   |   +-- steden/
|   |   |   +-- page.tsx                    # All cities overview
|   |   |   +-- [city]/
|   |   |       +-- page.tsx               # City landing page
|   |   +-- categorieen/
|   |   |   +-- page.tsx                    # All categories overview
|   |   |   +-- [category]/
|   |   |       +-- page.tsx               # Category landing page
|   |   +-- [city]/
|   |   |   +-- [category]/
|   |   |       +-- page.tsx               # City + category combo
|   |   |       +-- [business]/
|   |   |           +-- page.tsx           # Business profile page
|   |   +-- zoeken/
|   |       +-- page.tsx                    # Search results (SSR)
|   |
|   +-- (content)/                          # Route group: editorial content
|   |   +-- layout.tsx
|   |   +-- nieuws/
|   |   |   +-- page.tsx                    # News overview
|   |   |   +-- [slug]/
|   |   |   |   +-- page.tsx               # Article detail
|   |   |   +-- categorie/
|   |   |       +-- [category]/
|   |   |           +-- page.tsx           # Articles by category
|   |   +-- reviewer/
|   |       +-- [username]/
|   |           +-- page.tsx               # Reviewer profile
|   |
|   +-- api/                                # API routes
|   |   +-- reviews/
|   |   |   +-- route.ts                   # POST: submit review
|   |   |   +-- [id]/
|   |   |       +-- route.ts               # PUT: edit review
|   |   +-- search/
|   |   |   +-- route.ts                   # POST: search businesses
|   |   +-- auth/
|   |   |   +-- login/
|   |   |   |   +-- route.ts
|   |   |   +-- register/
|   |   |   |   +-- route.ts
|   |   |   +-- session/
|   |   |       +-- route.ts
|   |   +-- revalidate/
|   |       +-- route.ts                   # POST: on-demand ISR trigger
|   |
|   +-- layout.tsx                          # Root layout
|   +-- globals.css                         # Global styles (Tailwind base)
|   +-- not-found.tsx                       # Custom 404
|   +-- error.tsx                           # Error boundary
|   +-- loading.tsx                         # Global loading state
|   +-- sitemap.ts                          # Dynamic sitemap generation
|   +-- robots.ts                           # Robots.txt generation
|
+-- components/                             # Reusable UI components
|   +-- ui/                                 # Base design system
|   |   +-- Button.tsx
|   |   +-- Card.tsx
|   |   +-- Badge.tsx
|   |   +-- Rating.tsx                      # Star rating display
|   |   +-- Input.tsx
|   |   +-- Select.tsx
|   |   +-- Skeleton.tsx                    # Loading skeletons
|   |   +-- GlassCard.tsx                   # The glass-card component
|   |
|   +-- layout/                             # Layout components
|   |   +-- Navbar.tsx
|   |   +-- Footer.tsx
|   |   +-- MobileMenu.tsx
|   |   +-- BackgroundGlow.tsx              # Animated gradient blobs
|   |   +-- Breadcrumbs.tsx
|   |
|   +-- business/                           # Business-specific components
|   |   +-- BusinessCard.tsx                # Card used in listings
|   |   +-- BusinessGrid.tsx               # Grid of business cards
|   |   +-- BusinessHero.tsx               # Business detail hero
|   |   +-- BusinessInfo.tsx               # Contact, hours, features
|   |   +-- BusinessMap.tsx                # Location map
|   |   +-- BusinessGallery.tsx            # Image gallery
|   |
|   +-- review/                             # Review components
|   |   +-- ReviewCard.tsx                  # Single review display
|   |   +-- ReviewList.tsx                  # Paginated review list
|   |   +-- ReviewForm.tsx                  # Submit review form
|   |   +-- RatingBreakdown.tsx            # Rating distribution chart
|   |
|   +-- city/                               # City components
|   |   +-- CityCard.tsx                    # City card with image
|   |   +-- CityGrid.tsx                   # Grid of city cards
|   |   +-- CityHero.tsx                   # City landing hero
|   |
|   +-- category/                           # Category components
|   |   +-- CategoryCard.tsx               # Category icon card
|   |   +-- CategoryGrid.tsx               # Grid of categories
|   |
|   +-- article/                            # News/article components
|   |   +-- ArticleCard.tsx                # News card
|   |   +-- ArticleFeatured.tsx            # Large featured article
|   |   +-- ArticleGrid.tsx               # Article listing grid
|   |
|   +-- search/                             # Search components
|   |   +-- SearchBar.tsx                  # Main search input
|   |   +-- SearchFilters.tsx              # Filter sidebar
|   |   +-- SearchResults.tsx              # Results display
|   |
|   +-- seo/                                # SEO components
|       +-- JsonLd.tsx                      # Structured data (Schema.org)
|       +-- BreadcrumbJsonLd.tsx
|       +-- LocalBusinessJsonLd.tsx
|       +-- ReviewJsonLd.tsx
|
+-- lib/                                    # Core library code
|   +-- db/                                 # Database layer
|   |   +-- supabase.ts                    # Supabase client (server)
|   |   +-- supabase-browser.ts            # Supabase client (browser)
|   |   +-- queries/
|   |       +-- cities.ts                  # City queries
|   |       +-- categories.ts              # Category queries
|   |       +-- businesses.ts              # Business queries
|   |       +-- reviews.ts                 # Review queries
|   |       +-- articles.ts               # Article queries
|   |       +-- users.ts                   # User queries
|   |       +-- search.ts                 # Search queries (full-text)
|   |
|   +-- cache/                              # Caching utilities
|   |   +-- redis.ts                       # Upstash Redis client
|   |   +-- keys.ts                        # Cache key patterns
|   |   +-- strategies.ts                  # Cache-aside, write-through helpers
|   |
|   +-- auth/                               # Authentication
|   |   +-- session.ts                     # Session management
|   |   +-- middleware.ts                  # Auth middleware
|   |   +-- hash.ts                        # Password hashing
|   |
|   +-- utils/                              # Utilities
|   |   +-- slugify.ts                     # Dutch-aware slug generation
|   |   +-- format.ts                      # Date, number formatting (Dutch locale)
|   |   +-- seo.ts                         # Meta tag generators
|   |   +-- validators.ts                  # Zod schemas for API validation
|   |   +-- constants.ts                   # Site-wide constants
|   |
|   +-- types/                              # TypeScript types
|       +-- city.ts
|       +-- category.ts
|       +-- business.ts
|       +-- review.ts
|       +-- article.ts
|       +-- user.ts
|       +-- api.ts                         # API request/response types
|
+-- data/                                   # Static/seed data
|   +-- cities.json                        # All 42 Dutch cities
|   +-- categories.json                    # All categories
|   +-- seed.ts                            # Database seeding script
|
+-- public/                                 # Static assets
|   +-- images/
|   |   +-- cities/                        # City hero images
|   |   +-- categories/                    # Category illustrations
|   |   +-- og/                            # OpenGraph images
|   +-- fonts/                             # Self-hosted Inter & Playfair Display
|
+-- styles/                                 # Additional styles
|   +-- animations.css                     # float-slow, float-medium, etc.
|
+-- middleware.ts                           # Edge middleware (redirects, auth checks)
+-- next.config.ts                         # Next.js configuration
+-- tailwind.config.ts                     # Tailwind with Margret theme
+-- tsconfig.json
+-- package.json
+-- .env.local                             # Environment variables (NOT committed)
+-- .env.example                           # Template for env vars
```

---

## 6. Page Generation Strategy

### The Combinatorial Problem

```
42 cities  x  8 categories  =  336 city+category pages
336 combos x  ~8 businesses =  ~2,688 business pages
+ 42 city landing pages
+ 8 category pages
+ ~200 articles
+ ~500 reviewer profiles
= ~3,774 pages at launch
= ~50,000+ pages at scale (as businesses grow)
```

### Strategy: Hybrid ISR with Tiered Revalidation

```typescript
// app/(directory)/[city]/[category]/page.tsx
// City + Category combo pages

import { supabase } from '@/lib/db/supabase';

// Generate the most important combos at build time
export async function generateStaticParams() {
  // Only pre-build the top 6 cities x all categories = 48 pages
  // Everything else is generated on first request via ISR
  const topCities = await supabase
    .from('cities')
    .select('slug')
    .order('business_count', { ascending: false })
    .limit(6);

  const categories = await supabase
    .from('categories')
    .select('slug');

  const params = [];
  for (const city of topCities.data ?? []) {
    for (const cat of categories.data ?? []) {
      params.push({ city: city.slug, category: cat.slug });
    }
  }
  return params;
}

// ISR revalidation: regenerate every 60 minutes
export const revalidate = 3600;

// Allow dynamic params (cities not in generateStaticParams are built on-demand)
export const dynamicParams = true;
```

### Tiered Revalidation Schedule

```
PAGE TYPE                  REVALIDATE    REASON
--------------------------------------------------------------------
Homepage                   1800s (30m)   Needs fresh featured content
City landing pages         3600s (1h)    Business counts change slowly
Category pages             3600s (1h)    Same as above
City+Category combos       3600s (1h)    Listing order may change
Business profiles          1800s (30m)   Reviews come in frequently
News articles              900s  (15m)   Comments/views update
Search results             0 (SSR)       Must be real-time
Reviewer profiles          3600s (1h)    Low update frequency
Static pages               false         Only update on deploy
```

### On-Demand Revalidation

```typescript
// app/api/revalidate/route.ts
// Called by webhooks when data changes (e.g., new review submitted)

import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidation-secret');
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { type, citySlug, categorySlug, businessSlug } = await request.json();

  switch (type) {
    case 'business_updated':
      // Revalidate the business page and its parent listings
      revalidatePath(`/${citySlug}/${categorySlug}/${businessSlug}`);
      revalidatePath(`/${citySlug}/${categorySlug}`);
      revalidatePath(`/steden/${citySlug}`);
      break;

    case 'review_submitted':
      // Revalidate business page (rating changed) and city+category
      revalidatePath(`/${citySlug}/${categorySlug}/${businessSlug}`);
      revalidatePath(`/${citySlug}/${categorySlug}`);
      break;

    case 'article_published':
      revalidatePath('/nieuws');
      break;
  }

  return NextResponse.json({ revalidated: true });
}
```

---

## 7. Caching & Performance

### Multi-Layer Caching Strategy

```
LAYER 1: CDN (Vercel Edge Network)
  - All ISR pages cached at edge nodes closest to Dutch users
  - Static assets (images, fonts, CSS) cached with immutable headers
  - ~50ms response time for cached pages in NL

LAYER 2: Redis (Upstash)
  - Search results: cache for 5 minutes
  - Business rating aggregates: cache until review changes
  - City/category business counts: cache for 1 hour
  - User session tokens: cache for session lifetime
  - Popular queries: cache for 10 minutes

LAYER 3: PostgreSQL Query Cache
  - Connection pooling via Supabase (PgBouncer)
  - Materialized views for complex aggregations
  - Prepared statements for repeated queries

LAYER 4: Browser Cache
  - Service Worker for offline shell
  - LocalStorage for user preferences
  - Cache API for recently viewed businesses
```

### Redis Cache Key Patterns

```typescript
// lib/cache/keys.ts

export const CacheKeys = {
  // Business data
  business: (citySlug: string, businessSlug: string) =>
    `biz:${citySlug}:${businessSlug}`,
  businessRating: (businessId: string) =>
    `biz:rating:${businessId}`,

  // Listings
  cityBusinesses: (citySlug: string, page: number) =>
    `city:${citySlug}:biz:p${page}`,
  cityCategoryBusinesses: (citySlug: string, catSlug: string, page: number) =>
    `city:${citySlug}:cat:${catSlug}:biz:p${page}`,

  // Search
  searchResults: (query: string, city: string, category: string, page: number) =>
    `search:${query}:${city}:${category}:p${page}`,

  // Counters
  cityCount: (citySlug: string) => `count:city:${citySlug}`,
  categoryCount: (catSlug: string) => `count:cat:${catSlug}`,

  // Sessions
  session: (token: string) => `session:${token}`,
};

export const CacheTTL = {
  SEARCH_RESULTS: 300,       // 5 minutes
  BUSINESS_DATA: 1800,       // 30 minutes
  LISTING_PAGE: 3600,        // 1 hour
  RATING_AGGREGATE: 86400,   // 24 hours (invalidated on review)
  SESSION: 604800,           // 7 days
};
```

### Image Optimization

```typescript
// next.config.ts

const nextConfig = {
  images: {
    // Optimize images from these external sources
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: '*.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    // Generate these sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
};
```

### Core Web Vitals Targets

```
METRIC      TARGET    STRATEGY
LCP         < 1.5s    Pre-render critical content with ISR, optimize hero images
FID/INP     < 100ms   Minimal client JS, React Server Components by default
CLS         < 0.05    Reserve image dimensions, use skeleton loaders
FCP         < 0.8s    Self-host fonts, inline critical CSS
TTFB        < 200ms   Edge caching, CDN in Amsterdam region
```

---

## 8. SEO Strategy

### Structured Data (Schema.org JSON-LD)

```typescript
// components/seo/LocalBusinessJsonLd.tsx

interface BusinessJsonLdProps {
  business: Business;
  city: City;
  category: Category;
  reviews: Review[];
}

export function LocalBusinessJsonLd({ business, city, category, reviews }: BusinessJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: `https://margret.nl/${city.slug}/${category.slug}/${business.slug}`,
    image: business.image_url,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.street} ${business.house_number}`,
      addressLocality: city.name,
      postalCode: business.postal_code,
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.average_rating,
      reviewCount: business.review_count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.slice(0, 5).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.user_display_name },
      datePublished: r.created_at,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.content,
    })),
    openingHoursSpecification: business.opening_hours,
    priceRange: '$'.repeat(business.price_range ?? 2),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Dynamic Sitemap Generation

```typescript
// app/sitemap.ts

import { MetadataRoute } from 'next';
import { supabase } from '@/lib/db/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://margret.nl';

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/steden`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/categorieen`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/nieuws`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
  ];

  // City pages
  const { data: cities } = await supabase.from('cities').select('slug, updated_at');
  const cityPages = (cities ?? []).map((city) => ({
    url: `${baseUrl}/steden/${city.slug}`,
    lastModified: new Date(city.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Business pages (paginate for large datasets)
  const { data: businesses } = await supabase
    .from('businesses')
    .select(`
      slug,
      updated_at,
      city:cities(slug),
      business_categories!inner(
        category:categories(slug),
        is_primary
      )
    `)
    .eq('is_published', true)
    .eq('business_categories.is_primary', true);

  const businessPages = (businesses ?? []).map((biz: any) => ({
    url: `${baseUrl}/${biz.city.slug}/${biz.business_categories[0].category.slug}/${biz.slug}`,
    lastModified: new Date(biz.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...businessPages];
}
```

### Meta Tag Strategy per Page Type

```
PAGE TYPE              TITLE PATTERN                                     DESCRIPTION PATTERN
-------------------------------------------------------------------------------------------
Homepage               Margret - Ontdek, Beleef, Deel                   Ontdek de beste bedrijven in Nederland...
City landing           Beste bedrijven in {City} | Margret              Ontdek {count} bedrijven in {City}...
Category landing       Beste {Category} in Nederland | Margret          Vind de beste {category} bij jou in de buurt...
City+Category          Beste {Category} in {City} | Margret             Top {count} {category} in {City}. Lees reviews...
Business profile       {Business} - {City} | Reviews & Info | Margret  {Business} in {City}. Score: {rating}/5...
News article           {Title} | Margret Nieuws                        {excerpt}
Reviewer profile       {Name} - Reviewer | Margret                     Bekijk {count} reviews van {name}...
```

---

## 9. Security & Rate Limiting

### API Rate Limiting

```typescript
// middleware.ts (Edge Middleware)

import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Rate limiters per endpoint type
const apiLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(60, '1 m'),  // 60 requests per minute
  analytics: true,
});

const reviewLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 h'),   // 5 reviews per hour
  analytics: true,
});

const searchLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, '1 m'),  // 30 searches per minute
  analytics: true,
});

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const ip = request.headers.get('x-forwarded-for') ?? request.ip ?? 'unknown';

  // Rate limit API routes
  if (path.startsWith('/api/')) {
    let limiter = apiLimiter;
    let identifier = `api:${ip}`;

    if (path.startsWith('/api/reviews')) {
      limiter = reviewLimiter;
      identifier = `review:${ip}`;
    } else if (path.startsWith('/api/search')) {
      limiter = searchLimiter;
      identifier = `search:${ip}`;
    }

    const { success, limit, remaining, reset } = await limiter.limit(identifier);

    if (!success) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het later opnieuw.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
            'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }
  }

  // Redirect Dutch city name variations
  if (path === '/den-haag' || path === '/denhaag') {
    return NextResponse.redirect(new URL('/steden/den-haag', request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*', '/((?!_next/static|_next/image|favicon.ico).*)'],
};
```

### Authentication Pattern

```
SESSION-BASED AUTH (httpOnly cookies):

1. Login:
   POST /api/auth/login { email, password }
   -> Verify password hash (bcrypt)
   -> Generate session token (crypto.randomUUID)
   -> Store in Redis: session:{token} -> { userId, expiresAt }
   -> Set httpOnly cookie: margret_session={token}; Secure; SameSite=Lax; Path=/

2. Auth check (middleware):
   -> Read margret_session cookie
   -> Look up session:{token} in Redis
   -> If valid, attach userId to request headers
   -> If expired/missing, clear cookie, redirect to login

3. Logout:
   POST /api/auth/logout
   -> Delete session from Redis
   -> Clear cookie
```

### Input Validation (Zod)

```typescript
// lib/utils/validators.ts

import { z } from 'zod';

export const ReviewSchema = z.object({
  businessId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  title: z.string().min(3).max(200).optional(),
  content: z.string().min(20).max(5000),
  pros: z.array(z.string().max(100)).max(5).optional(),
  cons: z.array(z.string().max(100)).max(5).optional(),
});

export const SearchSchema = z.object({
  query: z.string().min(1).max(200),
  city: z.string().max(100).optional(),
  category: z.string().max(100).optional(),
  rating: z.number().min(1).max(5).optional(),
  page: z.number().int().min(1).max(100).default(1),
  limit: z.number().int().min(1).max(50).default(20),
});

export const RegisterSchema = z.object({
  username: z.string().min(3).max(50).regex(/^[a-z0-9_-]+$/),
  displayName: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(128),
});
```

---

## 10. Scaling Plan

### Phase 1: Launch (0-5K businesses)

```
INFRASTRUCTURE:
  - Vercel Pro plan (hosting + CDN)
  - Supabase free/pro (PostgreSQL + auth)
  - Upstash free tier (Redis)
  - Cloudinary free tier (images)

ESTIMATED PAGES: ~4,000
BUILD STRATEGY: Pre-build top 50 pages, ISR for everything else
EXPECTED TRAFFIC: <10K daily visits
MONTHLY COST: ~$20-50
```

### Phase 2: Growth (5K-20K businesses)

```
INFRASTRUCTURE:
  - Vercel Pro plan
  - Supabase Pro ($25/mo)
  - Upstash Pro ($10/mo)
  - Cloudinary paid ($49/mo)
  - Vercel Analytics ($10/mo)

ESTIMATED PAGES: ~25,000
NEW FEATURES:
  - Full-text search with PostgreSQL FTS
  - Email notifications (Resend)
  - Business owner dashboard (claim + analytics)
  - Review moderation queue
MONTHLY COST: ~$100-200
```

### Phase 3: Scale (20K+ businesses)

```
INFRASTRUCTURE:
  - Vercel Enterprise (or self-host on Kubernetes)
  - Supabase Pro with read replicas
  - Upstash Enterprise (dedicated Redis)
  - Algolia or Meilisearch (dedicated search)
  - CloudFront/Cloudflare for additional CDN

ESTIMATED PAGES: ~50,000+
NEW FEATURES:
  - Algolia instant search replacing PostgreSQL FTS
  - Read replicas for geographic distribution
  - Dedicated image processing pipeline
  - A/B testing infrastructure
  - Business analytics dashboard
MONTHLY COST: ~$500-1500
```

### Bottleneck Analysis

```
POTENTIAL BOTTLENECK         WHEN IT HITS           MITIGATION
-------------------------------------------------------------------------------------
Database connections         >100 concurrent users   PgBouncer (Supabase built-in)
Full-text search latency     >50K businesses         Migrate to Algolia/Meilisearch
Image loading                >10K images             Cloudinary transforms + CDN
ISR regeneration storms      >1000 pages/minute      Stagger revalidation periods
Review write throughput      >100 reviews/minute     Queue writes via Redis + worker
Sitemap generation           >50K URLs               Split into sitemap index + chunks
Build time                   >500 pre-built pages    Reduce generateStaticParams scope
```

---

## Technology Stack Summary

```
LAYER              TECHNOLOGY         RATIONALE
-------------------------------------------------------------------
Framework          Next.js 14+ (App)  ISR, Server Components, API routes
Language           TypeScript         Type safety across entire codebase
Styling            Tailwind CSS       Already used in current design
Icons              Lucide React       Already used in current design
Fonts              Inter + Playfair   Already used in current design
Database           PostgreSQL         Relational data, full-text search, JSON
Database host      Supabase           Managed Postgres, auth, storage, RLS
Cache              Upstash Redis      Serverless Redis, rate limiting
Image CDN          Cloudinary         Transforms, optimization, delivery
Hosting            Vercel             Edge network, ISR support, analytics
Validation         Zod                Runtime type checking for API inputs
Auth               Custom + Supabase  httpOnly sessions, bcrypt
Search (later)     Algolia            Sub-50ms search at scale
Email              Resend             Transactional email
Monitoring         Vercel Analytics   Core Web Vitals tracking
```

---

## Quick Start Commands

```bash
# Initialize project
npx create-next-app@latest margret --typescript --tailwind --eslint --app --src-dir=false

# Install core dependencies
npm install @supabase/supabase-js @upstash/redis @upstash/ratelimit zod lucide-react

# Install dev dependencies
npm install -D @types/node supabase

# Initialize Supabase locally
npx supabase init
npx supabase start

# Run database migrations
npx supabase db push

# Seed initial data
npx tsx data/seed.ts

# Start development
npm run dev
```
