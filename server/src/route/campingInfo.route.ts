import express from "express";
import campingAction from "../modules/camping/campingAction";

const router = express.Router();

router.get("/all/5", campingAction.browseCamping5);
router.get("/all/4", campingAction.browseCamping4);

export default router;
