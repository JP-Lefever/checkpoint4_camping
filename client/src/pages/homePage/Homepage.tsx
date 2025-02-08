import Header from "../../components/header/Header";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.camp}>
          <h2 className={styles.h2}>Découvrez nos camping 5*</h2>
          <h3 className={styles.h3}>De la nature & bien plus encore</h3>
        </section>
        <section className={styles.camp}>
          <h2 className={styles.h2}>Découvrez nos camping 4*</h2>
          <h3 className={styles.h3}>Un vrai gout de nature</h3>
        </section>
      </main>
    </>
  );
}
