import express from "express";
import { cpUpload, upload } from "../middlewares/multer.middleware";
import addCampingAction from "../modules/addCamping/addCampingAction";
import { validateCamping } from "../middlewares/validation.middleware";

const router = express.Router();

router.get("/mobilhome", addCampingAction.browseMobilhome);
router.get("/pitches", addCampingAction.browsePitches);
router.get("/infra", addCampingAction.browseInfra);
router.post("/new", cpUpload, validateCamping, addCampingAction.addCamping);

export default router;
