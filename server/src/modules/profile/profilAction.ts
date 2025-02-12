import type { RequestHandler } from "express";
import { jwtDecode } from "jwt-decode";
import ProfilRepository from "./ProfilRepository";

type payload = {
  email: string;
};

const readUserInformation: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    const payload: payload = jwtDecode(token);

    const userInfo = await ProfilRepository.readUserInfo(payload.email);
    console.info(userInfo);

    if (userInfo) {
      res.status(201).json(userInfo);
    }
  } catch (e) {
    next(e);
  }
};

const updateUserInfo: RequestHandler = async (req, res, next) => {
  try {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      email: req.body.email,
      tel: req.body.tel,
      birthdate: req.body.birthdate,
      zipCode: Number(req.body.zipCode),
    };
    const token = req.cookies.auth_token;
    const payload: payload = jwtDecode(token);

    const userIdUpdate = await ProfilRepository.updateUserInfo(
      user,
      payload.email,
    );

    if (userIdUpdate) {
      res.status(201).json({ message: "Profil mis à jour" });
    }
  } catch (e) {
    next(e);
  }
};

export default { readUserInformation, updateUserInfo };
