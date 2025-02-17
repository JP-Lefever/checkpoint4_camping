import express from "express";
import { newPassord } from "../middlewares/hashPass.middleware";
import { validateRegister } from "../middlewares/validation.middleware";
import registerAction from "../modules/register/registerAction";

const router = express.Router();

router.post("/new", validateRegister, newPassord, registerAction.addNewUser);

export default router;
