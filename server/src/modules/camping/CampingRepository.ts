import db, { type Rows } from "../../../database/client";
import type { CampingInfoProps } from "../../lib/definition";

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

    return rows as CampingInfoProps[];
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

    return rows as CampingInfoProps[];
  }

  async readCampingInfo(id: number) {
    const [rows] = await db.query<Rows>(
      `
            SELECT c.*,c.label AS campingName, c.photo AS photoCamp, i.label AS infra_name, ci.photo AS photoInfra, m.label AS modelMh, r.*, r.photo AS photoMh, cr.number AS numberMh, t.label AS typePitche, p.*, p.max_pers AS maxPersPitche, p.opening AS openingPitche, p.closing AS closingPitche, p.photo AS photoPitche, cp.number AS Number
            FROM camping AS c
            JOIN camp_infra AS ci ON ci.camping_id = c.id
            JOIN infrastructure AS i ON i.id = ci.infrastructure_id
            JOIN camp_rental AS cr ON cr.camping_id = c.id
            JOIN rental AS r ON r.id = cr.rental_id
            JOIN model AS m ON m.id = r.model_id
            JOIN camp_pitches AS cp ON cp.camping_id = c.id
            JOIN pitches AS p ON p.id = cp.pitches_id
            JOIN type_pitches AS t ON t.id = p.type_pitches_id
            WHERE c.id = ?
            `,
      [id],
    );
    return rows[0] as CampingInfoProps;
  }
}
export default new CampingRepository();
