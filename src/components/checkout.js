import "./styles.checkout.css";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../cart/cartSelectors";
import { ShoppingCartItem } from "./shopping-cart-item";
import { Link } from "react-router-dom";

export const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="min-h-screen w-full bg-sky-200 flex justify-center items-center p-10 flex-col">
      <div className="w-4/6 bg-sky-400 min-h-80 flex flex-col ">
        <div className="flex p-4 justify-between items-center">
          <h1 className="font-bold font-sans text-3xl">
            Shopping Cart Checkout{" "}
          </h1>
          <Link to="/">
            <button className="px-2 py-4 border to-blue-400 rounded-md font-bold">
              Go Back
            </button>
          </Link>
        </div>
        <div className="p-2">
          {cartItems.map((item) => {
            return (
              <ShoppingCartItem
                item={item}
                name={item.name}
                key={item.name}
                img={item.images[1].url}
                price={item.total_tracks}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-evenly w-full p-4 items-center">
        <h1 className="text-3xl">Total price</h1>
        <h1 className="text-4xl font-bold">{cartTotal} €</h1>
      </div>
    </div>
  );
};
