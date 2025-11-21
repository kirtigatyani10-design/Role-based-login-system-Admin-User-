import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container, Row, Col, Card } from "react-bootstrap";

function AdminDashboard() {
  const { theme } = useContext(ThemeContext);
  const cardBg = theme === "light" ? "white" : "#1e1e1e";
  const textColor = theme === "light" ? "#000" : "#fff";
  const bgColor = theme === "light" ? "#f5f6fa" : "#121212";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: bgColor, color: textColor }}>
      <Container fluid className="p-4">
        <h3 className="fw-bold mb-4">Admin Dashboard</h3>
        <Row className="g-4">
          {[
            { title: "Total Users", value: "120" },
            { title: "Active Employees", value: "95" },
            { title: "Pending Requests", value: "8" },
            { title: "Departments", value: "4" },
          ].map((item, i) => (
            <Col md={3} key={i}>
              <Card
                className="shadow-sm text-center p-4"
                style={{ backgroundColor: cardBg, border: "none" }}
              >
                <h3 className="fw-bold text-primary mb-1">{item.value}</h3>
                <p className="text-muted mb-0">{item.title}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <Card
          className="mt-4 p-4 shadow-sm"
          style={{ backgroundColor: cardBg, border: "none" }}
        >
          <h5 className="fw-bold mb-3">Recent Activities</h5>
          <ul className="list-unstyled small mb-0">
            <li>👩‍💻 New user <b>Kirti</b> registered</li>
            <li>📊 Project “React CRM” marked as complete</li>
            <li>💼 HR added a new role: Designer</li>
            <li>🚀 Deployment triggered for v2.0</li>
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default AdminDashboard;
