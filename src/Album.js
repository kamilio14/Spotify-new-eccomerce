import { useSelector } from "react-redux";
import { selectCartItems } from "./cart/cartSelectors";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./cart/cartSlice";

export const Album = ({ album }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name } = album;

  return (
    <div className="single-album">
      <h3 className="album-name">{name}</h3>
      <img src={album.images[1].url} className="image-in-album" />
      <div className="price-btn">
        <h4>300€</h4>
        <button onClick={() => dispatch(addItemToCart(album))}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
