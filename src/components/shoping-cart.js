import "./styles.shopingCart.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCartItems } from "../cart/cartSelectors";

export const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="shopping-cart">
      <div className="quantity-name">
        <h3>Name</h3>
      </div>
      {cartItems.map((item) => {
        return (
          <>
            <div className="cart-item">
              <img src={item.images[2].url} className="img-item" />
              <h3 className="name">{item.name}</h3>
              <h3>{item.quantity}</h3>
            </div>
          </>
        );
      })}
      <Link to="/checkout">
        <button className="checkout-btn">Go to checkout</button>
      </Link>
    </div>
  );
};
