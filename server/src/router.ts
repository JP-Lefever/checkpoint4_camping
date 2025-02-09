import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import addCampingRoute from "../src/route/addCamping.route";

router.use("/camping", addCampingRoute);

/* ************************************************************************* */

export default router;
