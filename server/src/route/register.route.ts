import express from "express";
import { newPassord } from "../middlewares/hashPass.middleware";
import registerAction from "../modules/register/registerAction";
import { validateRegister } from "../middlewares/validation.middleware";

const router = express.Router();

router.post("/new", validateRegister, newPassord, registerAction.addNewUser);

export default router;
