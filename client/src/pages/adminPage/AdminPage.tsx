import FormAddCamping from "../../components/addCamping/AddCamping";
import styles from "./adminPage.module.css";

export default function AdminPage() {
  return (
    <>
      <section className={styles.main}>
        <section>
          <h1 className={styles.h1}>GLAMP' ADMIN</h1>
        </section>
        <section>
          <FormAddCamping />
        </section>
      </section>
    </>
  );
}
