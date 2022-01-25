import React from 'react';
import {Link} from '@shopify/hydrogen/client';
import {url} from '../lib/url';

import {Icon} from './Icon';

export function Logo() {
  return (
    <Link className="Logo" to={url.home()}>
      <Icon name="Logo" />
    </Link>
  );
}
