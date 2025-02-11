import type { RequestHandler } from "express";
import { hashPassword } from "../helpers/hashPass.helpers";

export const newPassord: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;

    const passwordHahed = await hashPassword(password);

    if (passwordHahed) {
      req.body.password = passwordHahed;
    }
    next();
  } catch (e) {
    next(e);
  }
};
