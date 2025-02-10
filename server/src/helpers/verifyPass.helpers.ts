import argon2 from "argon2";

export const checkPassword = async (dbpassword: string, password: string) => {
  const validPassword = await argon2.verify(dbpassword, password);

  return validPassword;
};
