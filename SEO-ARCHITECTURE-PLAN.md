# Margret SEO Architecture Plan
## Comprehensive SEO Strategy for a Dutch Directory/Review Website

**Date:** February 2026
**Scope:** 42+ Dutch cities, multiple business categories, reviews, news articles
**Research basis:** 25+ authoritative sources including Google Search Central, Schema.org, Search Engine Journal, BrightLocal, and programmatic SEO case studies of TripAdvisor, Yelp, and Trustpilot.

---

## Executive Summary

### Key Findings

1. **City-first URL structure wins for local directories.** The pattern `/amsterdam/restaurants/` outperforms `/restaurants/amsterdam/` because it mirrors how Dutch users search ("restaurants Amsterdam") and how Google processes local intent. TripAdvisor and Yelp both use location-primary hierarchies, and this pattern has been proven at scale across 7+ million indexed pages [Practical Programmatic, 2025].

2. **Programmatic SEO is the correct strategy but demands quality guardrails.** Generating city x category pages at scale is proven (TripAdvisor generates 226M organic visits/month this way), but Google's E-E-A-T guidelines and December 2025 core update specifically penalize thin programmatic pages. Every page must contain unique, substantive content beyond template variables [Google Search Central, 2025].

3. **Schema.org markup is non-negotiable for rich results.** LocalBusiness, AggregateRating, Review, BreadcrumbList, and Article schemas are critical. However, Google's 2019 policy update means self-serving review markup rules must be followed carefully -- as a third-party directory, Margret is in an advantageous position to use AggregateRating markup [BrightLocal, 2025].

4. **Dutch keyword patterns are predictable and templateable.** The dominant patterns are `[category] [city]`, `beste [category] [city]`, `[category] in de buurt`, and `[bedrijfsnaam] ervaringen/reviews`. This predictability enables systematic keyword targeting across all city-category combinations [RankTracker, 2025].

5. **Internal linking architecture is the single largest lever for a directory site.** With thousands of interlinked pages, proper hub-and-spoke linking can improve visibility by up to 40%. The linking structure should mirror the URL hierarchy: homepage > city hubs > city+category pages > individual business pages [Search Engine Land, 2025].

---

## 1. URL Structure

### Recommended Hierarchy

```
https://margret.nl/                                    # Homepage
https://margret.nl/steden/                             # All cities overview
https://margret.nl/amsterdam/                          # City hub page
https://margret.nl/amsterdam/restaurants/              # City + Category listing
https://margret.nl/amsterdam/restaurants/de-kas/       # Individual business page
https://margret.nl/amsterdam/restaurants/de-kas/ervaringen/  # Reviews for business
https://margret.nl/categorieen/                        # All categories overview
https://margret.nl/categorieen/restaurants/             # Category hub (cross-city)
https://margret.nl/nieuws/                             # News/blog index
https://margret.nl/nieuws/2026/02/artikel-slug/        # Individual news article
https://margret.nl/over-ons/                           # About page
https://margret.nl/contact/                            # Contact page
```

### Why City-First (`/amsterdam/restaurants/`) Over Category-First (`/restaurants/amsterdam/`)

| Factor | City-First | Category-First |
|--------|-----------|----------------|
| Matches Dutch search intent | "restaurants Amsterdam" = natural order | Less intuitive |
| Local SEO signals | City as primary topic signal | Category as primary signal |
| User mental model | "I'm exploring Amsterdam" | "I'm exploring restaurants" |
| URL readability | Immediately clear location context | Requires reading further |
| Proven at scale | TripAdvisor, Yelp both use this | Less common in successful directories |
| Supports city hub pages | Natural parent-child relationship | Awkward hierarchy |

### URL Rules

- **Lowercase only**, hyphens as word separators
- **No trailing parameters** for canonical pages (avoid `?sort=rating&page=2` in indexed URLs)
- **Keep slugs to 3-5 words** (under 60 characters total)
- **Dutch-language slugs** for all directory content (`/ervaringen/` not `/reviews/`, `/categorieen/` not `/categories/`)
- **No stop words** in slugs unless needed for readability
- **Business slug format:** use the business name hyphenated (`/de-kas/`, `/hotel-v-nesplein/`)
- **Avoid IDs in URLs:** `/amsterdam/restaurants/de-kas/` not `/amsterdam/restaurants/12345/`

### Pagination URLs

```
https://margret.nl/amsterdam/restaurants/              # Page 1 (canonical)
https://margret.nl/amsterdam/restaurants/pagina/2/     # Page 2
https://margret.nl/amsterdam/restaurants/pagina/3/     # Page 3
```

- Each paginated page gets a **self-referencing canonical** (do NOT canonicalize page 2 to page 1)
- Use `<link rel="next">` and `<link rel="prev">` for crawler guidance
- Include pagination links as `<a href>` elements (not JavaScript-only navigation)

