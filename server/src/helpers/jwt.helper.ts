import jwt from "jsonwebtoken";

type UserProps = {
  firstName: string;
  email: string;
};

export const encodeJWT = async (user: UserProps) => {
  const { email, firstName } = user;

  const payload = { email, firstName };

  const token = jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });

  return token;
};
