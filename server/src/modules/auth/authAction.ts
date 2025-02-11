import type { RequestHandler } from "express";
import { encodeJWT } from "../../helpers/jwt.helper";

import { jwtDecode } from "jwt-decode";

const authUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const token = await encodeJWT(user);

    res
      .cookie("auth_token", token, {
        secure: false,
        httpOnly: true,
        maxAge: 36000000,
      })
      .status(201)
      .json({ message: `Bienvenu sur Glamping spot ${req.body.firstName}` });
  } catch (e) {
    next(e);
  }
};

export default { authUser };
