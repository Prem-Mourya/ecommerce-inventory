import { Router } from "express";
import { UserController } from "./user.controller.js";

const router = Router();

router.post("/create-account", UserController.registerUser);
router.post("/login", UserController.loginUser);

export const UsersRoutes = router;
