import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import {
  putCartonFirebase,
  getCartfromFirebase,
} from "./features/CartItemSlice";
let initial = true;
function App() {
  console.log("inside app .js");
  const cartvisible = useSelector((state) => state.cartui.CartVisible);
  const cartItem = useSelector((state) => state.item.cartitem);
  console.log(cartItem);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("inside useEffect");
    if (initial) {
      initial = false;
      console.log("yes");
      return;
    }

    dispatch(putCartonFirebase(cartItem));
  }, [cartItem]);

  return (
    <>
      <Notification />
      <Layout>
        {cartvisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
