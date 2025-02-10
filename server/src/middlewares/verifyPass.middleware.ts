import type { RequestHandler } from "express";
import { checkPassword } from "../helpers/verifyPass.helpers";

export const validPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password, dbpassword } = req.body;

    const isValidPassword = await checkPassword(password, dbpassword);

    if (!isValidPassword) {
      res
        .status(403)
        .json({ message: "couple mot de pass/identifiant incorrect" });
      return;
    }
    next();
  } catch (e) {
    next(e);
  }
};
