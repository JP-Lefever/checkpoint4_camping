import express from "express";
import { newPassord } from "../middlewares/hashPass.middleware";
import registerAction from "../modules/register/registerAction";

const router = express.Router();

router.post("/new", newPassord, registerAction.addNewUser);

export default router;
