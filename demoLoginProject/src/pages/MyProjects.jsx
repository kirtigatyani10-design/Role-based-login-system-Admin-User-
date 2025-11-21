import React, { useState } from "react";
import { Card, Button, Form, ProgressBar } from "react-bootstrap";

function MyProjects() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create Dashboard UI",
      description: "Sidebar, Navbar, Themes and Layout",
      status: "in-progress",
      progress: 40,
    },
    {
      id: 2,
      title: "Build Login System",
      description: "Email, password and validation",
      status: "completed",
      progress: 100,
    },
  ]);

  // Update status
  const updateStatus = (id, newStatus) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  // Update progress
  const updateProgress = (id, newProgress) => {
    if (newProgress > 100) newProgress = 100;
    if (newProgress < 0) newProgress = 0;

    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, progress: Number(newProgress) } : t
      )
    );
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4">My Projects</h3>

      <div className="row g-4">
        {tasks.map((task) => (
          <div className="col-md-6" key={task.id}>
            <Card className="shadow-sm border-0 p-3">
              <h5 className="fw-bold mb-2">{task.title}</h5>
              <p className="text-muted small">{task.description}</p>

              {/* STATUS DROPDOWN */}
              <Form.Select
                className="mb-3"
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </Form.Select>

              {/* PROGRESS INPUT */}
              <div className="mb-3">
                <label className="mb-1 fw-semibold">
                  Progress: {task.progress}%
                </label>
                <Form.Control
                  type="number"
                  value={task.progress}
                  onChange={(e) => updateProgress(task.id, e.target.value)}
                />
              </div>

              {/* PROGRESS BAR */}
              <ProgressBar
                now={task.progress}
                label={`${task.progress}%`}
                variant={
                  task.progress === 100
                    ? "success"
                    : task.progress > 50
                    ? "info"
                    : "warning"
                }
                className="mb-3"
              />

              <Button variant="primary" className="w-100">
                Update Task
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
