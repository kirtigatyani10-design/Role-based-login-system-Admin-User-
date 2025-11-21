import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import bannerphoto from "../../assets/bannerphoto.jpg";

function UserDashboard() {
  const { theme } = useContext(ThemeContext);

  const cardBg = theme === "light" ? "white" : "#1f1f1f";
  const textColor = theme === "light" ? "#000" : "#fff";
  const bgColor = theme === "light" ? "#f3f6ff" : "#121212";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <Container fluid className="px-4 py-3">

        {/* Header */}
        <h2 className="fw-bold mb-4">Welcome, Kirti 👋</h2>

        {/* First Row */}
        <Row className="g-4 mb-3">
          {/* Profile Card */}
          <Col xl={4} lg={4} md={6}>
            <Card
              className="shadow-sm text-center p-4"
              style={{ backgroundColor: cardBg, border: "none", borderRadius: "18px" }}
            >
              <img
                src={bannerphoto}
                alt="Profile"
                className="rounded-circle mx-auto mb-3"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  border: "4px solid #eaefff",
                }}
              />
              <h5 className="fw-bold mb-1">Kirti Gatyani</h5>
              <p className="text-muted mb-0">Frontend Developer</p>
            </Card>
          </Col>

          {/* Work Mode */}
          <Col xl={4} lg={4} md={6}>
            <Card
              className="shadow-sm text-center p-4"
              style={{ backgroundColor: cardBg, border: "none", borderRadius: "18px" }}
            >
              <h6 className="fw-semibold mb-2">Work Mode</h6>
              <h2 className="fw-bold text-primary mb-1">Hybrid</h2>
              <p className="text-muted small">Office 3 days / Remote 2 days</p>
            </Card>
          </Col>

          {/* Profile Progress */}
          <Col xl={4} lg={4} md={12}>
            <Card
              className="shadow-sm p-4"
              style={{ backgroundColor: cardBg, border: "none", borderRadius: "18px" }}
            >
              <h6 className="fw-semibold mb-3">Profile Completion</h6>
              <ProgressBar
                now={80}
                variant="success"
                className="mb-3"
                style={{ height: "10px", borderRadius: "6px" }}
              />
              <ul className="list-unstyled small mb-0">
                <li>✅ Personal Info</li>
                <li>✅ Projects Linked</li>
                <li>✅ Documents Uploaded</li>
                <li>❌ Bank Details</li>
              </ul>
            </Card>
          </Col>
        </Row>

        {/* Stats Row */}
        <Row className="g-4">
          {[
            { title: "Active Projects", value: "5" },
            { title: "Tasks Completed", value: "48" },
            { title: "Pending Tasks", value: "7" },
            { title: "Leaves Left", value: "3" },
          ].map((item, index) => (
            <Col xl={3} lg={3} md={6} key={index}>
              <Card
                className="shadow-sm text-center p-4"
                style={{ backgroundColor: cardBg, border: "none", borderRadius: "18px" }}
              >
                <h2 className="fw-bold text-primary mb-1">{item.value}</h2>
                <p className="text-muted mb-0 fw-semibold">{item.title}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default UserDashboard;
