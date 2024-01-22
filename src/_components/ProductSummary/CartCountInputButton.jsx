import { useState } from "react";

const CartCountInputButton = (props) => {
  const [count, setCount] = useState(props.count);

  const handleChangeCount = (e) => {
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
            handleChangeCount(e);
          }}
          value={count}
        />
        <div className="txt-txt">box</div>
      </div>
    </div>
  );
};

export default CartCountInputButton;
