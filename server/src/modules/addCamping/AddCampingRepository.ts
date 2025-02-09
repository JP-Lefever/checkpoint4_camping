import { ad } from "@faker-js/faker/dist/airline-BnpeTvY9";
import db, { type Rows, type Result } from "../../../database/client";

type ModelProps = {
  id: number;
  label: string;
};
type PitchesProps = {
  id: number;
  label: string;
};

type InfraProps = {
  id: number;
  label: string;
};
type CampingProps = {
  CampingName: string;
  zipCode: number;
  adress: string;
  city: string;
  email: string;
  tel: number;
  stars: number;
  opening: Date;
  closing: Date;
  description: string;
  photo: string | undefined;
};

export type RentalProps = {
  model: string;
  size: number;
  price: number;
  maxPers: number;
  openingMh: Date;
  closingMh: Date;
  linear: number;
  photoMh: string | undefined;
};

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
      photo,
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
        photo,
      ],
    );
    return result.insertId;
  }

  async addRental(rental: RentalProps) {
    const {
      model,
      size,
      price,
      maxPers,
      openingMh,
      closingMh,
      linear,
      photoMh,
    } = rental;

    const [result] = await db.query<Result>(
      `
       INSERT INTO rental
       VALUES (?,?,?,?,?,?,?,?)`,
      [model, size, price, maxPers, openingMh, closingMh, linear, photoMh],
    );
    return result.insertId;
  }
}

export default new AddCampingRepository();
