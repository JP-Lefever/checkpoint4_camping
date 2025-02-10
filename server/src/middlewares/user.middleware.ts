import type { RequestHandler } from "express";
import AuthRepository from "../modules/auth/AuthRepository";

export const getUserByEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const verifyMail = await AuthRepository.readUserByEmail(email);

    if (!verifyMail) {
      res
        .status(404)
        .json({ message: "Couple mot de pass / identifiant incorrect" });
      return;
    }

    req.body.dbpassword = verifyMail.password;
    next();
  } catch (e) {
    next(e);
  }
};
