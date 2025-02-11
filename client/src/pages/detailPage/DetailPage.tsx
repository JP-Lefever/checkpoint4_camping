import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { CampingProps } from "../../assets/lib/definition";
import styles from "./detailPage.module.css";

export default function DetailPage() {
  const [infoCamping, setInfoCamping] = useState<CampingProps>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/camping/info/${id}`)
      .then((res) => res.json())
      .then((data) => setInfoCamping(data));
  }, [id]);

  return (
    <>
      {infoCamping && (
        <section className={styles.section}>
          <article className={styles.header}>
            <h1 className={styles.h1}>{infoCamping.campingName}</h1>
            <img
              className={styles.imgHeader}
              src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoCamp}`}
              alt={infoCamping.campingName}
            />
          </article>
          <article className={styles.article}>
            <h2>Informations générales</h2>
            <p>{infoCamping.adress}</p>
            <p>{infoCamping.city}</p>
            <p>{infoCamping.zipCode}</p>
            <p>{infoCamping.tel}</p>
            <p>{infoCamping.email}</p>
            {/* <p>{infoCamping.opening}</p>
          <p>{infoCamping.closing}</p> */}
          </article>
          <article className={styles.article}>
            <h2>Nos Cottages</h2>
            <img
              className={styles.imgMh}
              src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoMh}`}
              alt={infoCamping.modelMh}
            />
            <p>{infoCamping.modelMh}</p>
            <p>{infoCamping.sizeMh}</p>
            <p>{infoCamping.maxPers}</p>
            <p>{infoCamping.pricePerNight}</p>
          </article>
          <article className={styles.article}>
            <h2 className={styles.h2}>Nos emplacements</h2>
            <img
              className={styles.imgPitche}
              src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoPitche}`}
              alt={infoCamping.typePitche}
            />
            <p>{infoCamping.sizePitche}</p>
            <p>{infoCamping.electricity}</p>
            <p>{infoCamping.power}</p>
            <p>{infoCamping.maxPersPitche}</p>
            <p>{infoCamping.pricePerNight}</p>
          </article>
          <article className={styles.article}>
            <h2 className={styles.h2}>Nos infrastructures</h2>
            <img
              className={styles.imgInfra}
              src={`${import.meta.env.VITE_API_URL}/uploads/${infoCamping.photoInfra}`}
              alt={infoCamping.typePitche}
            />
            <p>{infoCamping.infra}</p>
          </article>
        </section>
      )}
    </>
  );
}
