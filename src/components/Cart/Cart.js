import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const Cartitem = useSelector((state) => state.item.Cartitem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        />
        {Cartitem.map((itemobj) => (
          <CartItem item={{ ...itemobj, quqntity: 1, total: 10 }} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;