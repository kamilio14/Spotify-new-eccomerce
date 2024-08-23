import "./styles.checkout.css";
import { useSelector } from "react-redux";
import { selectCartItems } from "../cart/cartSelectors";
import { deleteItemFromCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../cart/cartSlice";
export const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  console.log("cartItems", cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-window">
        <div className="checkout-bar">
          <h2>Name</h2>
          <h2 className="quantity">Quantity</h2>
          <h2 className="remove">Remove</h2>
        </div>
        <div className="cartItems-checkout">
          {cartItems.map((item) => {
            return (
              <div className="singleItem-checkout">
                <h4 className="single-item-name">{item.name}</h4>
                <button
                  className="btn-arrows"
                  onClick={() => dispatch(decreaseQuantity(item))}
                >
                  &#x25C0;
                </button>
                <h4>{item.quantity}</h4>
                <button
                  className="btn-arrows"
                  onClick={() => dispatch(increaseQuantity(item))}
                >
                  &#x25B6;
                </button>
                <button
                  class="x-icon"
                  onClick={() => dispatch(deleteItemFromCart(item))}
                >
                  &#10005;
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
