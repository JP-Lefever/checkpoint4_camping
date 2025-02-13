import db, { type Rows, type Result } from "../../../database/client";
import type {
  CampingProps,
  InfraCampProps,
  InfraProps,
  ModelProps,
  PitchProps,
  PitchesProps,
  RentalProps,
} from "../../lib/definition";

class AddCampingRepository {
  async readAllMobilhome() {
    const [rows] = await db.query<Rows>(`
            SELECT * 
            FROM model
            `);
    return rows as ModelProps[];
  }

  async readAllPitches() {
    const [rows] = await db.query<Rows>(`
            SELECT * 
            FROM type_pitches
            `);
    return rows as PitchesProps[];
  }

  async readAllInfra() {
    const [rows] = await db.query<Rows>(`
            SELECT * 
            FROM infrastructure
            `);
    return rows as InfraProps[];
  }

  async createCamping(infoCamping: CampingProps) {
    const {
      CampingName,
      zipCode,
      adress,
      city,
      email,
      tel,
      stars,
      opening,
      closing,
      description,
      photoCamp,
    } = infoCamping;
    const [result] = await db.query<Result>(
      `
        INSERT INTO camping (label, email, tel, city, zipCode, adress, description, stars, opening, closing, photo)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)
        `,
      [
        CampingName,
        email,
        tel,
        city,
        zipCode,
        adress,
        description,
        stars,
        opening,
        closing,
        photoCamp,
      ],
    );
    return result.insertId;
  }

  async createRental(rental: RentalProps) {
    const { model, size, price, maxPers, openingMh, closingMh, photoMh } =
      rental;

    const [result] = await db.query<Result>(
      `
       INSERT INTO rental (model_id,size,pricePerNight,max_pers,opening,closing,photo)
       VALUES (?,?,?,?,?,?,?)`,
      [model, size, price, maxPers, openingMh, closingMh, photoMh],
    );
    return result.insertId;
  }

  async createPitche(pitche: PitchProps) {
    const {
      typePitche,
      sizePitche,
      isElectrified,
      power,
      pricePitche,
      maxPersPitche,
      openingPitche,
      closingPitche,
      photoPitche,
    } = pitche;

    const [result] = await db.query<Result>(
      `
       INSERT INTO pitches (type_pitches_id ,size,is_electrified,power,price_night,max_pers,opening, closing, photo)
       VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        typePitche,
        sizePitche,
        isElectrified,
        power,
        pricePitche,
        maxPersPitche,
        openingPitche,
        closingPitche,
        photoPitche,
      ],
    );
    return result.insertId;
  }

  async createInfra(infra: InfraCampProps) {
    const { infraId, campingId, photoInfra } = infra;

    const [result] = await db.query<Result>(
      `
       INSERT INTO camp_infra (infrastructure_id, camping_id, photo)
       VALUES (?,?,?)`,
      [infraId, campingId, photoInfra],
    );
    return result.insertId;
  }
  async createCampRental(campingId: number, rentalId: number, linear: number) {
    const [result] = await db.query<Result>(
      `
       INSERT INTO camp_rental (camping_id, rental_id, number)
       VALUES (?,?,?)`,
      [campingId, rentalId, linear],
    );
    return result.insertId;
  }

  async createCampPitches(campingId: number, pitcheId: number, number: number) {
    const [result] = await db.query<Result>(
      `
       INSERT INTO camp_pitches (camping_id, pitches_id, number)
       VALUES (?,?,?)`,
      [campingId, pitcheId, number],
    );
    return result.insertId;
  }

  async createMobilHome(label: string) {
    const [result] = await db.query<Result>(
      `
      INSERT INTO model(label)
      VALUES (?)
      `,
      [label],
    );
    console.info(result.insertId);
    return result.insertId;
  }
}

export default new AddCampingRepository();
