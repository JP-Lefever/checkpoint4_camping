import db, { type Rows } from "../../../database/client";
import type { UserProps } from "../../lib/definition";

class AuthRepositroy {
  async readUserByEmail(email: string) {
    const [rows] = await db.query<Rows>(
      `
            SELECT *
            FROM user
            WHERE email = ?
            `,
      [email],
    );

    return rows[0] as UserProps;
  }
}

export default new AuthRepositroy();
