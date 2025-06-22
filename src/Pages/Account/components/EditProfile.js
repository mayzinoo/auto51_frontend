//Libraries
import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
//Css
import "../components/styles/editprofile.css";
//API
import { EditProfileApi } from "../../../Api/api";
import { setGetUserApi } from "../../../reducers/userActionsStore";
import Input from "../../../Components/Inputfield";
//CSS
import { img_url } from "../../../Api/api";
const Editprofile = (props) => {
  const initialValues = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    profile: "",
  };

  const [userCredential, setUserCredential] = useState(initialValues);

  const originalProfileImg =
    "https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg"; //from backend, current used image
  const [profileImg, setProfileImg] = useState(originalProfileImg);
  const [image, setImage] = useState("");

  useEffect(() => {
    setUserCredential(JSON.parse(props.GetUserApi));
  }, [props.GetUserApi]);

  const handleFirstNameChange = (e) => {
    setUserCredential({ ...userCredential, first_name: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setUserCredential({ ...userCredential, phone: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setUserCredential({ ...userCredential, last_name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUserCredential({ ...userCredential, profile: e.target.value });
  };

  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
    setUserCredential({ ...userCredential, profile: "" });
    var fReader = new FileReader();
    if (e.target.files) {
      fReader.readAsDataURL(e.target.files[0]);
      fReader.onloadend = function (event) {
        setProfileImg(event.target.result);
      };
    } else {
      setProfileImg(profileImg);
    }
  };

  const ClearUploadImage = (e) => {
    e.target.value = null;
    setProfileImg(originalProfileImg);
    setImage("");
    document.getElementById("profile-IMAGE").value = "";
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    EditProfileApi({
      _data: {
        id: userCredential.id,
        first_name: userCredential.first_name,
        last_name: userCredential.last_name,
        email: userCredential.email,
        phone: userCredential.phone,
        profile: image,
      },
    })
      .then((editProfileData) => {
        if (editProfileData.status === 1) {
          const profile = editProfileData.data;
          //store user information in redux store
          props.dispatch(setGetUserApi(JSON.stringify(profile)));
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Fragment>
      <div className="main-content">
        <div className="editProfile">
          <p className="sub-title">Edit Profile</p>
          <Container className="editprofile-wrap" fluid>
            <Row>
              <p className="editprofile-sub-title">Personal Settings</p>
              <Col md={3} className="profileLeft">
                <div className="profileImg">
                  {userCredential.profile === "" ? (
                    <img
                      width={150}
                      height={150}
                      className="rounded-profile"
                      src={profileImg}
                      alt=""
                    />
                  ) : (
                    <img
                      width={150}
                      height={150}
                      className="rounded-profile"
                      src={img_url + userCredential.profile}
                      alt=""
                    />
                  )}

                  <Input
                    id="profile-IMAGE"
                    key="images"
                    name="images"
                    type="file"
                    icon="pe-7s-photo"
                    accept="image/*"
                    onHide
                    required={false}
                    onChange={handleUploadImage}
                  />
                  <label className="changeBtn" htmlFor="profile-IMAGE">
                    CHANGE
                  </label>
                  {profileImg === originalProfileImg ? (
                    ""
                  ) : (
                    <label className="deleteBtn" onClick={ClearUploadImage}>
                      DELETE
                    </label>
                  )}
                </div>
              </Col>
              <Col md={4} style={{ marginLeft: "10px" }}>
                <div className="inputfield-header">First Name</div>
                <input
                  className="account-Input"
                  type="text"
                  defaultValue={userCredential.first_name}
                  onChange={handleFirstNameChange}
                  required
                ></input>
                <div className="inputfield-header">Mobile Number</div>
                <input
                  className="account-Input"
                  type="text"
                  defaultValue={userCredential.phone}
                  onChange={handlePhoneChange}
                  required
                ></input>
              </Col>
              <Col md={4}>
                <div className="inputfield-header">Last Name</div>
                <input
                  className="account-Input"
                  type="text"
                  defaultValue={userCredential.last_name}
                  onChange={handleLastNameChange}
                  required
                ></input>
                <div className="inputfield-header">Email</div>
                <input
                  className="account-Input"
                  type="email"
                  defaultValue={userCredential.email}
                  onChange={handleEmailChange}
                  required
                ></input>
              </Col>
            </Row>
            <div className="break"></div>
            <Row>
              <div className="btnLinks">
                <Button className="edit-btn"
                  style={{ marginBottom: '10px' }}
                  href="/account/profile">
                  Back
                </Button>
                <Button
                  className="edit-btn"
                  style={{ marginBottom: '10px' }}
                  onClick={(e) => handleEditProfileSubmit(e)}
                >
                  Update
                </Button>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  GetUserApi: state.UserActions.GetUserApi,
});

export default connect(mapStateToProp)(Editprofile);
