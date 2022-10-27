import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EditIcon from "@mui/icons-material/Edit";
import HelpIcon from "@mui/icons-material/Help";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Header from "./header";
import getDetail from "shared/utils/details";
import { getUserProfile } from "store/action/userActions";
import Footer from "./footer";

import "assets/css/signin.css";
import "assets/css/viewProfile.css";


function ViewProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.userData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getUserProfile(getDetail("username")));
  }, []);

  return (
    <>
      <Header />
      <div class="container">
        <div class="row profile">
          <div class="col-md-3">
            <div class="profile-sidebar">
              <div class="profile-userpic">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kGluPYWU9tP2OvG7qmFrW6Wixk-B1KHs40i0worECWogmi5GpJH_1yM3o7wrUimAYv0&usqp=CAU"
                  class="img-responsive"
                  alt=""
                />
              </div>

              <div class="profile-userbuttons">
                <button type="button" class="btn btn-success btn-sm">
                  <EditIcon />
                </button>
              </div>
              <div class="profile-usertitle">
                <div class="profile-usertitle-name">{profile.first_name}</div>
              </div>

              <div class="profile-userbuttons">
                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  onClick={handleShow}
                >
                  <PersonIcon /> Edit Profile
                </button>
              </div>

              <div class="profile-usermenu">
                <div class="vertical">
                  <a href="#">
                    <ManageAccountsIcon /> Account Settings
                  </a>

                  <a href="#">
                    <HelpIcon /> Help
                  </a>
                </div>
              </div>

              <div class="portlet light bordered">
                <div>
                  <span class="profile-desc-text">
                    Lorem ipsum dolor sit amet diam nonummy nibh dolore.{" "}
                  </span>
                  <div class="margin-top-20 profile-desc-link">
                    <InstagramIcon />
                    <a href="https://www.twitter.com/jasondavisfl/">
                      @{profile.first_name}
                    </a>
                  </div>
                  <div class="margin-top-20 profile-desc-link">
                    <FacebookIcon />
                    <a href="https://www.facebook.com/">
                      {profile.first_name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="profile-content">

            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form method="POST">
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.first_name}
                    name="first_name"
                    style={{ color: "black", fontSize: "18px" }}
                  />
                  {/* <span className="danger-text">{error.first_name}</span> */}

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.last_name}
                    name="last_name"
                    style={{ color: "black", fontSize: "18px" }}
                  />
                  {/* <span className="danger-text">{error.last_name}</span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>email </Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.email}
                    name="email"
                    style={{ color: "black", fontSize: "18px" }}
                  />
                  {/* <span  className="danger-text">{error.email}</span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    value={profile.phone}
                    name="phone"
                    style={{ color: "black", fontSize: "18px" }}
                  />
                  {/* <span  className="danger-text">{error.phone}</span> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.address}
                    name="address"
                    style={{ color: "black", fontSize: "18px" }}
                  />
                  {/* <span  className="danger-text">{error.address}</span> */}
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ViewProfile;
