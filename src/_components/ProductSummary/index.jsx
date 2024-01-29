import { Link } from "react-router-dom";
import CartCountInputButton from "./CartCountInputButton";
import { DeleteButton } from "./DeleteButton";

const ProductSummarySingle = (props) => {
  const { id, name, product_image, our_price } = props?.details;
  return (
    <div className="single-product-summary">
      <div className="summar-single">
        <Link to="" className="image">
          <img src={product_image} alt={name} />
        </Link>
        <div className="details">
          <h3 className="product-name">
            <Link to="">{name}</Link>
          </h3>
          <div className="food-orderdetail">
            <div className="orderdetail">
              <CartCountInputButton count={props?.cartItem?.count} />
            </div>
            <div className="orderdetai">
              <span className="price main">₹ {our_price}</span>
            </div>
          </div>
          <DeleteButton key={id} id={id} name={name} />
          {/* <div className="food-orderdetail">
            <div className="oderdetail">
              
            </div>
            <div className="orderdetai">
              <span className="price main">₹ 2500</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductSummarySingle;
