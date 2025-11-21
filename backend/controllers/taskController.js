import Task from "../models/Task.js";

// Admin assign task
export const assignTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

// Employee get own tasks
export const getMyTasks = async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user.id });
  res.json(tasks);
};

// Employee mark task as complete
export const completeTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, { 
    status: "completed" }, { new: true });
  res.json(task);
};

