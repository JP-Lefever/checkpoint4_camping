import express from "express";
import registerAction from "../modules/register/registerAction";

const router = express.Router();

router.post("/new", registerAction.addNewUser);

export default router;
