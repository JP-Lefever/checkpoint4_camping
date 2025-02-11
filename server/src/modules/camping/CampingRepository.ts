import db, { type Rows } from "../../../database/client";
type CampingProps = {
  id: number;
  campingName: string;
  description: string;
  photo: string;
  opening: Date;
  closing: Date;
  email: string;
  tel: number;
  stars: number;
  city: string;
  zipCode: number;
  adress: string;
};

class CampingRepository {
  async readAllCamping5() {
    const STARS = 5;
    const [rows] = await db.query<Rows>(
      `
            SELECT * 
            FROM camping
            WHERE stars = ?
            `,
      [STARS],
    );

    return rows as CampingProps[];
  }

  async readAllCamping4() {
    const STARS = 4;
    const [rows] = await db.query<Rows>(
      `
            SELECT * 
            FROM camping
            WHERE stars = ?
            `,
      [STARS],
    );

    return rows as CampingProps[];
  }
}

export default new CampingRepository();
