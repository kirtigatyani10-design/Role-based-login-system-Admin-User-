import React, { useState, useContext, useEffect } from "react";
import { Button, Table, Modal, Form, Spinner } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

const Employee = () => {
  const { theme } = useContext(ThemeContext);

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
    password: "",       
  });

  const API_URL = "http://localhost:5000";

  // ---------------- FETCH EMPLOYEES ----------------
  const fetchEmployees = () => {
    const token = localStorage.getItem("token");

    fetch(`${API_URL}/api/users/employees`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmployees(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.log("Fetch Error:", err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ---------------- ADD EMPLOYEE ----------------
  const addEmployee = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_URL}/api/users/employee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to add employee");
        return;
      }

      alert("Employee added successfully!");
      fetchEmployees(); // refresh list

    } catch (error) {
      console.error("Add Employee Error:", error);
    }
  };


  // ---------------- SAVE (ADD / EDIT) ----------------
  const handleSave = async () => {
    if (editing) {
      alert("Update API abhi use nahi kar rahe. Pehle Add chalne do.");
    } else {
      await addEmployee();
    }
    setShowModal(false);
  };

  // ---------------- DELETE (LOCAL ONLY) ----------------
  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp._id !== id));
  };

  return (
    <div
      className={`p-4 min-vh-100 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h3 className="mb-4 fw-bold">Employee Management</h3>

      <Button
        variant={theme === "dark" ? "light" : "primary"}
        className="mb-3"
        onClick={() => {
          setEditing(false);
          setFormData({
            name: "",
            designation: "",
            department: "",
            email: "",
            password: "",
          });
          setShowModal(true);
        }}
      >
        Add New Employee
      </Button>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
          <p>Loading employees...</p>
        </div>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className={theme === "dark" ? "table-dark" : ""}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.name}</td>
                <td>{emp.designation}</td>
                <td>{emp.department}</td>
                <td>{emp.email}</td>

                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(emp._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* --------------- MODAL --------------- */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editing ? "Edit Employee" : "Add New Employee"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleSave}>
            {editing ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Employee;
