import { useLoaderData } from "react-router-dom";
import CardCamping from "../../components/cardCamping/CardCamping";
import Header from "../../components/header/Header";
import styles from "./homePage.module.css";

import type { CampingProps } from "../../assets/lib/definition";

export default function HomePage() {
  const [camping5, camping4] = useLoaderData() as CampingProps[][];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.camp}>
          <h2 className={styles.h2}>Découvrez nos camping 5*</h2>
          <h3 className={styles.h3}>De la nature & bien plus encore</h3>
          <article className={styles.article}>
            {camping5.map((c: CampingProps) => (
              <CardCamping key={c.id} campingInfo={c} />
            ))}
          </article>
        </section>
        <section className={styles.camp}>
          <h2 className={styles.h2}>Découvrez nos camping 4*</h2>
          <h3 className={styles.h3}>Un vrai gout de nature</h3>
          <article className={styles.article}>
            {camping4.map((c: CampingProps) => (
              <CardCamping key={c.id} campingInfo={c} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
