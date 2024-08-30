import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItemFromCart,
  setCartTotal,
} from "../cart/cartSlice";

import { selectCartTotal } from "../cart/cartSelectors";
import { useSelector } from "react-redux";

export const ShoppingCartItem = ({ item, name, img, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex h-72 items-center justify-around bg-sky-300 border border-sky-700 p-3">
      <img src={img} className="h-full" />
      <div className="right-side flex-grow flex flex-col items-center justify-evenly h-full">
        <div className="left-side-container flex items-center justify-evenly w-full h-full">
          <h4 className="text-3xl">{name}</h4>
          <i
            className="fa-solid fa-arrow-left text-3xl hover:text-red-600 hover:cursor-pointer "
            onClick={() => {
              dispatch(decreaseQuantity(item));
              dispatch(setCartTotal());
            }}
          ></i>

          <h4 className="text-3xl ">{item.quantity}</h4>

          <i
            className="fa-solid fa-arrow-right text-3xl hover:text-green-500 hover:cursor-pointer"
            onClick={() => {
              dispatch(increaseQuantity(item));
              dispatch(setCartTotal());
            }}
          ></i>

          <button
            clas="x-icon"
            className="text-3xl hover:text-red-600"
            onClick={() => {
              dispatch(deleteItemFromCart(item));
              dispatch(setCartTotal());
            }}
          >
            &#10005;
          </button>

          <div className="text-3xl font-bold font-">{price}€</div>
        </div>
      </div>
    </div>
  );
};
