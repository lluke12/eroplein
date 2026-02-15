export interface City {
  name: string;
  slug: string;
  province: string;
  lat: number;
  lng: number;
  population: number;
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
  sort_order: number;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  city_slug: string;
  category_slugs: string[];
  primary_category: string;
  description: string;
  short_description: string;
  address: string;
  postal_code: string;
  phone?: string;
  website?: string;
  image_url?: string;
  average_rating: number;
  review_count: number;
  price_range: number; // 1-4
  is_verified: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  business_id: string;
  user_display_name: string;
  user_initial: string;
  rating: number;
  title?: string;
  content: string;
  pros?: string[];
  cons?: string[];
  helpful_count: number;
  reply_count: number;
  created_at: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_slug?: string;
  city_slug?: string;
  author_name: string;
  author_initial: string;
  image_url?: string;
  published_at: string;
  reading_time: number;
  tags: string[];
}
