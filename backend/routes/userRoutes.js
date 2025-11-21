import express from "express";
import { getEmployees, deleteEmployee, updateEmployee, getProfile, updateProfile } from "../controllers/userController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Admin routes
router.get("/employees", protect, adminOnly, getEmployees);
router.delete("/employee/:id", protect, adminOnly, deleteEmployee);
router.put("/employee/:id", protect, adminOnly, updateEmployee);

// Profile routes
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

export default router;
