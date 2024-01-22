import { useState } from "react";

const CartAddButton = () => {
  const [count, setCount] = useState(0);

  const handleChangeText = (e) => {
    let value = e.target.value;
    setCount(value);
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
      <button className="add-btn">Add</button>
    </div>
  );
};

export default CartAddButton;