### Filter/Sort URLs (Faceted Navigation)

```
# Indexable high-value filters (static URLs):
https://margret.nl/amsterdam/restaurants/italiaans/    # Sub-category (cuisine type)
https://margret.nl/amsterdam/wellness/massage/         # Sub-category

# Non-indexable filters (use noindex or client-side rendering):
?sort=rating                                           # Sort order
?prijs=hoog                                            # Price filter
?open-nu=true                                          # Availability filter
```

**Rule:** Only create indexable filter pages when there is demonstrable search volume for that combination. Use `<meta name="robots" content="noindex, follow">` for low-value filter combinations to prevent index bloat while preserving link equity flow.

---

## 2. Schema.org Structured Data

### Required Schema Types by Page

#### 2.1 All Pages: Organization + WebSite + BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Margret",
  "url": "https://margret.nl/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://margret.nl/zoeken?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Margret",
  "url": "https://margret.nl/",
  "logo": "https://margret.nl/images/logo.png",
  "sameAs": [
    "https://www.facebook.com/margret",
    "https://www.instagram.com/margret",
    "https://twitter.com/margret"
  ]
}
```

#### 2.2 City Hub Pages (`/amsterdam/`)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://margret.nl/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Steden",
      "item": "https://margret.nl/steden/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Amsterdam",
      "item": "https://margret.nl/amsterdam/"
    }
  ]
}
```

#### 2.3 City + Category Pages (`/amsterdam/restaurants/`)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Beste Restaurants in Amsterdam",
  "description": "Ontdek de beste restaurants in Amsterdam op basis van ervaringen en beoordelingen.",
  "numberOfItems": 42,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Restaurant",
        "name": "De Kas",
        "url": "https://margret.nl/amsterdam/restaurants/de-kas/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kamerlingh Onneslaan 3",
          "addressLocality": "Amsterdam",
          "postalCode": "1097 DE",
          "addressCountry": "NL"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "127"
        },
        "image": "https://margret.nl/images/amsterdam/de-kas.jpg",
        "priceRange": "$$$$"
      }
    }
  ]
}
```

**Use specific subtypes** of LocalBusiness where applicable:
- `Restaurant` for restaurants
- `HealthAndBeautyBusiness` for wellness/beauty
- `LodgingBusiness` / `Hotel` for hotels
- `NightClub` / `BarOrPub` for nightlife
- `Store` for shopping
- `TouristAttraction` for attractions

#### 2.4 Individual Business Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "De Kas",
  "url": "https://margret.nl/amsterdam/restaurants/de-kas/",
  "image": ["https://margret.nl/images/amsterdam/de-kas-1.jpg"],
  "telephone": "+31-20-4624562",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kamerlingh Onneslaan 3",
    "addressLocality": "Amsterdam",
    "postalCode": "1097 DE",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.3547,
    "longitude": 4.9237
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "12:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "$$$$",
  "servesCuisine": "European",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "127",
    "ratingCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jan de Vries"
      },
      "datePublished": "2026-01-15",
      "reviewBody": "Geweldige ervaring, het eten was fantastisch...",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}
```

**Critical note on AggregateRating:** As a third-party review directory, Margret is eligible to display AggregateRating rich snippets. Google's policy states that self-serving review markup (where entity A reviews itself on its own site) is not eligible -- but directory sites reviewing other businesses ARE eligible. This is a significant competitive advantage [Google Search Central, Review Snippet Documentation].

#### 2.5 News/Article Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "De 10 Beste Nieuwe Restaurants in Amsterdam 2026",
  "author": {
    "@type": "Person",
    "name": "Redactie Margret",
    "url": "https://margret.nl/auteurs/redactie/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Margret",
    "logo": {
      "@type": "ImageObject",
      "url": "https://margret.nl/images/logo.png"
    }
  },
  "datePublished": "2026-02-10",
  "dateModified": "2026-02-12",
  "image": "https://margret.nl/images/nieuws/beste-restaurants-2026.jpg",
  "description": "Ontdek de beste nieuwe restaurants die Amsterdam in 2026 te bieden heeft."
}
```

### Schema Validation Checklist

- [ ] All ratings displayed in schema MUST match ratings visible on the page
- [ ] Review text in schema MUST be visible to users on the page
- [ ] Use JSON-LD format (Google's preferred format)
- [ ] Validate with Google Rich Results Test before deployment
- [ ] Monitor in Google Search Console under Enhancements
- [ ] Keep `reviewCount` and `ratingValue` dynamically updated

---

## 3. Internal Linking Strategy

### 3.1 Hub-and-Spoke Architecture

```
                          HOMEPAGE
                        /    |     \
                      /      |       \
               CITY HUBS   CATEGORY HUBS   NEWS INDEX
              /    |    \       |              |
         City+Cat  City+Cat  City+Cat      Articles
            |         |         |
        Businesses  Businesses  Businesses
            |         |         |
         Reviews   Reviews    Reviews
