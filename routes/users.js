import { Router } from "express";
import bcrypt from "bcrypt";
import userController from "../controllers/UserController.js";

const router = Router();

router.post("/login",userController.login)

export default router;