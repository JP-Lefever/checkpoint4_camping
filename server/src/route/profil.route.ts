import express from "express";
import { verifyToken } from "../middlewares/user.middleware";
import profilAction from "../modules/profile/profilAction";

const router = express.Router();

router.get("/informations", verifyToken, profilAction.readUserInformation);
router.put("/edit", profilAction.updateUserInfo);

export default router;