```

### 3.2 Linking Rules by Page Type

#### Homepage
- Link to all 42+ city hub pages (in a prominent "Steden" section)
- Link to all main category pages
- Link to featured/trending businesses
- Link to latest news articles
- Link to "most reviewed" or "highest rated" businesses

#### City Hub Pages (`/amsterdam/`)
- Link UP to homepage and cities overview
- Link DOWN to all categories available in that city (`/amsterdam/restaurants/`, `/amsterdam/wellness/`, etc.)
- Link ACROSS to nearby/related cities (e.g., Amsterdam links to Haarlem, Amstelveen, Utrecht)
- Feature top-rated businesses across categories
- Link to city-specific news articles

#### City + Category Pages (`/amsterdam/restaurants/`)
- Link UP to city hub (`/amsterdam/`) and category hub (`/categorieen/restaurants/`)
- Link DOWN to individual business pages
- Link ACROSS to other categories in the same city ("Ook in Amsterdam: Wellness, Nightlife, Hotels")
- Link ACROSS to same category in nearby cities ("Restaurants in: Rotterdam, Den Haag, Utrecht")
- Include breadcrumb navigation: Home > Amsterdam > Restaurants

#### Individual Business Pages
- Link UP to city+category page (breadcrumb)
- Link ACROSS to "vergelijkbare bedrijven" (similar businesses in same city+category)
- Link to review page for this business
- Link to any news articles mentioning this business
- Include map with nearby businesses (linked)

#### Category Hub Pages (`/categorieen/restaurants/`)
- Link to all cities where this category has listings
- Feature top-rated businesses in this category nationally
- Link to relevant news articles about this category

#### News/Article Pages
- Link to all businesses mentioned in the article
- Link to relevant city and category pages
- Link to related articles
- Include author byline with link to author page

### 3.3 Anchor Text Strategy

| Link Type | Anchor Text Pattern | Example |
|-----------|-------------------|---------|
| City hub link | City name | "Amsterdam" |
| City+Category link | "[Category] in [City]" | "Restaurants in Amsterdam" |
| Business link | Business name | "De Kas" |
| Cross-city link | "[Category] [City]" | "Restaurants Rotterdam" |
| Cross-category link | "[Category] in [City]" | "Wellness in Amsterdam" |
| News article link | Article headline or descriptive phrase | "Beste nieuwe restaurants 2026" |

**Rules:**
- Vary anchor text naturally (do not repeat identical anchors excessively)
- Use 3-8 internal links per 1000 words of content
- Contextual links within content carry more weight than sidebar/footer links
- Every page should be reachable within 3 clicks from the homepage
- Regularly audit for broken internal links

### 3.4 Footer and Sidebar Linking

**Footer:** Include links to top 10-15 most important city pages and all main categories. These serve as site-wide navigational links.

**Sidebar (on listing pages):** Show "Populair in [City]" with links to top businesses, and "Andere categorieen" with links to other categories in the same city.

---

## 4. Meta Tags Strategy

### 4.1 Title Tag Patterns

| Page Type | Title Pattern | Example |
|-----------|--------------|---------|
| Homepage | `[Brand] - [Value Proposition]` | `Margret - Ontdek de Beste Bedrijven in Nederland` |
| City Hub | `[City] - Beste Bedrijven & Ervaringen \| Margret` | `Amsterdam - Beste Bedrijven & Ervaringen \| Margret` |
| City + Category | `Beste [Category] in [City] ([Year]) \| Margret` | `Beste Restaurants in Amsterdam (2026) \| Margret` |
| Business Page | `[Business Name] - [Category] [City] \| Ervaringen & Reviews \| Margret` | `De Kas - Restaurant Amsterdam \| Ervaringen & Reviews \| Margret` |
| Review Page | `[Business Name] Ervaringen & Beoordelingen \| Margret` | `De Kas Ervaringen & Beoordelingen \| Margret` |
| Category Hub | `[Category] in Nederland - Top [Category] per Stad \| Margret` | `Restaurants in Nederland - Top Restaurants per Stad \| Margret` |
| News Article | `[Headline] \| Margret` | `De 10 Beste Nieuwe Restaurants in Amsterdam 2026 \| Margret` |
| Cities Overview | `Alle Steden - Ontdek Bedrijven in 42+ Nederlandse Steden \| Margret` | -- |

**Title Tag Rules:**
- Keep under 60 characters (Google truncates at ~60 chars)
- Place primary keyword at the beginning
- Include city name for local pages
- Brand name at the end, separated by `|`
- Include year for list/ranking pages (signals freshness)
- Use `Beste` at the start for category listing pages (matches dominant Dutch search pattern)

### 4.2 Meta Description Patterns

| Page Type | Description Pattern | Example |
|-----------|-------------------|---------|
| Homepage | General value proposition with call-to-action | `Vind de beste bedrijven in heel Nederland. Lees eerlijke ervaringen en reviews van echte bezoekers op Margret. Ontdek restaurants, wellness, hotels en meer.` |
| City Hub | City-specific overview with category mentions | `Ontdek de beste bedrijven in Amsterdam. Van restaurants en wellness tot nightlife en hotels. Lees {X}+ ervaringen van echte bezoekers op Margret.` |
| City + Category | Specific category + city with stats | `Vergelijk de {X} beste restaurants in Amsterdam op basis van {Y}+ ervaringen. Bekijk beoordelingen, prijzen en openingstijden. Vind jouw ideale restaurant.` |
| Business Page | Business description with rating | `{Business} in {City} heeft een {rating}/5 beoordeling op basis van {count} ervaringen. Bekijk openingstijden, menu, prijzen en lees wat bezoekers ervan vonden.` |
| News Article | Article summary with hook | `{Summary of article in ~130 characters}. Lees meer op Margret.` |

**Meta Description Rules:**
- Keep between 120-160 characters
- Include primary keyword and city name
- Include a compelling call-to-action or unique value
- Use numbers/stats where possible (review counts, ratings)
- Make each description unique (no duplicates across pages)
- Include the word "ervaringen" or "reviews" (matches Dutch search behavior)

### 4.3 Open Graph and Social Meta Tags

```html
<meta property="og:title" content="Beste Restaurants in Amsterdam (2026) | Margret">
<meta property="og:description" content="Vergelijk de 150 beste restaurants in Amsterdam...">
<meta property="og:image" content="https://margret.nl/images/og/amsterdam-restaurants.jpg">
<meta property="og:url" content="https://margret.nl/amsterdam/restaurants/">
<meta property="og:type" content="website">
<meta property="og:locale" content="nl_NL">
<meta property="og:site_name" content="Margret">
```

### 4.4 Additional Meta Tags

```html
<!-- Language and region -->
<html lang="nl">
<link rel="alternate" hreflang="nl-nl" href="https://margret.nl/amsterdam/restaurants/">
<link rel="alternate" hreflang="x-default" href="https://margret.nl/amsterdam/restaurants/">

