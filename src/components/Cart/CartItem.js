import classes from "./CartItem.module.css";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../features/CartItemSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const plusquantityHandler = () => {
    dispatch(increaseQuantity(title));
  };
  const decreasequantityHandler = () => {
    dispatch(decreaseQuantity(title));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreasequantityHandler}>-</button>
          <button onClick={plusquantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
