import React, {useState} from 'react';
import {useCart} from '@shopify/hydrogen/client';
import {translations} from '../lib/translation';
import {useCartUI} from './CartUIProvider.client';

import {Button} from './Button';
import {QuantityControls} from './QuantityControls';

export function AddToCartControls(props) {
  const {addLines, createCart, id} = useCart();
  const {toggleCart} = useCartUI();
  const [quantity, setQuantity] = useState(1);

  const merchandiseId = props.variants.edges[0].node.id;

  return (
    <div className="AddToCartControls ">
      <QuantityControls
        quantity={quantity}
        onAdd={() => {
          setQuantity(quantity + 1);
        }}
        onSubtract={() => {
          setQuantity(quantity - 1);
        }}
      />
      <Button
        primary
        padded
        onClick={() => {
          toggleCart();

          if (id) {
            addLines([{merchandiseId, quantity}]);
          } else {
            createCart({lines: [{merchandiseId, quantity}]});
          }
        }}
      >
        <span className="Button__target">
          {translations.layout.cart.add_to_cart}
        </span>
      </Button>
    </div>
  );
}
