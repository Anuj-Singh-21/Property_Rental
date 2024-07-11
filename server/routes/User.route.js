import express from "express";
import { loginUser, registerUser } from "../controllers/User.controller.js";

const router = express.Router();

router.post("/", registerUser);
router.get("/", loginUser);

export default router;
