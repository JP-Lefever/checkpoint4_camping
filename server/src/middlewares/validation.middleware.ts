import type { RequestHandler } from "express";

import joi from "joi";

const today = new Date();
const minBirthdate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate(),
)
  .toISOString()
  .split("T")[0];

const registerSchema = joi.object({
  firstName: joi.string().required(),

  lastName: joi.string().required(),

  email: joi
    .string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr", "org"] },
    })
    .required(),

  birthdate: joi.date().max(minBirthdate).required(),

  city: joi.string().required(),

  zipCode: joi.number().required(),

  tel: joi.string().min(10).max(14).required(),

  password: joi
    .string()
    .min(8)
    .pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/)
    .required(),
});

const addCampingSchema = joi.object({
  campingName: joi.string().required(),
  zipCode: joi.number().required(),
  adress: joi.string().required(),
  city: joi.string().required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } }),
  tel: joi.string().min(10).max(14).required(),
  stars: joi.number().required(),
  opening: joi.date().required(),
  closing: joi.date().required(),
  description: joi.string().required(),
  photoCamp: joi.string(),
  modelMh: joi.number().required(),
  sizeMh: joi.number().required(),
  pricePerNight: joi.number().required(),
  maxPers: joi.number().required(),
  openingMh: joi.date().required(),
  closingMh: joi.date().required(),
  linear: joi.number().required(),
  photoMh: joi.string(),
  typePitche: joi.number().required(),
  sizePitche: joi.number().required(),
  pricePitche: joi.number().required(),
  maxPersPitche: joi.number().required(),
  openingPitche: joi.date().required(),
  closingPitche: joi.date().required(),
  electricity: joi.boolean().required(),
  power: joi.number().required(),
  totalPitches: joi.number().required(),
  photoPitche: joi.string(),
  infra: joi.number().required(),
  photoInfra: joi.string(),
});

export const validateRegister: RequestHandler = (req, res, next) => {
  const { error } = registerSchema.validate(req.body, {
    abortEarly: false,
  });
  if (!error) {
    console.info("ok");
    next();
  } else {
    res.status(400).json({ message: error?.details });
    console.info(error?.details);
  }
};

export const validateCamping: RequestHandler = (req, res, next) => {
  const dataCamp = JSON.parse(req.body.data);
  const { error } = addCampingSchema.validate(dataCamp, {
    abortEarly: false,
  });
  if (!error) {
    next();
  } else {
    res.status(400).json({ message: error?.details });
    console.info(error?.details);
  }
};
