import User from "../models/User.js";

// Admin: Get all employees
export const getEmployees = async (req, res) => {
  const users = await User.find({ role: "employee" });
  res.json(users);
};

// Admin: Delete employee
export const deleteEmployee = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: "Employee deleted" });
};

// Admin: Update employee
export const updateEmployee = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// Profile view/update (Admin/Employee)
export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
  res.json(user);
};
