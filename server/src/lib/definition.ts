export type UserProps = {
  id: number;
  password: string;
  email: string;
  firstName: string;
  tel: string;
  city: string;
  birthdate: string;
  zipCode: number;
  lastName: string;
  role: string;
};

export type PayloadProps = {
  firstName: string;
  email: string;
  role: string;
};

export type ModelProps = {
  id: number;
  label: string;
};
export type PitchesProps = {
  id: number;
  label: string;
};

export type InfraProps = {
  id: number;
  label: string;
};
export type CampingProps = {
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

export type CampingInfoProps = {
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

export type RentalProps = {
  model: string;
  size: number;
  price: number;
  maxPers: number;
  openingMh: Date;
  closingMh: Date;
  photoMh: string | null;
};

export type PitchProps = {
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

export type InfraCampProps = {
  infraId: number;
  campingId: number;
  photoInfra: string | null;
};
