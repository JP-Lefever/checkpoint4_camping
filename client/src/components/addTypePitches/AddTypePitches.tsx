import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { ModelProps } from "../../assets/lib/definition";
import styles from "./addTypePitches.module.css";

export default function AddTypePitches() {
  const { register, handleSubmit } = useForm<ModelProps>();
  const onSubmit: SubmitHandler<ModelProps> = async (infoPitches) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/camping/new/pitches`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(infoPitches),
      },
    );
    const data = await response.json();
    if (response.ok) {
      toast.success(data.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}> Ajouter un Emplacement</legend>
          <label className={styles.label} htmlFor="label">
            Nom de l'emplacement
          </label>
          <input className={styles.inpit} type="text" {...register("label")} />
          <button className={styles.button} type="submit">
            Ajouter un emplacement
          </button>
        </fieldset>
      </form>
    </>
  );
}
