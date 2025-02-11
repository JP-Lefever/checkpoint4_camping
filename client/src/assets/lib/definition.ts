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
  id: number;
  label: string;
  campingName: string;
  description: string;
  photoCamp: string;
  photo: string;
  opening: Date;
  closing: Date;
  email: string;
  tel: number;
  stars: number;
  city: string;
  zipCode: number;
  adress: string;
  infra: string;
  modelMh: string;
  sizeMh: number;
  maxPers: number;
  pricePerNight: number;
  openingMh: Date;
  closingMh: Date;
  photoMh: string;
  linear: number;
  typePitche: string;
  sizePitche: number;
  electricity: boolean;
  power: number;
  pricePitche: number;
  maxPersPitche: number;
  openingPitche: Date;
  closingPitche: Date;
  photoPitche: string;
  totalPitches: number;
  photoInfra: string;
};

export type UserProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: Date;
  city: string;
  zipCode: number;
  tel: number;
  password: string;
  confirmpassword: string;
};
