//component
//css
import "./styles/servicefeatures.css";

import Service1 from "../../../assets/images/service1.jpg";
import Service2 from "../../../assets/images/service2.jpg";
import Service3 from "../../../assets/images/service3.jpg";
import Service4 from "../../../assets/images/service4.jpg";

const ServiceFeatures = (props) => {
  return (
    <div className="service-features-section container">
      <div className="row">
      <h4 className="servicetitle">Welcome to <span style={{color:"#2e3094"}}>Auto</span><span style={{color:"#00a654"}}> 51</span></h4>
        <div className="col-lg-6 col-md-6 col-sm-12 service-features-text">
          <div className="row service-features-desc-text">
            
            <div className="triangle-down"></div>
            <p>
              AUTO 51 Pte Ltd was first incorporated in year 2010. Started as a small second hand car
dealer, over the years, AUTO 51 and its subsidiaries have expanded into selling a wide range of
vehicles namely from Japanese, Korea, Continental for 4-13 seater in the private sector as
well as covering commercial trucks.
            </p>
            <p>
              Over the years, AUTO 51 have expanded into chauffeur limousine service, vehicle leasing, in-
house vehicle financial loans, logistics delivery for hypermarket and parcel industry sector.

Equipped with vast experience in the transport industry and our one-stop solution service
provided to each client, enable us to serve them with utmost professionalism. Their journey
with us goes beyond just one transaction.
            </p>
          </div>
          <div className="row service-features-desc-list">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>Performance</p>
              <ul>
                <li>Auto tilt-away steering wheel</li>
                <li>Auto-dimming Rear-View mirror</li>
                <li>Auto-dimming door mirrors</li>
                <li>Auto-leveling suspension</li>
                <li>Automatic temperature control</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>Running Costs</p>
              <ul>
                <li>18″ 5-Spoke Light-Alloy Wheels</li>
                <li>4-Wheel Disc Brakes</li>
                <li>ABS brakes</li>
                <li>AM/FM radio: SiriusXM</li>
                <li>Adaptive suspension</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 service-features-images">
          <div className="row service-features-images-row-2">
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service3} alt=""></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service4} alt=""></img>
            </div>
          </div>
          <div className="row service-features-images-row-1">
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service1} alt=""></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service2} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
