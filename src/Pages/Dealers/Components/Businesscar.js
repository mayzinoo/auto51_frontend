//libraries
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
//components
//css
import "./styles/businesscar.css";

function Businesscar() {
  let history = useHistory();
  const handleSubmit = () => {
    history.push({
      pathname: "/vehicles",
      state: null,
    });
  };

  return (
    <Fragment>
      <div className="businesscar-container-wrap">
        <div>
          <h1 className="bc-mainheader">Your Company Cars Made Easy</h1>
          <p className="bc-subheader">
            Your all-inclusive company car subscription. Subscribe 1-24 months.
          </p>
          <div className="bc-btn">
            <button className="btn-css" onClick={(e) => handleSubmit(e)}>
              Find My Business Cars
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Businesscar;
