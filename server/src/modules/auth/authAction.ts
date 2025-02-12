import type { RequestHandler } from "express";
import { jwtDecode } from "jwt-decode";
import { encodeJWT } from "../../helpers/jwt.helper";

type PayloadProps = {
  firstName: string;
  email: string;
  role: string;
};

const authUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const token = await encodeJWT(user);
    const decodeJwt: PayloadProps = jwtDecode(token);

    res
      .cookie("auth_token", token, {
        secure: false,
        httpOnly: true,
        maxAge: 36000000,
      })
      .status(201)
      .json({
        message: `Bienvenu sur Glamping spot ${req.body.firstName}`,
        role: decodeJwt.role,
      });
  } catch (e) {
    next(e);
  }
};

export default { authUser };
