import { useSelector } from "react-redux";
import { selectCartItems } from "./cart/cartSelectors";
import { useDispatch } from "react-redux";
import { addItemToCart, setCartTotal } from "./cart/cartSlice";

export const Album = ({ album }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name } = album;

  const handleClick = () => {
    dispatch(addItemToCart(album));
    dispatch(setCartTotal());
  };

  return (
    <div className="single-album bg-sky-100 rounded-md grid max-h-96 border-2 border-indigo-200">
      <h3 className="album-name max-w-60 px-4 flex justify-center py-1 font-medium font-mono">
        {name}
      </h3>
      <img src={album.images[1].url} className="image-in-album rounded-md" />
      <div className="price-btn flex justify-around p-2 items-center">
        <h4>{album.total_tracks} €</h4>
        <button
          onClick={handleClick}
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-1 px-2 rounded-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
