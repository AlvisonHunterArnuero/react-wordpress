export interface FetchedDataProps {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: string[];
  class_list: string[];
  jetpack_featured_media_url: string;
  jetpack_publicize_connections: string[];
  jetpack_shortlink: string;
  jetpack_sharing_enabled: boolean;
  jetpack_likes_enabled: boolean;
  'jetpack-related-posts': unknown[];
  _links: Links;
}

type Rendered = {
  rendered: string;
  protected: boolean;
};
export type Guid = Pick<Rendered, 'rendered'>;
export type Title = Pick<Rendered, 'rendered'>;
export type Content = Rendered[];
export type Excerpt = Rendered[];
export interface Meta {
  advanced_seo_description: string;
  jetpack_seo_html_title: string;
  jetpack_seo_noindex: boolean;
  _coblocks_attr: string;
  _coblocks_dimensions: string;
  _coblocks_responsive_height: string;
  _coblocks_accordion_ie_support: string;
  jetpack_post_was_ever_published: boolean;
  reader_suggested_tags: string;
  _jetpack_newsletter_access: string;
  _jetpack_dont_email_post_to_subs: boolean;
  _jetpack_newsletter_tier_id: number;
  _jetpack_memberships_contains_paywalled_content: boolean;
  _jetpack_memberships_contains_paid_content: boolean;
  footnotes: string;
  jetpack_publicize_message: string;
  jetpack_publicize_feature_enabled: boolean;
  jetpack_social_post_already_shared: boolean;
  jetpack_social_options: JetpackSocialOptions;
}

export interface JetpackSocialOptions {
  image_generator_settings: ImageGeneratorSettings;
  version: number;
}

export interface ImageGeneratorSettings {
  template: string;
  enabled: boolean;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  'version-history': VersionHistory[];
  'predecessor-version': PredecessorVersion[];
  'wp:featuredmedia': Featuredmedum[];
  'wp:attachment': WpAttachment[];
  'wp:term': WpTerm[];
  curies: Cury[];
}

// Common Type Keys for most of the interfaces
type TCommonTypeKeys = {
  href: string;
  embeddable: boolean;
};

// Set of Types for the common keys
export type Self = Pick<TCommonTypeKeys, 'href'> & {
  targetHints: {
    allow: string[];
  };
};
export type Collection = Pick<TCommonTypeKeys, 'href'>;
export type About = Pick<TCommonTypeKeys, 'href'>;
export type Author = TCommonTypeKeys[];
export type Reply = TCommonTypeKeys[];

// Set of Interfaces for the common keys
export interface VersionHistory extends Pick<TCommonTypeKeys, 'href'> {
  count: number;
}
export interface PredecessorVersion extends Pick<TCommonTypeKeys, 'href'> {
  id: number;
}
export interface Featuredmedum extends Pick<TCommonTypeKeys, 'href'> {
  embeddable: boolean;
}

export type WpAttachment = Pick<TCommonTypeKeys, 'href'>;
export interface WpTerm extends Pick<TCommonTypeKeys, 'href' | 'embeddable'> {
  taxonomy: string;
}
export interface Cury extends Pick<TCommonTypeKeys, 'href'> {
  name: string;
  templated: boolean;
}

// Card Component Custom Types
export type cardDataObj = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string | TrustedHTML };
  date: string;
  jetpack_featured_media_url: string;
  meta?: {
    reader_suggested_tags: string[];
  };
};
export type CardProps = {
  cardData: cardDataObj;
};

// DataProvider Custom Types
export interface DataContextProps {
  data: FetchedDataProps[];
  fetchData: () => void;
}
