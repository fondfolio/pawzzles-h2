import React, {useState} from 'react';

import CartToggle from './CartToggle.client';
import {Button} from './Button';
import {url} from '../lib/url';
import {translations} from '../lib/translation';

export function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const linksMarkup = [
    {
      label: translations.layout.pages.about,
      url: url.page('about'),
    },
    {
      label: translations.layout.pages.faqs,
      url: url.page('faqs'),
    },
  ].map((link) => {
    return (
      <li key={link.label}>
        <Button primary url={link.url}>
          {link.label}
        </Button>
      </li>
    );
  });

  // if (!lines) {
  //   return (
  //     <div className="Nav">
  //       <div className="Nav__Menu">
  //         <ul className="Menu">{linksMarkup}</ul>
  //       </div>
  //     </div>
  //   );
  // }

  // const cartText = isCartOpen
  //   ? translations.layout.cart?.close
  //   : translations.layout.cart?.title;

  return (
    <div className="Nav">
      <div className="Nav__Menu">
        <ul className="Menu">{linksMarkup}</ul>
      </div>
      <CartToggle
        handleClick={() => {
          if (isMobileNavOpen) setIsMobileNavOpen(false);
        }}
      />
    </div>
  );
}
