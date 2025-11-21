import express from "express";
import { assignTask, getMyTasks, completeTask } from "../controllers/taskController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/assign", protect, adminOnly, assignTask);
router.get("/my-tasks", protect, getMyTasks);
router.put("/complete/:id", protect, completeTask);

export default router;
