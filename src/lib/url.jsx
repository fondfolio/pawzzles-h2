import React, {useContext} from 'react';

export const UrlContext = React.createContext({});

export const useUrl = () => useContext(UrlContext);

class Url {
  constructor() {
    console.log('Url constructor');
  }

  home() {
    return '/';
  }

  product(slug) {
    return `/products/${slug}`;
  }

  page(slug) {
    return `/page/${slug}`;
  }
}

export const url = new Url();
