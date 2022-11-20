import classes from "./CartButton.module.css";
import { toggle } from "../../features/CartuiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.item.Cartitem);

  console.log(CartItem);
  const amount = CartItem.reduce((acc, curobj) => acc + curobj.quantity, 0);
  console.log(CartItem);
  const myCartHandler = () => {
    dispatch(toggle());
  };
  return (
    <button onClick={myCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
