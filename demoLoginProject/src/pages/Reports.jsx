import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

function Reports() {
  const { theme } = useContext(ThemeContext);
  const cardBg = theme === "light" ? "white" : "#1e1e1e";
  const textColor = theme === "light" ? "#000" : "#fff";
  const bgColor = theme === "light" ? "#f5f6fa" : "#121212";

  const reportsData = [
    { id: 1, title: "Monthly Sales", date: "Nov 2025", status: "Completed" },
    { id: 2, title: "Employee Performance", date: "Nov 2025", status: "Pending" },
    { id: 3, title: "Annual Budget", date: "Oct 2025", status: "In Progress" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: bgColor, color: textColor }}>
      <Container fluid className="p-4">
        <h3 className="fw-bold mb-4">Reports Overview</h3>

        <Row className="g-4">
          {[
            { title: "Total Reports", value: reportsData.length },
            { title: "Completed", value: 1 },
            { title: "Pending", value: 1 },
            { title: "In Progress", value: 1 },
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

        {/* Table Section */}
        <Card className="mt-4 shadow-sm" style={{ backgroundColor: cardBg, border: "none" }}>
          <Card.Body>
            <h5 className="fw-bold mb-3">Detailed Reports</h5>
            <Table bordered hover responsive variant={theme === "light" ? "light" : "dark"}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Report Title</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reportsData.map((report) => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>{report.title}</td>
                    <td>{report.date}</td>
                    <td>{report.status}</td>
                    <td>
                      <Button size="sm" variant="primary">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Reports;

