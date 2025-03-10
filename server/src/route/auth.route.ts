import express from "express";
import {
  checkAuth,
  clearToken,
  getUserByEmail,
  verifyToken,
} from "../middlewares/user.middleware";
import { validPassword } from "../middlewares/verifyPass.middleware";
import authAction from "../modules/auth/authAction";

const router = express.Router();

//Verifier mail
//verifier mot de pass
//générer le token

router.post("/user", getUserByEmail, validPassword, authAction.authUser);
router.get("/logout", clearToken);
router.get("/login", verifyToken);
router.get("/connected", checkAuth);
export default router;
