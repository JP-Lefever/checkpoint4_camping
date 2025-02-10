import type { RequestHandler } from "express";
import RegisterRepository from "./RegisterRepository";

const addNewUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    console.info(user);
    const userId = await RegisterRepository.createUser(user);
    console.info(user);
    if (userId) {
      res.status(201).json({ message: "Le compte a bien été créé" });
    }
  } catch (e) {
    next(e);
  }
};

export default { addNewUser };
