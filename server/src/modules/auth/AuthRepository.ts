import db, { type Rows } from "../../../database/client";

type UserProps = {
  id: number;
  email: string;
  password: string;
  firstName: string;
  role: string;
};

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