<!-- Canonical (self-referencing) -->
<link rel="canonical" href="https://margret.nl/amsterdam/restaurants/">

<!-- Robots -->
<meta name="robots" content="index, follow">

<!-- For non-indexable filter pages -->
<meta name="robots" content="noindex, follow">

<!-- Geo meta tags for local SEO -->
<meta name="geo.region" content="NL">
<meta name="geo.placename" content="Amsterdam">
```

---

## 5. Programmatic SEO Strategy

### 5.1 The City x Category Matrix

With 42 cities and ~8 main categories, the base matrix produces **336 landing pages**. With sub-categories, this can expand to 1,000+ pages.

```
Matrix Example:
                  Restaurants  Wellness  Nightlife  Hotels  Beauty  Shopping  Cultuur  Sport
Amsterdam              X          X         X         X       X        X        X       X
Rotterdam              X          X         X         X       X        X        X       X
Den Haag               X          X         X         X       X        X        X       X
Utrecht                X          X         X         X       X        X        X       X
Eindhoven              X          X         X         X       X        X        X       X
... (42 cities)
```

### 5.2 Template Structure for City + Category Pages

Each programmatically generated page MUST contain:

#### Required Elements (Template-Driven)
1. **H1:** "Beste [Category] in [City]"
2. **Introduction paragraph** (unique per city+category, 100-200 words): Brief overview of the [category] scene in [city], including a local insight or statistic
3. **Listing of businesses** with: name, thumbnail, rating, review count, price range, address, short description
4. **Top 3 featured businesses** with expanded information
5. **FAQ section** with city+category-specific questions
6. **Map** showing business locations
7. **Related categories** in the same city
8. **Same category** in nearby cities
9. **Latest reviews** for businesses in this city+category
10. **Breadcrumb navigation**

#### Unique Content Requirements (Not Just Template Variables)
- Each city+category page needs **at minimum 300 words of unique editorial content**
- Include city-specific insights ("Amsterdam staat bekend om...")
- Include seasonal/trending information when available
- Pull in recent review snippets as dynamic unique content
- Add "Tips van de redactie" (editorial tips) section
- Include local statistics or data points

### 5.3 Avoiding Thin Content Penalties

**DO:**
- Ensure every page answers a genuine user query
- Include user-generated content (reviews) as substantial unique content
- Add editorial commentary and local insights
- Show real data: ratings, review counts, opening hours, contact info
- Update pages regularly with new reviews and data
- Only create a city+category page when there are at least 3-5 businesses to list

**DO NOT:**
- Create pages with only a title and a list of 1-2 businesses
- Use identical introductory text across all cities (just swapping city names)
- Leave pages with zero reviews or ratings
- Create sub-category pages without sufficient volume (e.g., /venlo/japanse-restaurants/ with 1 listing)

### 5.4 Content Scaling Workflow

```
1. Database populated with business data (NAP, category, city)
2. Template renders base page structure
3. Editorial team writes unique intro per city+category (can use AI as draft, human reviews)
4. FAQs generated per city+category (at least 3 unique questions per page)
5. Reviews/ratings pulled dynamically from database
6. Internal links generated automatically based on city-category relationships
7. Schema markup generated from structured business data
8. Meta tags generated from template patterns with dynamic variables
9. Sitemap updated automatically when new pages are created
10. Quality audit: pages with < 3 listings or < 100 words flagged for review
```

### 5.5 Keyword Targeting per Page Type

| Page Type | Primary Keyword | Secondary Keywords |
|-----------|----------------|-------------------|
| City + Category | `beste [category] [city]` | `[category] in [city]`, `top [category] [city]`, `[category] [city] ervaringen` |
| Business Page | `[business name]` | `[business name] ervaringen`, `[business name] reviews`, `[business name] [city]` |
| City Hub | `[city] uitgaan` / `[city] bezienswaardigheden` | `wat te doen in [city]`, `beste plekken [city]` |
| Category Hub | `[category] nederland` | `beste [category] nederland`, `top [category] nederland` |
| News | Article-specific long-tail keyword | Related topical keywords |

---

## 6. Technical SEO

### 6.1 Sitemap Strategy

Use a **sitemap index** file that references multiple categorized sitemaps:

```xml
<!-- https://margret.nl/sitemap.xml (Sitemap Index) -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://margret.nl/sitemaps/sitemap-pages.xml</loc>
    <lastmod>2026-02-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://margret.nl/sitemaps/sitemap-steden.xml</loc>
    <lastmod>2026-02-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://margret.nl/sitemaps/sitemap-bedrijven-amsterdam.xml</loc>
    <lastmod>2026-02-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://margret.nl/sitemaps/sitemap-bedrijven-rotterdam.xml</loc>
    <lastmod>2026-02-15</lastmod>
  </sitemap>
  <!-- One sitemap per city for business pages -->
  <sitemap>
    <loc>https://margret.nl/sitemaps/sitemap-nieuws.xml</loc>
    <lastmod>2026-02-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://margret.nl/sitemaps/sitemap-ervaringen.xml</loc>
    <lastmod>2026-02-15</lastmod>
  </sitemap>
