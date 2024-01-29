import { useState, useContext } from "react";
import { AppContext } from "../../store/Context";

const CartAddButton = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;
  const { cartItem } = props;
  const { id, price } = props;
  const [count, setCount] = useState(cartItem?.count || 0);

  const handleChangeText = (e) => {
    let value = e.target.value;
    setCount(value);
  };

  const addToCart = () => {
    let cartItems = cart
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      existingItem.count = count;
      existingItem.price = price;
      existingItem.total_price = price * count;
    } else {
      cartItems.push({
        id: id,
        count: count,
        price: price,
        total_price: price * count,
      });
    }
    dispatch({
      type: "SET_CART",
      payload: cartItems,
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <div className="cart-add-btn-wrap">
      <div className="input-wrap">
        <input
          className="txt-box"
          type="number"
          onChange={(e) => {
            handleChangeText(e);
          }}
          value={count}
        />
        <div className="txt-txt">box</div>
      </div>
      <button className="add-btn" onClick={() => addToCart()}>
        Add
      </button>
    </div>
  );
};

export default CartAddButton;
