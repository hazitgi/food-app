import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../store/Context";

const SubmitButton = () => {
  return (
    <section className="submit-total">
      <div className="container">
        <div className="row"></div>
        <div className="submit-btn-pop">
          <Link to="/summary">
            <span className="btn btn-secondary">Cart</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubmitButton;
