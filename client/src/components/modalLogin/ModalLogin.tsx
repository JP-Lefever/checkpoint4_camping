import type { ReactNode } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./modalLogin.module.css";

export default function ModalLogin({ closeModal }: { closeModal: () => void }) {
  const {
    register,
    formState: { errors },

    handleSubmit,
  } = useForm<UserProps>();

  const onSubmit: SubmitHandler<UserProps> = async (userData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/user`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(userData),
        },
      );
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        closeModal();
      }
    } catch (e) {
      toast.warning("Mot de passe ou identifiant incorrect");
    }
  };

  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            className={styles.input}
            placeholder="your@email.com"
            {...register("email", {
              required: "L'email est obligatoire",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "L'email n'est pas valide",
              },
            })}
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message as ReactNode}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            className={styles.input}
            placeholder="••••••••"
            {...register("password", {
              required: "Le mot de passe est obligatoire",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                message:
                  "Le mot de passe doit contenir entre 8 et 16 caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
              },
            })}
          />
          {errors.password?.message && (
            <p className={styles.role}>
              {errors.password.message as ReactNode}
            </p>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
        <NavLink to="/register">Créer un compte</NavLink>
      </form>
    </div>
  );
}
