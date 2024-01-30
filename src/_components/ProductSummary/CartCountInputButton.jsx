import { useContext } from "react";
import { AppContext } from "../../store/Context";

const CartCountInputButton = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const { cartItem } = props;
  let { cart } = state;

  let itemInCart = cart.find((item) => item.id === cartItem.id);
  const handleChangeCount = (e) => {
    let value = e.target.value;
    let updatedCart = cart.map((product) => {
      if (product.id === cartItem.id) {
        product.count = value;
        product.total_price = product.price * value;
      }
      return product;
    })
    dispatch({ type: "SET_CART", payload: updatedCart });
    dispatch({
      type: "SET_CART_COUNT",
      payload: updatedCart?.length
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
          value={itemInCart.count}
        />
        <div className="txt-txt">box</div>
      </div>
    </div>
  );
};

export default CartCountInputButton;
