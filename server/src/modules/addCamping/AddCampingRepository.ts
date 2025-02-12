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
  photoCamp: string | null;
};

export type RentalProps = {
  model: string;
  size: number;
  price: number;
  maxPers: number;
  openingMh: Date;
  closingMh: Date;
  photoMh: string | null;
};

type PitchProps = {
  typePitche: number;
  sizePitche: number;
  isElectrified: number;
  power: number;
  pricePitche: number;
  maxPersPitche: number;
  openingPitche: string;
  closingPitche: string;
  photoPitche: string | null;
};

type InfraCampProps = {
  infraId: number;
  campingId: number;
  photoInfra: string | null;
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

  async addRental(rental: RentalProps) {
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

  async addPitche(pitche: PitchProps) {
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

  async addInfra(infra: InfraCampProps) {
    const { infraId, campingId, photoInfra } = infra;

    const [result] = await db.query<Result>(
      `
       INSERT INTO camp_infra (infrastructure_id, camping_id, photo)
       VALUES (?,?,?)`,
      [infraId, campingId, photoInfra],
    );
    return result.insertId;
  }
  async addCampRental(campingId: number, rentalId: number, linear: number) {
    const [result] = await db.query<Result>(
      `
       INSERT INTO camp_rental (camping_id, rental_id, number)
       VALUES (?,?,?)`,
      [campingId, rentalId, linear],
    );
    return result.insertId;
  }

  async addCampPitches(campingId: number, pitcheId: number, number: number) {
    const [result] = await db.query<Result>(
      `
       INSERT INTO camp_pitches (camping_id, pitches_id, number)
       VALUES (?,?,?)`,
      [campingId, pitcheId, number],
    );
    return result.insertId;
  }
}

export default new AddCampingRepository();
