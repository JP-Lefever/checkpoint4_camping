import jwt from "jsonwebtoken";

type UserProps = {
  firstName: string;
  email: string;
  role: string;
};

export const encodeJWT = async (user: UserProps) => {
  const { email, firstName, role } = user;

  const payload = { email, firstName, role };

  const token = jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });

  return token;
};