</sitemapindex>
```

**Sitemap Organization:**
| Sitemap File | Contents |
|-------------|----------|
| `sitemap-pages.xml` | Homepage, about, contact, static pages |
| `sitemap-steden.xml` | All city hub pages + city+category pages |
| `sitemap-bedrijven-[city].xml` | All business pages per city (split when approaching 50K limit) |
| `sitemap-ervaringen.xml` | Review/experience pages (if individually indexable) |
| `sitemap-nieuws.xml` | All news/blog articles with `<news:news>` tags |

**Rules:**
- Maximum 50,000 URLs per sitemap file, maximum 50MB uncompressed
- Only include canonical, indexable URLs (no noindexed, redirected, or canonicalized-elsewhere pages)
- Update `<lastmod>` accurately when content changes
- Generate sitemaps dynamically (not static files)
- Submit sitemap index to Google Search Console
- Compress sitemaps with gzip for large files

### 6.2 Canonical URL Strategy

| Scenario | Canonical Tag |
|----------|--------------|
| Standard page | Self-referencing (`href` = own URL) |
| Paginated page (page 2, 3, etc.) | Self-referencing (each page is unique) |
| Filter/sort variations | Point to base category page if low-value |
| HTTP vs HTTPS | Always point to HTTPS version |
| www vs non-www | Pick one, canonicalize consistently |
| Trailing slash vs no trailing slash | Pick one pattern, canonicalize consistently |
| Mobile vs desktop (if separate URLs) | Use responsive design instead; if separate, canonicalize to primary |

**Recommended canonical format:**
```html
<link rel="canonical" href="https://margret.nl/amsterdam/restaurants/">
```

- Always use absolute URLs in canonical tags
- Ensure canonical URL matches the URL in the sitemap
- Never canonicalize to a URL blocked by robots.txt
- Never combine canonical with noindex on the same page (conflicting signals)

### 6.3 Robots.txt

```
User-agent: *
Allow: /

