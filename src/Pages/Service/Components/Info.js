import "@fortawesome/fontawesome-free";
//component
import InfoColumn from "./InfoColumn";
//css
const Info = (props) => {
  return (
    <div className="info-section container">
      <div className="info-row row">
        <InfoColumn
          columnClass="info-column col-lg-4 col-md-4 col-sm-12"
          className="info-card"
          title="Opening Hours"
        >
          <div>
            <ul className="info-list">
              <li>
                <span>Monday</span>
                08:00 - 18:00
              </li>
              <hr />
              <li>
                <span>Tuesday</span>
                08:00 - 18:00
              </li>
              <hr />
              <li>
                <span>Wednesday</span>
                08:00 - 18:00
              </li>
              <hr />
              <li>
                <span>Thursday</span>
                08:00 - 18:00
              </li>
              <hr />
              <li>
                <span>Friday</span>
                08:00 - 18:00
              </li>
            </ul>
          </div>
        </InfoColumn>
        <InfoColumn
          columnClass="info-column col-lg-4 col-md-4 col-sm-12"
          className="info-card"
          title="Contact Information"
        >
          <p>AUTO 51 PTE. LTD.</p>
          <p>
            <span className="info-card-icons">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>
              Win5, 15 Yishun Industrial Street 1, #01-05, Singapore 768091
            </span>
          </p>
          <hr />
          <p>
            <span className="info-card-icons">
              <i className="fas fa-phone"></i>
            </span>
            <span>+65 67351551</span>
            <span className="info-grey"> Central Office</span>
          </p>
          <hr />
          <p>
            <span className="info-card-icons">
              <i className="fas fa-paper-plane"></i>
            </span>
            <span>
              <a href="/">sales@auto51.biz</a>
            </span>
          </p>
        </InfoColumn>

        <InfoColumn
          columnClass="info-column col-lg-4 col-md-4 col-sm-12"
          className="info-card"
          title="Shortly About Us"
        >
          <p className="info-grey">
            AUTO 51 Pte Ltd was first incorporated in year 2010. Started as a small second hand car
            dealer, over the years, AUTO 51 and its subsidiaries have expanded into selling a wide range of
            vehicles namely from Japanese, Korea, Continental for 4-13 seater in the private sector as
            well as covering commercial trucks.
          </p>
        </InfoColumn>
      </div>
    </div>
  );
};

export default Info;
