import type { RequestHandler } from "express";
import CampingRepository from "./CampingRepository";

const browseCamping5: RequestHandler = async (req, res, next) => {
  try {
    const allCamping = await CampingRepository.readAllCamping5();

    if (allCamping.length > 0) {
      res.status(201).json(allCamping);
    }
  } catch (e) {
    next(e);
  }
};

const browseCamping4: RequestHandler = async (req, res, next) => {
  try {
    const allCamping = await CampingRepository.readAllCamping4();

    if (allCamping.length > 0) {
      res.status(201).json(allCamping);
    }
  } catch (e) {
    next(e);
  }
};

const readCampingInfo: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const campingInfo = await CampingRepository.readCampingInfo(id);

    if (campingInfo) {
      res.status(201).json(campingInfo);
    }
  } catch (e) {
    next(e);
  }
};

export default { browseCamping5, browseCamping4, readCampingInfo };
