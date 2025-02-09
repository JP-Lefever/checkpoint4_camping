import { ne } from "@faker-js/faker/.";
import type { RequestHandler } from "express";
import AddCampingRepository from "./AddCampingRepository";

const browseMobilhome: RequestHandler = async (req, res, next) => {
  try {
    const mobilhome = await AddCampingRepository.readAllMobilhome();

    if (mobilhome) {
      res.status(201).json(mobilhome);
    }
  } catch (e) {
    next(e);
  }
};

const browsePitches: RequestHandler = async (req, res, next) => {
  try {
    const pitches = await AddCampingRepository.readAllPitches();

    if (pitches) {
      res.status(201).json(pitches);
    }
  } catch (e) {
    next(e);
  }
};
const browseInfra: RequestHandler = async (req, res, next) => {
  try {
    const infra = await AddCampingRepository.readAllInfra();

    if (infra) {
      res.status(201).json(infra);
    }
  } catch (e) {
    next(e);
  }
};

const addCamping: RequestHandler = async (req, res, next) => {
  try {
    const data = JSON.parse(req.body.data);

    const generalInfo = {
      CampingName: data.campingName,
      zipCode: data.zipCode,
      adress: data.adress,
      city: data.city,
      email: data.email,
      tel: data.tel,
      stars: data.stars,
      opening: data.opening,
      closing: data.closing,
      description: data.description,
      photo: req.file?.filename,
    };
    const mobilhomeInfo = {
      model: data.modelMh,
      size: data.sizeMh,
      price: data.price,
      maxPers: data.maxPers,
      openingMh: data.openingMh,
      closingMh: data.closingMh,
      linear: data.linear,
      photoMh: req.file?.filename,
    };

    console.info(mobilhomeInfo);
    const campingId = await AddCampingRepository.createCamping(generalInfo);
    const rentalId = await AddCampingRepository.addRental(mobilhomeInfo);

    if (campingId) {
      res.status(201).json({ message: "top" });
    }
    if (rentalId) {
      res.status(201).json({ message: "top2" });
    }
  } catch (e) {
    next(e);
  }
};

export default { browseMobilhome, browsePitches, browseInfra, addCamping };
