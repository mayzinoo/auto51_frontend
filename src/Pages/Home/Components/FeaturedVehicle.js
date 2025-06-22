//Libraies
import React, { Fragment } from "react";
//CSS
import "./styles/FeaturedVehicle.css";

export default function FeaturedVehicle() {
  return (
    <Fragment>
      <div className="featuredVehi-container">
        <div className="featuredVehi-tab-container">
          <ul className="fetaturedVehi-tab-list">
            <li className="featuredVehi-tab active">
              <a className="ft-active" href="/">
                <span className="featuredVehi-tab-title">
                  FEATURED VEHICLES
                </span>
              </a>
            </li>
            <li className="featuredVehi-tab">
              <a href="/">
                <span className="featuredVehi-tab-title">LATEST VEHICLES</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="featuredVehi-tab-description">
          <p>
            Enjoy the ultimate web design themes. Every layout is super
            flexible, amazingly powerful and visual by nature.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
