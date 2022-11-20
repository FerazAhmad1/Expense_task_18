import classes from "./CartButton.module.css";
import { toggle } from "../../features/CartuiSlice";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const myCartHandler = () => {
    dispatch(toggle());
  };
  return (
    <button onClick={myCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
