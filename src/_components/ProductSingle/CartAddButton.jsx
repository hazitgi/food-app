import { useState } from "react";

const CartAddButton = (props) => {
  const { product_id, price } = props;
  const [count, setCount] = useState(0);

  const handleChangeText = (e) => {
    let value = e.target.value;
    setCount(value);
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.product_id === product_id);

    if (existingItem) {
      existingItem.count = count;
      existingItem.price = price;
      existingItem.total_price = price * count;
    } else {
      cart.push({
        product_id: product_id,
        count: count,
        price: price,
        total_price: price * count,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
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
