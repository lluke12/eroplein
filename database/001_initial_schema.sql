-- ============================================================
-- Margret Database Schema
-- Run against Supabase PostgreSQL
-- ============================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- CITIES
-- ============================================================
CREATE TABLE cities (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(100) NOT NULL,
    slug            VARCHAR(100) NOT NULL UNIQUE,
    province        VARCHAR(100) NOT NULL,
    description     TEXT,
    meta_title      VARCHAR(160),
    meta_description VARCHAR(320),
    latitude        DECIMAL(10, 7),
    longitude       DECIMAL(10, 7),
    population      INTEGER,
    image_url       VARCHAR(500),
    business_count  INTEGER DEFAULT 0,
    is_featured     BOOLEAN DEFAULT false,
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
    name            VARCHAR(100) NOT NULL,
    slug            VARCHAR(100) NOT NULL UNIQUE,
    description     TEXT,
    meta_title      VARCHAR(160),
    meta_description VARCHAR(320),
    icon            VARCHAR(50) NOT NULL,
    color           VARCHAR(50),
    sort_order      INTEGER DEFAULT 0,
    business_count  INTEGER DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_sort ON categories(sort_order);


-- ============================================================
-- USERS
-- ============================================================
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username        VARCHAR(50) NOT NULL UNIQUE,
    display_name    VARCHAR(100) NOT NULL,
    email           VARCHAR(200) NOT NULL UNIQUE,
    password_hash   VARCHAR(200) NOT NULL,
    avatar_url      VARCHAR(500),
    bio             TEXT,
    city_id         UUID REFERENCES cities(id) ON DELETE SET NULL,
    review_count    INTEGER DEFAULT 0,
    is_verified     BOOLEAN DEFAULT false,
    is_admin        BOOLEAN DEFAULT false,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_city ON users(city_id);


-- ============================================================
-- BUSINESSES
-- ============================================================
CREATE TABLE businesses (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(200) NOT NULL,
    slug            VARCHAR(200) NOT NULL,
    city_id         UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
    description     TEXT,
    content         TEXT,
    meta_title      VARCHAR(160),
    meta_description VARCHAR(320),

    -- Address
    street          VARCHAR(200),
    house_number    VARCHAR(20),
    postal_code     VARCHAR(10),
    neighborhood    VARCHAR(100),
    latitude        DECIMAL(10, 7),
    longitude       DECIMAL(10, 7),

    -- Contact
    phone           VARCHAR(30),
    email           VARCHAR(200),
    website         VARCHAR(500),
    instagram       VARCHAR(200),
    facebook        VARCHAR(200),

    -- Media
    image_url       VARCHAR(500),
    images          JSONB DEFAULT '[]',

    -- Ratings (denormalized)
    average_rating  DECIMAL(2, 1) DEFAULT 0,
    review_count    INTEGER DEFAULT 0,
    rating_breakdown JSONB DEFAULT '{"1":0,"2":0,"3":0,"4":0,"5":0}',

    -- Details
    price_range     SMALLINT CHECK (price_range BETWEEN 1 AND 4),
    opening_hours   JSONB,
    features        JSONB DEFAULT '[]',
    is_claimed      BOOLEAN DEFAULT false,
    is_featured     BOOLEAN DEFAULT false,
    is_published    BOOLEAN DEFAULT true,
    status          VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'pending', 'suspended')),

    -- Search
    search_vector   tsvector,

    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_businesses_city_slug ON businesses(city_id, slug);
CREATE INDEX idx_businesses_city ON businesses(city_id);
CREATE INDEX idx_businesses_rating ON businesses(average_rating DESC);
CREATE INDEX idx_businesses_featured ON businesses(is_featured) WHERE is_featured = true;
CREATE INDEX idx_businesses_published ON businesses(is_published, status);
CREATE INDEX idx_businesses_updated ON businesses(updated_at DESC);
CREATE INDEX idx_businesses_search ON businesses USING GIN(search_vector);


-- ============================================================
-- BUSINESS <-> CATEGORY (many-to-many)
-- ============================================================
CREATE TABLE business_categories (
    business_id     UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    category_id     UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    is_primary      BOOLEAN DEFAULT false,
    PRIMARY KEY (business_id, category_id)
);

CREATE INDEX idx_bc_category ON business_categories(category_id);
CREATE INDEX idx_bc_primary ON business_categories(business_id) WHERE is_primary = true;


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
    pros            JSONB DEFAULT '[]',
    cons            JSONB DEFAULT '[]',
    images          JSONB DEFAULT '[]',
    helpful_count   INTEGER DEFAULT 0,
    reply_count     INTEGER DEFAULT 0,
    is_published    BOOLEAN DEFAULT true,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_reviews_user_business ON reviews(user_id, business_id);
CREATE INDEX idx_reviews_business ON reviews(business_id, created_at DESC);
CREATE INDEX idx_reviews_user ON reviews(user_id, created_at DESC);
CREATE INDEX idx_reviews_rating ON reviews(business_id, rating);


