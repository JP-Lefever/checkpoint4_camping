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

type UserProps = {
  id: number;
  firstName: string;
  lastname: string;
  email: string;
  birthdate: Date;
  city: string;
  zipCode: number;
  tel: number;
  password: string;
  confirmpassword: string;
};
