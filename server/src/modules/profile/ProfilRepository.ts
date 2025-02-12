import { ro } from "@faker-js/faker/.";
import db, { type Result, type Rows } from "../../../database/client";
import type { UserProps } from "../../lib/definition";

class ProfilRepository {
  async readUserInfo(email: string) {
    const [rows] = await db.query<Rows>(
      `
            SELECT * 
            FROM user
            WHERE email = ?
            `,
      [email],
    );
    return rows[0];
  }

  async updateUserInfo(
    userInfo: Omit<UserProps, "id" | "password">,
    userId: number,
  ) {
    const { firstName, lastName, email, tel, city, zipCode, birthdate } =
      userInfo;
    const [result] = await db.query<Result>(
      `
        UPDATE user
        SET firstName = ?, lastName = ?, email = ?, tel = ?, city = ?, zipCode = ?, birthdate = DATE_FORMAT(STR_TO_DATE(?,'%d/%m/%Y' ), '%Y/%m/%d')
        WHERE id = ?
        `,
      [firstName, lastName, email, tel, city, zipCode, birthdate, userId],
    );

    return result.affectedRows;
  }

  async readUserByEmail(email: string) {
    const [rows] = await db.query<Rows>(
      `
      SELECT id
      FROM user
      WHERE email = ?
      `,
      [email],
    );
    return rows[0];
  }
}

export default new ProfilRepository();
