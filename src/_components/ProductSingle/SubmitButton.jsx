import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// In your main application file (e.g., index.js or App.js)
import "@fortawesome/fontawesome-svg-core/styles.css";

import { AppContext } from "../../store/Context";

const SubmitButton = () => {
  const { state } = useContext(AppContext);
  const { cartCount } = state;
  return (
    <section className="submit-total">
      <div className="container">
        <div className="row"></div>
        <div className="submit-btn-pop">
          <Link to="/summary">
            <span className="btn btn-secondary cart-btn">
              <FontAwesomeIcon icon={["fas", "cart-shopping"]} 
              style={{ fontSize: '28px' }}
              />
              <span className="cart-count">
                {cartCount}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubmitButton;
