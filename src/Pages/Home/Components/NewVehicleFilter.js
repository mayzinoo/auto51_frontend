//Libraries
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//CSS
import "./styles/NewVehicleFilter.css";
//API
import {
  BrandApi,
  BodyApi,
  FuelApi,
  VehiclesSearchApi,
} from "../../../Api/api";

export default function NewVehicleFilter() {
  const [brandTypes, setBrandTypes] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  let history = useHistory();
  let changeBrand = "";
  let changeBodyType = "";
  let changeFuelType = "";

  useEffect(() => {
    BrandApi()
      .then((brandType) => {
        setBrandTypes(brandType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    BodyApi()
      .then((bodyType) => {
        setBodyTypes(bodyType);
      })
      .catch((error) => {
        console.log("error", error);
      });

    FuelApi()
      .then((fuelType) => {
        setFuelTypes(fuelType);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleChangeBrand = (e) => {
    changeBrand = e.target.value;
  };

  const handleChangeBodyType = (e) => {
    changeBodyType = e.target.value;
  };

  const handleChangeFlueType = (e) => {
    changeFuelType = e.target.value;
  };

  const handleSearchSubmit = () => {
    VehiclesSearchApi({
      _data: {
        name: "",
        duration: "",
        brand: changeBrand,
        bodytype: changeBodyType,
        fueltype: changeFuelType,
      },
    })
      .then((vehicleSearchData) => {
        const sortedVehicleSearchData = vehicleSearchData.sort(
          (a, b) => b.id - a.id
        );
        history.push({
          pathname: "/vehicles",
          state: { vehicles: sortedVehicleSearchData },
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="container vehicleSearch">
      <div className="container vs-wrapper">
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3">
            <p className="vs-field">
              <label className="vs-field-lable">
                <b>Brands:</b>
              </label>
              <select
                className="vs-car-dealer-field"
                onChange={handleChangeBrand}
              >
                <option value={""}>All</option>
                {brandTypes.map((brand, index) => {
                  return (
                    <option key={index} value={brand.brand_name}>
                      {brand.brand_name}
                    </option>
                  );
                })}
              </select>
            </p>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-3">
            <p className="vs-field">
              <label className="vs-field-lable">
                <b>Body:</b>
              </label>
              <select
                className="vs-car-dealer-field"
                onChange={handleChangeBodyType}
              >
                <option value={""}>All</option>
                {bodyTypes.map((body, index) => {
                  return (
                    <option key={index} value={body.id}>
                      {body.body_type}
                    </option>
                  );
                })}
              </select>
            </p>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-3">
            <p className="vs-field">
              <label className="vs-field-lable">
                <b>Fuel:</b>
              </label>
              <select
                className="vs-car-dealer-field"
                onChange={handleChangeFlueType}
              >
                <option value={""}>All</option>
                {fuelTypes.map((fuel, index) => {
                  return (
                    <option key={index} value={fuel.id}>
                      {fuel.fuel_type}
                    </option>
                  );
                })}
              </select>
            </p>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-3">
            <p className="vs-field">
              <button
                className="vs-car-filter-submit"
                onClick={(e) => handleSearchSubmit(e)}
              >
                Search
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
