import {useCartLinesTotalQuantity} from '@shopify/hydrogen/client';
import {useCartUI} from './CartUIProvider.client';
import {Icon} from './Icon';
import {classNames} from '@shopify/css-utilities';

export default function CartToggle({handleClick, text}) {
  const cartUI = useCartUI();
  const itemCount = useCartLinesTotalQuantity();
  if (cartUI == null) {
    throw new Error('CartToggle must be a descendent of a CartUIProvider');
  }

  const {isCartOpen, toggleCart} = cartUI;

  const buttonClassName = classNames('Button', {
    CartToggle: true,
    'Button--primary': true,
    'Button--inverted': isCartOpen,
  });
  const countMarkup = isCartOpen ? (
    <Icon name="Close" />
  ) : (
    <span className="Count">
      <span className="Count__Text">{itemCount}</span>
    </span>
  );

  return (
    <button
      className={buttonClassName}
      type="button"
      aria-expanded={isCartOpen}
      aria-controls="cart"
      onClick={() => {
        toggleCart();
        handleClick();
      }}
    >
      {countMarkup}
      <span className="visually-hidden">{text}</span>
    </button>
  );
}
