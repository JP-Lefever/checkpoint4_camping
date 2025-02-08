import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.title}>
          <h1 className={styles.h1}>Lef'Nature</h1>
          <h2 className={styles.h2}>Vos campings aux petits oignons</h2>
        </section>
      </header>
    </>
  );
}
