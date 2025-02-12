import { FilePenLine } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserProps } from "../../assets/lib/definition";
import styles from "./profilPage.module.css";

export default function ProfilPage() {
  const [userInfo, setUserInfo] = useState<UserProps>();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<UserProps>({
    defaultValues: {
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
      city: userInfo?.city,
      birthdate: userInfo?.birthdate,
      zipCode: userInfo?.zipCode,
      email: userInfo?.email,
      tel: userInfo?.tel,
    },
  });

  const [editForm, setEditForm] = useState(true);
  const handleClickEdit = () => setEditForm(!editForm);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/profil/informations`,
        {
          credentials: "include",
        },
      );
      const data = await response.json();
      if (response.ok) {
        const formattedData = {
          ...data,
          birthdate: formatedDate(data.birthdate),
        };
        setUserInfo(formattedData);
        reset(formattedData);
      }
    };
    fetchUser();
  }, [reset]);

  const onSubmit: SubmitHandler<UserProps> = async (user) => {
    console.info(user);
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/profil/edit`,
      {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      },
    );
    const data = await response.json();
    if (response.ok) {
      toast.success(data.message);
      setEditForm(true);
    }
  };

  const formatedDate = (date: Date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const day = newDate.getDate().toString().padStart(2, "0");

    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <section className={styles.section}>
        <div className={styles.div}>
          <button
            className={styles.editButton}
            onClick={handleClickEdit}
            type="button"
          >
            <FilePenLine color="#013134" size={42} />
          </button>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.h2}>Mes informations personnelles</h2>
            <div>
              <label htmlFor="firstName" className={styles.label}>
                Prénom
              </label>
              <input
                type="text"
                className={styles.input}
                readOnly={editForm}
                disabled={editForm}
                {...register("firstName", {
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
                readOnly={editForm}
                disabled={editForm}
                {...register("lastName", {
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
                readOnly={editForm}
                disabled={editForm}
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "L'email n'est pas valide",
                  },
                })}
              />
              {errors.email?.message && (
                <p className={styles.role}>
                  {errors.email.message as ReactNode}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="birthdate" className={styles.label}>
                Date de naissance
              </label>
              <input
                type="text"
                className={styles.input}
                readOnly={editForm}
                disabled={editForm}
                {...register("birthdate", {})}
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
                readOnly={editForm}
                disabled={editForm}
                {...register("city")}
              />
            </div>
            <div>
              <label htmlFor="zipCode" className={styles.label}>
                Code postal
              </label>
              <input
                type="number"
                readOnly={editForm}
                disabled={editForm}
                className={styles.input}
                {...register("zipCode")}
              />
            </div>
            <div>
              <label htmlFor="tel" className={styles.label}>
                Téléphone
              </label>
              <input
                type="tel"
                className={styles.input}
                readOnly={editForm}
                disabled={editForm}
                {...register("tel")}
              />
              {errors.tel && (
                <p className={styles.role}>{errors.tel.message as ReactNode}</p>
              )}
            </div>
            {!editForm && (
              <button className={styles.button} type={"submit"}>
                Valider
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
