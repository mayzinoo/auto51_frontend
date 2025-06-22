//libraries
import React, { Fragment, useState } from "react";
//components
import { Tabs, Tab } from "react-bootstrap";
import Profile from "./Profile";
import ChangePwd from "../../../PreEmpt/ChangePwd";
//css
import "../components/styles/userprofile.css";

function UserProfile() {
  const [key, setKey] = useState("profile");
  return (
    <Fragment>
      <div className="profile-container-wrap">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="profile" title="Profile">
            <Profile />
          </Tab>
          <Tab eventKey="changepassword" title="Change Password">
            <ChangePwd />
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
}

export default UserProfile;
