import React from 'react';

import {Navigation} from './Navigation.client';
import {Logo} from './Logo.client';
import {Cart} from './Cart.client';

function Header({loading}) {
  const content = loading ? (
    <>
      <Logo />
      <Navigation loading />
    </>
  ) : (
    <>
      <Logo />
      <Navigation />
      <Cart />
    </>
  );
  return (
    <section className="Section--Header">
      <header className="Header">{content}</header>
    </section>
  );
}

export default Header;
