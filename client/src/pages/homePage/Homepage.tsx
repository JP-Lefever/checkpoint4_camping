import Header from "../../components/header/Header";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h2 className={styles.h2}>Découvrez nos camping 5*</h2>
        </section>
        <section>
          <h2 className={styles.h2}>Découvrez nos camping 4*</h2>
        </section>
      </main>
    </>
  );
}
