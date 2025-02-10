import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import addCampingRoute from "../src/route/addCamping.route";
router.use("/camping", addCampingRoute);

import registerRoute from "../src/route/register.route";
router.use("/register", registerRoute);

import authRoute from "../src/route/auth.route";
router.use("/auth", authRoute);

/* ************************************************************************* */

export default router;
