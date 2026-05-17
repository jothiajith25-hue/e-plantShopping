import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // ✅ Function to calculate total cost of one item
  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  // ✅ Function to calculate overall total
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <img src={item.image} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            {/* ✅ Use separate function */}
            <p>
              Total: ₹{calculateItemTotal(item.price, item.quantity)}
            </p>

            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>

            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              -
            </button>

            {/* ✅ removeItem USED properly */}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>
        ))
      )}

      <h2>Total Cost: ₹{calculateTotal()}</h2>
    </div>
  );
};

export default CartItem;
