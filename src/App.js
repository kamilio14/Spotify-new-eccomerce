import { Form } from "./Form";
import { ShoppingCart } from "./components/shoping-cart";
import { selectIsCartOpened } from "./cart/cartSelectors";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { CheckOut } from "./components/checkout";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="checkout" element={<CheckOut />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
