import jwt from "jsonwebtoken";
import type { UserProps } from "../../src/lib/definition";

export const encodeJWT = async (user: UserProps) => {
  const { email, firstName, role } = user;

  const payload = { email, firstName, role };

  const token = jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });

  return token;
};
