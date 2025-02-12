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
    cookieMail: string,
  ) {
    const { firstName, lastName, email, tel, city, zipCode, birthdate } =
      userInfo;
    const [result] = await db.query<Result>(
      `
        UPDATE user
        SET firstName = ?, lastName = ?, email = ?, tel = ?, city = ?, zipCode = ?, birthdate = DATE_FORMAT(STR_TO_DATE(?,'%d/%m/%Y' ), '%Y/%m/%d')
        WHERE email = ?
        `,
      [firstName, lastName, email, tel, city, zipCode, birthdate, cookieMail],
    );
    console.info(userInfo);
    console.info(cookieMail);
    console.info(result.affectedRows);
    return result.affectedRows;
  }
}

export default new ProfilRepository();
