import db, { type Result } from "../../../database/client";
import type { UserProps } from "../../lib/definition";

class RegisterRepository {
  async createUser(user: UserProps) {
    const {
      email,
      firstName,
      lastName,
      birthdate,
      city,
      zipCode,
      tel,
      password,
    } = user;

    const [result] = await db.query<Result>(
      `
        INSERT INTO user (email, firstName, lastName, birthdate, city, zipCode, tel, password)
        VALUES (?,?,?,?,?,?,?,?)
        `,
      [email, firstName, lastName, birthdate, city, zipCode, tel, password],
    );

    return result.insertId;
  }
}

export default new RegisterRepository();
