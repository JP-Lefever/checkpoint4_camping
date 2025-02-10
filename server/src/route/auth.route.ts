import express from "express";
import { getUserByEmail } from "../middlewares/user.middleware";
import { validPassword } from "../middlewares/verifyPass.middleware";

const router = express.Router();

//Verifier mail
//verifier mot de pass
//générer le token

router.post("user", getUserByEmail, validPassword);

export default router;
