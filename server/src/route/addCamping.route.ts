import express from "express";
import { cpUpload, upload } from "../middlewares/multer.middleware";
import { validateCamping } from "../middlewares/validation.middleware";
import addCampingAction from "../modules/addCamping/addCampingAction";

const router = express.Router();

router.get("/mobilhome", addCampingAction.browseMobilhome);
router.get("/pitches", addCampingAction.browsePitches);
router.get("/infra", addCampingAction.browseInfra);
router.post("/new", cpUpload, validateCamping, addCampingAction.addCamping);
router.post("/new/mobilhome", addCampingAction.addMobihome);
router.post("/new/pitches", addCampingAction.addPitches);

export default router;
