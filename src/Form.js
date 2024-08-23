import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectFormValue } from "./form/formSelectors";

import { selectDataAlbums } from "./data/dataSelectors";
import { Album } from "./Album";
import { useSpotifyAuth } from "./SpotifyAuth";
import { useSpotifySearch } from "./SpotifySearch";

import { selectIsCartOpened } from "./cart/cartSelectors";
import { ShoppingCart } from "./components/shoping-cart";
import { setIsCartOpened } from "./cart/cartSlice";
import { updateFormAction } from "./form/formSlice";

import "./styles.css";

export const Form = () => {
  const formValue = useSelector(selectFormValue);
  const albums = useSelector(selectDataAlbums);

  const dispatch = useDispatch();

  const CLIENT_ID = "bef87caa8a0d4455aeeaa3f06b33b318";
  const CLIENT_SECRET = "699f8c2b41a446e6852294a2bddff7b7";

  const accessToken = useSpotifyAuth(CLIENT_ID, CLIENT_SECRET);

  const search = useSpotifySearch(accessToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(formValue);
    dispatch(updateFormAction(""));
  };

  const handleInputChange = (e) => {
    dispatch(updateFormAction(e.target.value));
  };

  const isCartOpened = useSelector(selectIsCartOpened);

  return (
    <>
      <div className="page-container">
        <form onSubmit={handleSubmit} className="form">
          <button>Search</button>
          <input
            type="text"
            id="text"
            value={formValue}
            onChange={handleInputChange}
            placeholder="Please insert artist's name"
            className="input"
          />
          <i
            class="fa-solid fa-cart-shopping"
            onClick={() => dispatch(setIsCartOpened(!isCartOpened))}
          ></i>
        </form>
        <div className="albums-container">
          {albums.map((album) => {
            return <Album album={album} />;
          })}
        </div>
        {isCartOpened && <ShoppingCart />}
      </div>
    </>
  );
};
