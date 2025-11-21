import React, { useContext, useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import bannerphoto from "../assets/bannerphoto.jpg";
import "../styles/profile.css";

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "dark" ? "#121212" : "#f8f9fa";
  const textColor = theme === "dark" ? "#fff" : "#000";

  const [formData, setFormData] = useState({
    name: "Kirti Gatyani",
    role: "Frontend Developer",
    email: "kirti@example.com",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    bio: "",
  });

  const [photo, setPhoto] = useState(bannerphoto);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle image upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <div
    
      style={{
        minHeight: "100vh",
        backgroundColor: bgColor,
        color: textColor,
        transition: "all 0.3s ease",
      }}
      className="p-5"
    >
      <Row className="align-items-start justify-content-center g-4">
        {/* LEFT SIDE - PHOTO + BASIC INFO */}
        <Col md={4} className="text-center">
          <img
            src={photo}
            alt="Profile"
            className="rounded-circle border border-primary shadow-sm mb-3"
            width="150"
            height="150"
            style={{ objectFit: "cover" }}
          />
          <h4 className="fw-bold">{formData.name}</h4>
          <p className="text-muted">{formData.role}</p>

          <input
            type="file"
            id="photoUpload"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />

          <Button
            variant={theme === "dark" ? "light" : "outline-primary"}
            className="mt-3 fw-semibold px-2"
            onClick={() => document.getElementById("photoUpload").click()}
          >
            Change Photo
          </Button>
          <Button
            variant={theme === "dark" ? "light" : "outline-primary"}
            className="mt-3 fw-semibold px-2"
            onClick={() => document.getElementById("photoUpload").click()}
          >
            Remove Photo
          </Button>
        </Col>

        {/* RIGHT SIDE - FORM */}
        <Col md={7}>
          <h3 className="fw-bold mb-4">Profile Details</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                  />
                  <Button
                    variant="outline-primary"
                    onClick={() => setShowEmailModal(true)}
                  >
                    Update
                  </Button>
                </div>
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.email}
                    disabled
                    className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                  />
                  <Button
                    variant="outline-primary"
                    onClick={() => setShowPasswordModal(true)}
                  >
                    Change Password
                  </Button>
                </div>
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                >
                  <option value="">Select</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </Form.Select>
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.role}
                  disabled
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={12} className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={4} className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={4} className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={4} className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-light border-0" : ""}
                />
              </Col>

              <Col md={12} className="mb-3">
                <Form.Label>Bio / About</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="bio"
                  placeholder="Tell something about yourself"
                  value={formData.bio}
                  onChange={handleChange}
                  className={theme === "dark" ? "bg-dark text-dark border-0" : ""}
                />
              </Col>

              <div className="text-end">
                <Button
                  variant={theme === "dark" ? "light" : "primary"}
                  type="submit"
                  className="fw-semibold px-4"
                >
                  Save Changes
                </Button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>

      {/* Email Update Modal */}
      <Modal show={showEmailModal} onHide={() => setShowEmailModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>New Email</Form.Label>
            <Form.Control type="email" placeholder="Enter new email" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEmailModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

      {/* Password Change Modal */}
      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Enter old password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter new password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm new password" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">Update Password</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