-- ============================================================
-- REVIEW VOTES
-- ============================================================
CREATE TABLE review_votes (
    review_id       UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    is_helpful      BOOLEAN NOT NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (review_id, user_id)
);


-- ============================================================
-- ARTICLES
-- ============================================================
CREATE TABLE articles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           VARCHAR(300) NOT NULL,
    slug            VARCHAR(300) NOT NULL UNIQUE,
    excerpt         TEXT,
    content         TEXT NOT NULL,
    meta_title      VARCHAR(160),
    meta_description VARCHAR(320),
    image_url       VARCHAR(500),
    author_id       UUID NOT NULL REFERENCES users(id),
    category        VARCHAR(100),
    tags            JSONB DEFAULT '[]',
    city_id         UUID REFERENCES cities(id) ON DELETE SET NULL,
    read_time       INTEGER,
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
-- FUNCTIONS: Search vector update
-- ============================================================
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
    BEFORE INSERT OR UPDATE OF name, description, neighborhood ON businesses
    FOR EACH ROW EXECUTE FUNCTION update_business_search_vector();


-- ============================================================
-- FUNCTIONS: Rating aggregate update
-- ============================================================
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

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_business_rating
    AFTER INSERT OR UPDATE OR DELETE ON reviews
    FOR EACH ROW EXECUTE FUNCTION update_business_rating();


-- ============================================================
-- FUNCTIONS: City business count update
-- ============================================================
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

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_city_count
    AFTER INSERT OR UPDATE OR DELETE ON businesses
    FOR EACH ROW EXECUTE FUNCTION update_city_business_count();


-- ============================================================
-- FUNCTIONS: Category business count update
-- ============================================================
CREATE OR REPLACE FUNCTION update_category_business_count()
RETURNS trigger AS $$
DECLARE
    target_category_id UUID;
BEGIN
    IF TG_OP = 'DELETE' THEN
        target_category_id := OLD.category_id;
    ELSE
        target_category_id := NEW.category_id;
    END IF;

    UPDATE categories SET
        business_count = (
            SELECT COUNT(*)
            FROM business_categories bc
            JOIN businesses b ON b.id = bc.business_id
            WHERE bc.category_id = target_category_id
              AND b.is_published = true
              AND b.status = 'active'
        ),
        updated_at = NOW()
    WHERE id = target_category_id;

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_category_count
    AFTER INSERT OR UPDATE OR DELETE ON business_categories
    FOR EACH ROW EXECUTE FUNCTION update_category_business_count();


-- ============================================================
-- FUNCTIONS: User review count update
-- ============================================================
CREATE OR REPLACE FUNCTION update_user_review_count()
RETURNS trigger AS $$
DECLARE
    target_user_id UUID;
BEGIN
    IF TG_OP = 'DELETE' THEN
        target_user_id := OLD.user_id;
    ELSE
        target_user_id := NEW.user_id;
    END IF;

    UPDATE users SET
        review_count = (
            SELECT COUNT(*)
            FROM reviews
            WHERE user_id = target_user_id AND is_published = true
        ),
        updated_at = NOW()
    WHERE id = target_user_id;

    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_user_review_count
    AFTER INSERT OR UPDATE OR DELETE ON reviews
    FOR EACH ROW EXECUTE FUNCTION update_user_review_count();


-- ============================================================
-- FUNCTIONS: updated_at auto-update
-- ============================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_cities_updated_at BEFORE UPDATE ON cities FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_categories_updated_at BEFORE UPDATE ON categories FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_businesses_updated_at BEFORE UPDATE ON businesses FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_reviews_updated_at BEFORE UPDATE ON reviews FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_articles_updated_at BEFORE UPDATE ON articles FOR EACH ROW EXECUTE FUNCTION set_updated_at();


-- ============================================================
-- ROW LEVEL SECURITY (Supabase)
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE review_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_categories ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public can read cities" ON cities FOR SELECT USING (true);
CREATE POLICY "Public can read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public can read published businesses" ON businesses FOR SELECT USING (is_published = true AND status = 'active');
CREATE POLICY "Public can read published reviews" ON reviews FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read published articles" ON articles FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read business categories" ON business_categories FOR SELECT USING (true);
CREATE POLICY "Public can read user profiles" ON users FOR SELECT USING (true);

-- Users can manage their own reviews
CREATE POLICY "Users can insert own reviews" ON reviews FOR INSERT WITH CHECK (auth.uid()::uuid = user_id);
CREATE POLICY "Users can update own reviews" ON reviews FOR UPDATE USING (auth.uid()::uuid = user_id);
CREATE POLICY "Users can delete own reviews" ON reviews FOR DELETE USING (auth.uid()::uuid = user_id);

-- Users can manage their own votes
CREATE POLICY "Users can insert own votes" ON review_votes FOR INSERT WITH CHECK (auth.uid()::uuid = user_id);
CREATE POLICY "Users can delete own votes" ON review_votes FOR DELETE USING (auth.uid()::uuid = user_id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid()::uuid = id);
