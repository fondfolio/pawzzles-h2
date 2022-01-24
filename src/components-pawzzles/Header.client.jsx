import React from 'react';

import {Nav} from './Navigation.client';
import {Logo} from './Logo.client';
import {Cart} from './Cart.client';

function Header() {
  return (
    <section className="Section--Header">
      <header className="Header">
        <Logo />
        <Nav />
        <Cart />
      </header>
    </section>
  );
}

export default Header;
