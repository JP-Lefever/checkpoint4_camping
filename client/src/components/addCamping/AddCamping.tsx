import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type {
  CampingProps,
  InfraProps,
  ModelProps,
  PitchesProps,
} from "../../assets/lib/definition";
import styles from "./addCamping.module.css";

export default function FormAddCamping() {
  const { register, handleSubmit, watch } = useForm<CampingProps>();
  const [mobilHome, setMobilHome] = useState<ModelProps[]>();
  const [pitches, setPitches] = useState<PitchesProps[]>();
  const [infra, setinfra] = useState<InfraProps[]>();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/camping/mobilhome`)
      .then((res) => res.json())
      .then((data) => setMobilHome(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/camping/pitches`)
      .then((res) => res.json())
      .then((data) => setPitches(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/camping/infra`)
      .then((res) => res.json())
      .then((data) => setinfra(data));
  }, []);

  const infraId = watch("infra");
  const modelId = watch("modelMh");
  const pitcheId = watch("typePitche");

  const onSubmit: SubmitHandler<CampingProps> = async (data) => {
    const { photoCamp, photoMh, photoPitche, photoInfra, ...rest } = data;

    const formData = new FormData();
    formData.append("photoCamp", photoCamp[0]);
    formData.append("photoMh", photoMh[0]);
    formData.append("photoPitche", photoPitche[0]);
    formData.append("photoInfra", photoInfra[0]);
    formData.append("modelId", modelId);
    formData.append("infraId", infraId);
    formData.append("pitcheId", pitcheId);
    formData.append("data", JSON.stringify(rest));
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/camping/new`,
      {
        method: "POST",
        headers: { multipart: "form-data" },
        body: formData,
      },
    );
    if (response.ok) {
      const data = await response.json();
      toast.success(data.message);
    }
  };

  return (
    <>
      <section className={styles.add_form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}> Informations Générales</legend>
            <label className={styles.label} htmlFor="campingName">
              Nom
            </label>
            <input
              className={styles.input}
              type="text"
              {...register("campingName", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="zipCode">
              Code postal
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("zipCode", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="adress">
              Adresse
            </label>
            <input
              className={styles.input}
              type="text"
              {...register("adress", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="city">
              Ville
            </label>
            <input
              className={styles.input}
              type="text"
              {...register("city", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              {...register("email", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="tel">
              Téléphone
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("tel", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="stars">
              Etoiles
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("stars", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="opening">
              Date d'ouverture
            </label>
            <input
              className={styles.input}
              type="date"
              {...register("opening", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="closing">
              Date de fermeture
            </label>
            <input
              className={styles.input}
              type="date"
              {...register("closing", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="description">
              Description du camping
            </label>
            <input
              className={styles.input}
              type="text"
              {...register("description", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="photoCamp">
              Photo
            </label>
            <input
              className={styles.input}
              type="file"
              {...register("photoCamp")}
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Information Mobil'home</legend>
            <label className={styles.label} htmlFor="modelMh">
              Type de mobil'home
            </label>
            <select
              className={styles.input}
              {...register("modelMh", { required: "Champ requis" })}
            >
              {mobilHome
                ? mobilHome.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                    </option>
                  ))
                : ""}
            </select>
            <label className={styles.label} htmlFor="sizeMh">
              Taille
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("sizeMh", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="pricePerNight">
              Prix/nuit
            </label>
            <input
              className={styles.input}
              type="number"
              step="0.01"
              {...register("pricePerNight", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="maxPers">
              Max personnes
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("maxPers", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="openingMh">
              Date d'ouverture
            </label>
            <input
              className={styles.input}
              type="date"
              {...register("openingMh", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="closingMh">
              Date de fermeture
            </label>
            <input
              className={styles.input}
              type="date"
              {...register("closingMh", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="linear">
              Nombre de linéaire
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("linear", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="photoMh">
              Photo
            </label>
            <input
              className={styles.input}
              type="file"
              {...register("photoMh")}
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}> Information emplacement</legend>
            <label className={styles.label} htmlFor="typePitche">
              Type d'emplacement
            </label>
            <select
              className={styles.input}
              {...register("typePitche", { required: "Champ requis" })}
            >
              {pitches
                ? pitches.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))
                : ""}
            </select>
            <label className={styles.label} htmlFor="sizePitche">
              Taille (en m2)
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("sizePitche", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="pricePitche">
              Prix/nuit
            </label>
            <input
              className={styles.input}
              type="number"
              step="0.01"
              {...register("pricePitche", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="maxPersPitche">
              Max personnes
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("maxPersPitche", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="openingPitche">
              Date d'ouverture
            </label>
            <input
              className={styles.input}
              type="date"
              {...register("openingPitche", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="closingPitche">
              Date de fermeture
            </label>
            <input
              className={styles.input}
              type="date"
              {...register("closingPitche", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="electricity">
              Avec electricité
            </label>

            <select
              className={styles.input}
              {...register("electricity", { required: "Champ requis" })}
            >
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
            <label className={styles.label} htmlFor="power">
              Puissance (en A)
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("power", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="totalPitches">
              Nombre d'emplacement
            </label>
            <input
              className={styles.input}
              type="number"
              {...register("totalPitches", { required: "Champ requis" })}
            />
            <label className={styles.label} htmlFor="photoPitche">
              Photo
            </label>
            <input
              className={styles.input}
              type="file"
              {...register("photoPitche")}
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Information infrastructure
            </legend>
            <label className={styles.label} htmlFor="infra">
              Infrastructure
            </label>
            <select
              className={styles.input}
              {...register("infra", { required: "Champ requis" })}
            >
              {infra
                ? infra.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.label}
                    </option>
                  ))
                : ""}
            </select>
            <label className={styles.label} htmlFor="photoInfra">
              Photo
            </label>
            <input
              className={styles.input}
              type="file"
              {...register("photoInfra")}
            />
          </fieldset>
          <button className={styles.button} type="submit">
            Je valide les Informations
          </button>
        </form>
      </section>
    </>
  );
}
