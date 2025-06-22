//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";
//css
import "./styles/corporate.css";

function Corporate(props) {
  return (
    <Fragment>
      <div className="corporate-container-wrap">
        <Container className="co-container">
          <h1 className="co-mainheader"> Corporate Employee Benefit </h1>
        </Container>
      </div>
      <div className="co-subHeader">
        <Container className="co-container">
          <p>
            In addition to a company car subscription, Auto 51 helps employers
            enhance their employer value proposition by offering their employees
            reduced rates and promos on Auto 51 cars.
          </p>
          <p>
            Feel free to reach out to us to discuss your company’s potential
            partnership with Auto 51.Our communications team will help create
            content to promote the Employee Benefit internally. We are happy for
            our team to come onsite to help promote the staff benefits. There’s
            no commitment and no need for integration with payroll.
          </p>
        </Container>
      </div>
    </Fragment>
  );
}

export default Corporate;
