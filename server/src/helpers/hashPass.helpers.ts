import argon2 from "argon2";

const hashingOptions = {
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

export const hashPassword = (password: string) => {
  const passwordHashed = argon2.hash(password, hashingOptions);

  return passwordHashed;
};
