import type { Schema, Attribute } from '@strapi/strapi';

export interface TopProductsTopProducts extends Schema.Component {
  collectionName: 'components_top_products_top_products';
  info: {
    displayName: 'TopProducts';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    products: Attribute.Relation<
      'top-products.top-products',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface SocialLinksSocialLinks extends Schema.Component {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    socialIcons: Attribute.Component<'social-icons.social-icons', true>;
  };
}

export interface SocialIconsSocialIcons extends Schema.Component {
  collectionName: 'components_social_icons_social_icons';
  info: {
    displayName: 'socialIcons';
    description: '';
  };
  attributes: {
    icons: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface RecentNewsRecentNews extends Schema.Component {
  collectionName: 'components_recent_news_recent_news';
  info: {
    displayName: 'recentNews';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    news: Attribute.Component<'news.news', true>;
  };
}

export interface NewsNews extends Schema.Component {
  collectionName: 'components_news_news';
  info: {
    displayName: 'news';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    date: Attribute.String;
    categoryName: Attribute.String;
  };
}

export interface NavlinksNavLinks extends Schema.Component {
  collectionName: 'components_navlinks_nav_links';
  info: {
    displayName: 'NavLinks';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    URL: Attribute.String;
  };
}

export interface HamburgerHamburger extends Schema.Component {
  collectionName: 'components_hamburger_hamburgers';
  info: {
    displayName: 'Hamburger';
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface FirstOrderFirstOrder extends Schema.Component {
  collectionName: 'components_first_order_first_orders';
  info: {
    displayName: 'FirstOrder';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.String;
    Button: Attribute.String;
  };
}

export interface ExploreExplore extends Schema.Component {
  collectionName: 'components_explore_explores';
  info: {
    displayName: 'Explore';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Categories: Attribute.Component<'categories.categories', true>;
  };
}

export interface CategoriesCategories extends Schema.Component {
  collectionName: 'components_categories_categories';
  info: {
    displayName: 'Categories';
  };
  attributes: {
    CategoryType: Attribute.String;
    products: Attribute.Relation<
      'categories.categories',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    pretitle: Attribute.String;
    Title: Attribute.Text;
    Button: Attribute.String;
    Learn: Attribute.String;
  };
}

export interface AboutUsAboutUs extends Schema.Component {
  collectionName: 'components_about_us_aboutuses';
  info: {
    displayName: 'aboutUs';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    aboutLinks: Attribute.Component<'about-links.about-links', true>;
  };
}

export interface AboutLinksAboutLinks extends Schema.Component {
  collectionName: 'components_about_links_about_links';
  info: {
    displayName: 'aboutLinks';
    description: '';
  };
  attributes: {
    links: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'top-products.top-products': TopProductsTopProducts;
      'social-links.social-links': SocialLinksSocialLinks;
      'social-icons.social-icons': SocialIconsSocialIcons;
      'recent-news.recent-news': RecentNewsRecentNews;
      'news.news': NewsNews;
      'navlinks.nav-links': NavlinksNavLinks;
      'hamburger.hamburger': HamburgerHamburger;
      'first-order.first-order': FirstOrderFirstOrder;
      'explore.explore': ExploreExplore;
      'categories.categories': CategoriesCategories;
      'banner.banner': BannerBanner;
      'about-us.about-us': AboutUsAboutUs;
      'about-links.about-links': AboutLinksAboutLinks;
    }
  }
}
