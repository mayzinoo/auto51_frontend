//Libraries
import React, { Fragment, useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
//CSS
import "../components/styles/MyBooking.css";
//API
import { BookingListApi } from "../../../Api/api";

import LatestBooking from "../components/LatestBooking";
import PastBooking from "../components/PastBooking";

function MyBooking(props) {
  const [key, setActiveTab] = useState("1");
  const [userDetails, setUserDetails] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
  });
  const [bookingData, setBookingData] = useState([]);

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  const user_id = userDetails.id;

  useEffect(() => {
    setUserDetails(JSON.parse(props.GetUserApi));
    if (user_id !== "") {
      BookingListApi({ _data: { bookingtab: key, userid: user_id } })
        .then((bookingListData) => {
          if (bookingListData.status === 1) {
            const sortedBookingListData = bookingListData.data.sort(
              (a, b) => b.id - a.id
            );
            setBookingData(sortedBookingListData);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line no-use-before-define
  }, [key, props.GetUserApi, user_id]);

  return (
    <Fragment>
      <div className="main-content">
        <div className="mybooking">
          <p className="sub-title">Booking List</p>
          <Container className="booking-form-wrap">
            <div>
              <Tabs
                defaultActiveKey={key}
                onSelect={handleSelect}
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="1" title="Latest (Active)">
                  <LatestBooking bookingData={bookingData} />
                </Tab>
                <Tab eventKey="2" title="Past Booking">
                  <PastBooking bookingData={bookingData} />
                </Tab>
              </Tabs>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(MyBooking);
