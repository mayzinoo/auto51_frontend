import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free";
// css
// components
import TopBanner from "../../../Components/TopBanner";
import BottomBanner from "../../../Components/BottomBanner";
import ValueProp from "../Components/Valueproposition";
import Info from "../Components/Info";
import ServiceFeatures from "../Components/ServiceFeatures";
import { FaBullhorn } from "react-icons/fa";
import NavHeader from "../../../Components/NavHeader";

const Service = () => {
  return (
    <Fragment>
      <TopBanner title="Service" />
      <NavHeader pageName="Service" />
      <ServiceFeatures />
      <ValueProp />
      <Info />
      <BottomBanner
        logo={<FaBullhorn style={{ marginBottom: 10 }} />}
        text="Need A Hand To Find Your Car?"
      />
    </Fragment>
  );
};

export default Service;
