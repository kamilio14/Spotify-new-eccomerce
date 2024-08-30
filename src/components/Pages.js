import { useSelector } from "react-redux";
import { selectDataAlbums } from "../data/dataSelectors";
import { Album } from "../Album";
import { Form } from "./Form";
import { selectIsCartOpened } from "../cart/cartSelectors";
import { ShoppingCart } from "./shoping-cart";
import { Footer } from "./Footer";

export const Pages = () => {
  const albums = useSelector(selectDataAlbums);

  const isCartOpened = useSelector(selectIsCartOpened);

  return (
    <>
      <div className="Main-page min-h-screen bg-sky-500">
        <Form />
        <div className="pt-32 pb-20 pl-40 min-h-screen max-w-4xl grid grid-cols-3 gap-5">
          {albums.map((album) => {
            return <Album album={album} />;
          })}
        </div>
        {isCartOpened && <ShoppingCart />}
        <Footer />
      </div>
    </>
  );
};
