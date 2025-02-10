import argon2 from "argon2";

export const hashPassword = (password: string) => {
  const passwordHashed = argon2.hash(password);

  return passwordHashed;
};
