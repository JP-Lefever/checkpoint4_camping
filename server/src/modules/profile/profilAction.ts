import type { RequestHandler } from "express";
import { jwtDecode } from "jwt-decode";
import type { PayloadProps } from "../../lib/definition";
import ProfilRepository from "./ProfilRepository";

const readUserInformation: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    const payload: PayloadProps = jwtDecode(token);

    const userInfo = await ProfilRepository.readUserInfo(payload.email);

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
    const payload: PayloadProps = jwtDecode(token);

    const userId = await ProfilRepository.readUserByEmail(payload.email);

    const userIdUpdate = await ProfilRepository.updateUserInfo(user, userId.id);

    console.info(payload.email);
    if (userIdUpdate) {
      res.status(201).json({ message: "Profil mis à jour" });
    }
  } catch (e) {
    next(e);
  }
};

export default { readUserInformation, updateUserInfo };
