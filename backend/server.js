import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import User from "./models/User.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Default admin seed
const seedAdmin = async () => {
  const exist = await User.findOne({ email: process.env.ADMIN_EMAIL });
  if (!exist) {
    await User.create({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "admin",
    });
    console.log("✅ Default Admin Created");
  }                                                                    
};                               
seedAdmin();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
