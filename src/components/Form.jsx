import { selectFormValue } from "../form/formSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useSpotifyAuth } from "../hooks/SpotifyAuth";
import { useSpotifySearch } from "../hooks/SpotifySearch";
import { setIsCartOpened } from "../cart/cartSlice";
import { updateFormAction } from "../form/formSlice";
import { selectIsCartOpened } from "../cart/cartSelectors";

export const Form = () => {
  const dispatch = useDispatch();
  const isCartOpened = useSelector(selectIsCartOpened);
  const CLIENT_ID = "bef87caa8a0d4455aeeaa3f06b33b318";
  const CLIENT_SECRET = "699f8c2b41a446e6852294a2bddff7b7";
  const formValue = useSelector(selectFormValue);

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="navbar w-full flex justify-around h-20 items-center bg-blue-200 fixed z-10">
        <div className="left-side-navbar flex ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2">
            Search
          </button>
          <input
            type="text"
            id="text"
            value={formValue}
            onChange={handleInputChange}
            placeholder="Please insert artist's name"
            className="rounded-md shadow border focus:outline-none px-2"
          />
        </div>
        <div className="right-side-navbar">
          <i
            class="fa-solid fa-cart-shopping hover:cursor-pointer p-5"
            onClick={() => dispatch(setIsCartOpened(!isCartOpened))}
          ></i>
        </div>
      </div>
    </form>
  );
};
