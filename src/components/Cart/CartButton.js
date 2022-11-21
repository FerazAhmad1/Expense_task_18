import classes from "./CartButton.module.css";
import { toggle } from "../../features/CartuiSlice";
import {
  putCartonFirebase,
  getCartfromFirebase,
} from "../../features/CartItemSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
let initial = true;
const CartButton = (props) => {
  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.item.Cartitem);

  console.log(CartItem);

  console.log(CartItem);
  const myCartHandler = () => {
    dispatch(toggle());
  };

  useEffect(() => {
    console.log("inside useEffect");
    if (initial) {
      initial = false;
      console.log("yes");
      return;
    }

    dispatch(putCartonFirebase(CartItem));
  }, [CartItem]);

  useEffect(() => {
    dispatch(getCartfromFirebase());
  }, []);

  return (
    <button onClick={myCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>amount</span>
    </button>
  );
};

export default CartButton;
