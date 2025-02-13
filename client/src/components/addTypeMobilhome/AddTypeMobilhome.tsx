import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { ModelProps } from "../../assets/lib/definition";
import styles from "./addTypeMobilhome.module.css";

export default function AddTypeMobilhome() {
  const { register, handleSubmit } = useForm<ModelProps>();
  const onSubmit: SubmitHandler<ModelProps> = async (infoMh) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/camping/new/mobilhome`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(infoMh),
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
          <legend className={styles.legend}> Ajouter un mobil'home</legend>
          <label className={styles.label} htmlFor="label">
            Nom de mobil'home
          </label>
          <input className={styles.inpit} type="text" {...register("label")} />
          <button className={styles.button} type="submit">
            Ajouter un mobil'home
          </button>
        </fieldset>
      </form>
    </>
  );
}
