import "./styles.shopingCart.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCartItems } from "../cart/cartSelectors";

export const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <div className="shopping-cart absolute top-24 right-60 z-0 bg-sky-200 font-serif max-h-80 min-w-60 overflow-y-scroll pt-5 rounded-lg">
        {cartItems.map((item) => {
          return (
            <>
              <div className="flex items-center px-3">
                <img src={item.images[2].url} className="mr-5 p-1" />
                <div className="names-btn"></div>
                <h3 className="mx-auto">{item.name}</h3>
                <h3 className="ml-auto pl-2">{item.quantity}</h3>
              </div>
            </>
          );
        })}
        <Link to="/checkout">
          <div className="flex p-3">
            <button className="px-4 py-2 font-mono mx-auto bg-sky-500 text-white rounded-md hover:bg-sky-700 font-bold ">
              Go to checkout
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};
