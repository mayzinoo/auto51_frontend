//libraries
import React, { Fragment } from "react";
//components
import carImage from "../../../assets/images/aboutus2.png";
import whatsappImage from "../../../assets/images/whatsapp2.png";

//css
import "./styles/itemboxes.css";

function ItemBoxes(props) {
  return (
    <Fragment>
      <div className="box-container">
        <div className="box-div">
          <img src={carImage} alt="" className="item-image" />
          <div className="side-div">
            <p className="box-text">
              More than <span style={{ color: "#00a55e" }}>140 Car Models</span>{" "}
              to choose from.
            </p>
            <div className="box-button">
              <a className="defaultGeneralBtn" href="/vehicles">
                See More Cars
              </a>
            </div>
          </div>
        </div>

        <div className="box-div">
          <img src={whatsappImage} alt="" className="item-image" />
          <div className="side-div">
            <p className="box-text">
              Message Us On <span style={{ color: "#18953e" }}>WhatsApp</span>
            </p>
            <div className="box-button">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B6596996655&text=I'm%20interested%20in%20your%20car&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="defaultGeneralBtn"> Message Us </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ItemBoxes;
