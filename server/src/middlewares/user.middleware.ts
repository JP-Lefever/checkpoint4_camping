import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import AuthRepository from "../modules/auth/AuthRepository";

type PayloadProps = {
  firstName: string;
  email: string;
  role: string;
};

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
    req.body.firstName = verifyMail.firstName;
    req.body.dbpassword = verifyMail.password;
    req.body.role = verifyMail.role;

    next();
  } catch (e) {
    next(e);
  }
};

export const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      res.status(403).json({ authentification: false });
    }

    const verify = jwt.verify(token, process.env.APP_SECRET as string);

    if (verify) {
      next();
    } else {
      res.status(403).json({ authentification: false });
    }
  } catch (e) {
    next(e);
  }
};

export const clearToken: RequestHandler = (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (token) {
      res.clearCookie("auth_token").json({ message: "A bientôt" });
      next();
    }
  } catch (e) {
    next(e);
  }
};

export const checkAuth: RequestHandler = (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      res.status(403).json({ authentification: false });
    }

    const verify = jwt.verify(token, process.env.APP_SECRET as string);
    const decodeJwt: PayloadProps = jwtDecode(token);

    if (verify) {
      res.json({ authentification: true, role: decodeJwt.role });
    } else {
      res.status(403).json({ authentification: false });
    }
  } catch (e) {
    next(e);
  }
};
