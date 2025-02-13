import { type ReactNode, useRef } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import logo from "../../assets/images/logo-camp.jpg";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import type { UserProps } from "../../assets/lib/definition";
import styles from "./register.module.css";

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm<UserProps>();

  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserProps> = async (userData) => {
    const { confirmpassword, ...rest } = userData;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/register/new`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(rest),
        },
      );
      const data = await response.json();

      if (response.status === 201) {
        toast.success(data.message);
        reset();
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (e) {
      toast.warning(
        "Une erreur est survenue, veuillez rééssayer utlérieurement",
      );
    }
  };

  const today = new Date();
  const dateMinusEighteen = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  );

  const formDefaultDate = dateMinusEighteen.toISOString().split("T")[0];

  return (
    <section className={styles.section}>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      ;
      <a className={styles.linkLogo} href="/">
        <img className={styles.logo} src={logo} alt="Logo camping" />
      </a>
      <div className={styles.div}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.h2}>Inscription</h2>
          <div>
            <label htmlFor="firstName" className={styles.label}>
              Prénom
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="John"
              {...register("firstName", {
                required: "Le prénom est obligatoire",
                minLength: {
                  value: 2,
                  message: "Le prénom doit contenir au minimum 2 caractères",
                },
              })}
            />
            {errors.firstName && (
              <p className={styles.role}>
                {errors.firstName?.message as ReactNode}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Doe"
              {...register("lastName", {
                required: "Le nom est obligatoire",
                minLength: {
                  value: 2,
                  message: "Le nom doit contenir au minimum 2 caractères",
                },
              })}
            />
            {errors.lastName && (
              <p className={styles.role}>
                {errors.lastName?.message as ReactNode}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              className={styles.input}
              placeholder="toto@toto.fr"
              {...register("email", {
                required: "L'email est obligatoire",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "L'email n'est pas valide",
                },
              })}
            />
            {errors.email?.message && (
              <p className={styles.role}>{errors.email.message as ReactNode}</p>
            )}
          </div>

          <div>
            <label htmlFor="birthdate" className={styles.label}>
              Date de naissance
            </label>
            <input
              type="date"
              className={styles.input}
              defaultValue={formDefaultDate}
              {...register("birthdate", {
                required: `La date de naissance est obligatoire ${formDefaultDate}`,
                validate: (value) => {
                  const birthdate = new Date(value);
                  const now = new Date(Date.now());
                  if (birthdate.getFullYear() + 18 > now.getFullYear()) {
                    return errors.birthdate?.message;
                  }
                },
              })}
            />
            {errors.birthdate && (
              <p className={styles.role}>
                {errors.birthdate.message as ReactNode}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="city" className={styles.label}>
              Ville
            </label>
            <input
              type="text"
              className={styles.input}
              {...register("city", {
                required: "La ville est obligatoire",
              })}
            />
            {errors.city && (
              <p className={styles.role}>{errors.city.message as ReactNode}</p>
            )}
          </div>
          <div>
            <label htmlFor="zipCode" className={styles.label}>
              Code postal
            </label>
            <input
              type="number"
              className={styles.input}
              {...register("zipCode", {
                required: "Le code postal est obligatoire",
              })}
            />
            {errors.zipCode && (
              <p className={styles.role}>
                {errors.zipCode.message as ReactNode}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="tel" className={styles.label}>
              Téléphone
            </label>
            <input
              type="tel"
              className={styles.input}
              {...register("tel", {
                required: "Le numéro de téléphone est obligatoire",
              })}
            />
            {errors.tel && (
              <p className={styles.role}>{errors.tel.message as ReactNode}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className={styles.label}>
              Mot de passe
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

            {errors.password && (
              <p className={styles.role}>
                {errors.password.message as ReactNode}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="confirmpassword" className={styles.label}>
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              className={styles.input}
              placeholder="••••••••"
              {...register("confirmpassword", {
                required: "La confirmation du mot de passe est obligatoire",
                validate: (value) =>
                  value === passwordRef.current ||
                  "Les mots de passe ne correspondent pas",
              })}
            />
            {errors.confirmpassword && (
              <p className={styles.role}>
                {errors.confirmpassword.message as ReactNode}
              </p>
            )}
          </div>

          <button className={styles.button} type={"submit"}>
            Inscription
          </button>
        </form>
      </div>
    </section>
  );
}
