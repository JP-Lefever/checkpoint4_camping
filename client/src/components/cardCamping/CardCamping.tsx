import type { CampingProps } from "../../assets/lib/definition";

import styles from "./cardCamping.module.css";

export default function CardCamping({
  campingInfo,
}: { campingInfo: CampingProps }) {
  return (
    <>
      <section className={styles.card}>
        <img
          className={styles.img}
          src={`${import.meta.env.VITE_API_URL}/uploads/${campingInfo?.photo}`}
          alt={campingInfo.label}
        />
        <h2>{campingInfo.label}</h2>
        <p>{campingInfo.city}</p>
      </section>
    </>
  );
}
