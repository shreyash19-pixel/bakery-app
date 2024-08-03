import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navlinks.nav-links': NavlinksNavLinks;
    }
  }
}
