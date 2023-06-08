import express from "express";
import * as authController from "../controllers/auth.controller";
const route = express.Router();

route.post("/login", authController.Login);
route.post("/register", authController.Register);

export default route;