# Block filter/sort URLs from crawling
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?prijs=
Disallow: /*?open-nu=

# Block internal search results
Disallow: /zoeken

# Block admin/login areas
Disallow: /admin/
Disallow: /account/

Sitemap: https://margret.nl/sitemap.xml
```

### 6.4 Hreflang Implementation

Since Margret targets Dutch speakers in the Netherlands specifically:

```html
<link rel="alternate" hreflang="nl-nl" href="https://margret.nl/amsterdam/restaurants/">
<link rel="alternate" hreflang="x-default" href="https://margret.nl/amsterdam/restaurants/">
```

- `nl-nl` = Dutch language, Netherlands region
- `x-default` = fallback for users in unspecified regions
- If you later expand to Belgium (Flanders), add `nl-be` variant
- Only Google and Yandex support hreflang; for Bing, use `<meta http-equiv="content-language" content="nl">` [Aleyda Solis, 2025]

**Note:** For a single-language, single-country site, hreflang is technically optional but recommended as a best practice to clearly signal intent to search engines and to future-proof for potential expansion.

### 6.5 Page Speed and Core Web Vitals

- **Lazy-load images** for business listings below the fold
- **Implement responsive images** with `srcset` for different device sizes
- **Minimize JavaScript** -- directory listing pages should be primarily server-rendered HTML
- **Use CDN** for static assets (images, CSS, JS)
- **Target CWV thresholds:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Server-side rendering (SSR) or static site generation (SSG)** for listing pages (critical for crawlability)
- **Implement caching** for pages that don't change frequently

### 6.6 Mobile Optimization

- **Responsive design** (single URL, no separate mobile site)
- **Click-to-call** phone numbers on business pages
- **Map integration** with tap-for-directions
- **Compact listing cards** optimized for thumb-scrolling
- **AMP is NOT recommended** for directory pages (limited interactivity)

### 6.7 Crawl Budget Management

With thousands of pages, crawl budget matters:
- **Prioritize** high-value pages (city+category landing pages, popular businesses)
- **Block** low-value filter combinations via robots.txt or noindex
- **Fix** crawl errors promptly (monitor in Search Console)
- **Avoid** infinite URL spaces (calendar widgets, session IDs in URLs)
- **Use** internal linking to signal page importance
- **Keep** server response times fast (< 200ms TTFB)

---

## 7. Dutch Keyword Patterns and Strategy

### 7.1 Primary Search Patterns (by volume, highest first)

| Pattern | Example | Search Intent |
|---------|---------|--------------|
| `[category] [city]` | `restaurants amsterdam` | Commercial/navigational |
| `beste [category] [city]` | `beste restaurants amsterdam` | Commercial investigation |
| `beste [category] in [city]` | `beste restaurants in amsterdam` | Commercial investigation |
| `[category] in de buurt` | `restaurants in de buurt` | Local/immediate intent |
| `[bedrijfsnaam] [city]` | `de kas amsterdam` | Navigational |
| `[bedrijfsnaam] ervaringen` | `de kas ervaringen` | Informational/trust |
| `[bedrijfsnaam] reviews` | `de kas reviews` | Informational/trust |
| `top [X] [category] [city]` | `top 10 restaurants amsterdam` | Commercial investigation |
| `goede [category] [city]` | `goede restaurants amsterdam` | Commercial investigation |
| `[category] [city] centrum` | `restaurants amsterdam centrum` | Local/specific |
| `[subcategory] [city]` | `italiaans restaurant amsterdam` | Specific commercial |
| `wat te doen in [city]` | `wat te doen in amsterdam` | Informational/discovery |
| `uitgaan in [city]` | `uitgaan in amsterdam` | Commercial/discovery |
| `[category] in de buurt van [landmark]` | `restaurants in de buurt van dam` | Hyperlocal |

### 7.2 Dutch-Specific Language Considerations

- **Compound words:** Dutch uses compound nouns extensively. `restaurantbezoek`, `hotelkamer`, `wellnesscentrum`. Target both compound and separate forms.
- **Diminutives:** `restaurantje`, `hoteltje`, `winkeltje` -- these have search volume and signal casual/friendly intent.
- **"Ervaringen" vs "Reviews":** Both are used. `ervaringen` (experiences) is more naturally Dutch; `reviews` is commonly understood. Target both.
- **"Beoordelingen":** Another Dutch term for ratings/reviews. Worth targeting in meta descriptions.
- **Formal vs informal:** Dutch internet users tend toward informal (`je` not `u`). Content tone should match.
- **Regional variations:** Terms like `broodjeswinkel` vs `lunchroom` vary by region. Consider synonyms.

### 7.3 Long-Tail Keyword Opportunities

```
beste [category] [city] [year]           -> "beste restaurants amsterdam 2026"
[category] [city] open op zondag         -> "restaurants amsterdam open op zondag"
[category] [city] met terras             -> "restaurants amsterdam met terras"
[category] [city] voor groepen           -> "restaurants amsterdam voor groepen"
[category] [city] kindvriendelijk        -> "restaurants amsterdam kindvriendelijk"
goedkoop [category] [city]               -> "goedkoop eten amsterdam"
[category] [city] [wijk]                 -> "restaurants amsterdam de pijp"
romantisch [category] [city]             -> "romantisch restaurant amsterdam"
[category] [city] reserveren             -> "restaurant amsterdam reserveren"
[category] [city] prijzen                -> "wellness amsterdam prijzen"
nieuw [category] [city]                  -> "nieuw restaurant amsterdam"
populair [category] [city]               -> "populaire restaurants amsterdam"
```

### 7.4 Keyword Mapping to URL Structure

```
Primary keyword: "beste restaurants amsterdam"
  -> URL: /amsterdam/restaurants/
  -> H1: "Beste Restaurants in Amsterdam"
  -> Title: "Beste Restaurants in Amsterdam (2026) | Margret"

Primary keyword: "de kas amsterdam ervaringen"
  -> URL: /amsterdam/restaurants/de-kas/ervaringen/
  -> H1: "De Kas Ervaringen & Beoordelingen"
  -> Title: "De Kas Amsterdam - Ervaringen & Reviews | Margret"

Primary keyword: "wellness rotterdam"
  -> URL: /rotterdam/wellness/
  -> H1: "Beste Wellness in Rotterdam"
  -> Title: "Beste Wellness in Rotterdam (2026) | Margret"

Primary keyword: "wat te doen in utrecht"
  -> URL: /utrecht/
  -> H1: "Ontdek Utrecht - De Beste Plekken & Ervaringen"
  -> Title: "Utrecht - Beste Bedrijven & Ervaringen | Margret"
```

---

## 8. Content Strategy for E-E-A-T Compliance

### 8.1 Experience (the first E)

- **User reviews** are the primary signal of Experience. Encourage detailed reviews with prompts like "Beschrijf je ervaring," "Wat vond je het beste?", "Wat kan beter?"
- Allow users to upload photos with reviews
- Display reviewer profiles with review history (builds credibility)
- Show "verified visit" badges where possible

### 8.2 Expertise

- **Editorial content** should be written by people with knowledge of the local scene
- Create author pages for editorial team members
- Include "Over de redactie" (About the editorial team) page
- For each city, consider having a local contributor/expert

### 8.3 Authoritativeness

- Build backlinks from Dutch media, local government tourism pages, and industry associations
- Get listed on Dutch directory aggregators
- Create linkable assets: annual "Beste van [City]" reports, infographics, local guides
- Pursue Dutch .nl domain backlinks specifically

### 8.4 Trustworthiness

- Transparent review moderation policy
- Display both positive and negative reviews
- Clear "about us" and "contact" pages
- Privacy policy and terms of service (in Dutch)
- HTTPS everywhere
- Display business response option for claimed listings

---

## 9. Implementation Priority Roadmap

### Phase 1: Foundation (Weeks 1-4)
- [ ] Implement URL structure as documented
- [ ] Set up canonical tags and self-referencing canonicals
- [ ] Create robots.txt
- [ ] Generate sitemap index with categorized sitemaps
- [ ] Implement BreadcrumbList schema on all pages
- [ ] Set up hreflang tags
- [ ] Implement meta title and description patterns
- [ ] Ensure all pages are mobile-responsive

### Phase 2: Schema and Structured Data (Weeks 5-8)
- [ ] Implement LocalBusiness schema (with subtypes) on all business pages
- [ ] Add AggregateRating and Review schema
- [ ] Add ItemList schema on city+category pages
- [ ] Add Article schema on news pages
- [ ] Add WebSite schema with SearchAction
- [ ] Validate all schema with Google Rich Results Test
- [ ] Submit to Google Search Console and monitor Enhancements

### Phase 3: Content and Programmatic Pages (Weeks 9-16)
- [ ] Build city+category page templates
- [ ] Write unique editorial content for top 50 city+category combinations
- [ ] Generate FAQ sections for all programmatic pages
- [ ] Ensure minimum content thresholds are met (300+ words unique content)
- [ ] Create city hub pages with editorial overviews
- [ ] Create category hub pages

### Phase 4: Internal Linking and Optimization (Weeks 17-20)
- [ ] Implement hub-and-spoke internal linking
- [ ] Add "related businesses," "nearby cities," "other categories" link blocks
- [ ] Add contextual links within editorial content
- [ ] Audit internal link depth (max 3 clicks from homepage)
- [ ] Implement breadcrumb navigation UI

### Phase 5: Growth and Monitoring (Ongoing)
- [ ] Monitor rankings for target keywords in Google Search Console
- [ ] Track crawl stats and fix errors
- [ ] Expand to sub-categories with sufficient search volume
- [ ] Create news/blog content targeting long-tail keywords
- [ ] Build backlink profile through Dutch media outreach
- [ ] Quarterly content audits to update or remove thin pages
- [ ] A/B test title tag and meta description patterns
- [ ] Monitor Core Web Vitals and page speed

---

## 10. Competitive Benchmarks

### Dutch Directory Competitors to Study

| Competitor | What to Learn |
|-----------|---------------|
| Iens.nl (TheFork) | Restaurant-focused directory, strong Dutch SEO, review integration |
| Telefoonboek.nl | Traditional business directory, broad category coverage |
| Tripadvisor.nl | Programmatic SEO at massive scale, multilingual implementation |
| Trustpilot.nl | Review schema implementation, user-generated content strategies |
| Google Maps | The primary competitor for local search; optimize to complement, not compete |
| Yelp.nl | Category taxonomy, URL structure patterns |
| Zoover.nl | Dutch travel reviews, localized content approach |

---

## Bibliography

1. Google Search Central. "URL Structure Best Practices for Google Search." https://developers.google.com/search/docs/crawling-indexing/url-structure
2. Google Search Central. "Review Snippet (Review, AggregateRating) Structured Data." https://developers.google.com/search/docs/appearance/structured-data/review-snippet
3. Google Search Central. "Local Business Structured Data." https://developers.google.com/search/docs/appearance/structured-data/local-business
4. Google Search Central. "Breadcrumb Structured Data." https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
5. Google Search Central. "Pagination Best Practices." https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading
6. Google Search Central. "Manage Your Sitemaps With Sitemap Index Files." https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps
7. Google Search Central. "Managing Crawling of Faceted Navigation URLs." https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation
8. Google Search Central. "Creating Helpful, Reliable, People-First Content." https://developers.google.com/search/docs/fundamentals/creating-helpful-content
9. Google Search Central. "Consolidate Duplicate URLs (Canonical)." https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
10. Schema.org. "LocalBusiness Type." https://schema.org/LocalBusiness
11. Schema.org. "BreadcrumbList Type." https://schema.org/BreadcrumbList
12. Practical Programmatic. "Tripadvisor: Programmatic SEO Case Study." https://practicalprogrammatic.com/examples/tripadvisor
13. Search Engine Land. "Internal Linking for SEO: Types, Strategies & Tools." https://searchengineland.com/guide/internal-linking
14. Search Engine Land. "Faceted Navigation in SEO: Best Practices." https://searchengineland.com/guide/faceted-navigation
15. Search Engine Land. "Programmatic SEO: Scale Content, Rankings & Traffic Fast." https://searchengineland.com/guide/programmatic-seo
16. BrightLocal. "Can Local Businesses Use Review Schema?" https://www.brightlocal.com/learn/review-schema/
17. BrightLocal. "8 Schema Templates for Local SEO." https://www.brightlocal.com/learn/local-seo-schema-templates/
18. Semrush. "Canonical URL Guide." https://www.semrush.com/blog/canonical-url-guide/
19. Semrush. "Pagination and SEO: A Complete Guide." https://www.semrush.com/blog/pagination-seo/
20. RankTracker. "A Complete Guide for Doing SEO in Dutch." https://www.ranktracker.com/blog/a-complete-guide-for-doing-seo-in-dutch/
21. RankTracker. "A Complete Guide for Doing SEO in the Netherlands." https://www.ranktracker.com/blog/a-complete-guide-for-doing-seo-in-the-netherlands/
22. Backlinko. "Programmatic SEO: What It Is + Tips & Examples for 2026." https://backlinko.com/programmatic-seo
23. Shopify. "SEO URL Structure: 7 Best Practices." https://www.shopify.com/blog/seo-url
24. Willie Jiang. "SEO Strategy Review: TripAdvisor VS. Yelp." https://williejiang.com/en/blog/tripadvisor-vs-yelp-seo-strategy-review/
25. Brilliant Directories. "How to Structure Meta Titles for Local Directory Rankings." https://www.brilliantdirectories.com/blog/secrets-revealed-how-to-structure-meta-titles-to-skyrocket-your-local-directorys-google-rankings-overnight
26. Aleyda Solis. "Hreflang Tags Generator." https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/
27. DOK Online. "Hreflang Tags: What Are They and How Do You Set Them Up?" https://dokonline.nl/en/seo/technique/hreflang-tags-what-are-they-and-how-do-you-set-them-up/
