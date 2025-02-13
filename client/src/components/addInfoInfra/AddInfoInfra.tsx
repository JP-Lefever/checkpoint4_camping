import { useEffect, useState } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { CampingProps, InfraProps } from "../../assets/lib/definition";
import styles from "./addInfoInfra.module.css";

export type RegisterProps = {
  register: UseFormRegister<CampingProps>;
};
export default function AddInfoIngra({ register }: RegisterProps) {
  const [infra, setinfra] = useState<InfraProps[]>();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/camping/infra`)
      .then((res) => res.json())
      .then((data) => setinfra(data));
  }, []);

  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Information infrastructure</legend>
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
    </>
  );
}
