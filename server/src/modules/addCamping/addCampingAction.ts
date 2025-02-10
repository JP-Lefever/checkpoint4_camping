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
type CustomFiles = {
  [key: string]: Express.Multer.File[];
};

const addCamping: RequestHandler = async (req, res, next) => {
  try {
    const data = JSON.parse(req.body.data);
    const files = req.files as CustomFiles;
    const photo = files.photo?.[0]?.filename || null;
    const photoMh = files.photoMh?.[0]?.filename || null;
    const photoPitche = files.photoPitche?.[0]?.filename || null;
    const photoInfra = files.photoInfra?.[0]?.filename || null;

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
      photo: photo,
    };

    const mobilhomeInfo = {
      model: data.modelMh,
      size: data.sizeMh,
      price: data.pricePerNight,
      maxPers: data.maxPers,
      openingMh: data.openingMh,
      closingMh: data.closingMh,
      photoMh: photoMh,
    };
    const isElectrified = data.electricity ? 0 : 1;
    const pitchesInfo = {
      typePitche: data.typePitche,
      sizePitche: data.sizePitche,
      isElectrified: isElectrified,
      power: data.power,
      pricePitche: data.pricePitche,
      maxPersPitche: data.maxPersPitche,
      openingPitche: data.openingPitche,
      closingPitche: data.closingPitche,
      photoPitche: photoPitche,
    };

    const campingId = await AddCampingRepository.createCamping(generalInfo);
    const rentalId = await AddCampingRepository.addRental(mobilhomeInfo);
    const pitcheId = await AddCampingRepository.addPitche(pitchesInfo);

    const infra = {
      infraId: data.infra,
      campingId: campingId,
      photoInfra: photoInfra,
    };

    const infraId = await AddCampingRepository.addInfra(infra);

    const numberRental = data.linear;
    const camp_rentalId = await AddCampingRepository.addCampRental(
      campingId,
      rentalId,
      numberRental,
    );

    const numberPitches = data.totalPitches;
    const camp_pitchesId = await AddCampingRepository.addCampPitches(
      campingId,
      pitcheId,
      numberPitches,
    );

    if (
      campingId &&
      rentalId &&
      pitcheId &&
      infraId &&
      camp_rentalId &&
      camp_pitchesId
    ) {
      res.status(201).json({ message: "top" });
    }
  } catch (e) {
    next(e);
  }
};

export default { browseMobilhome, browsePitches, browseInfra, addCamping };
