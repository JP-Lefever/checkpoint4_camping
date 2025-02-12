import { useOutletContext } from "react-router-dom";
import FormAddCamping from "../../components/addCamping/AddCamping";
import styles from "./adminPage.module.css";

type OutletContextType = {
  addCampingOpen: boolean;
};

export default function AdminPage() {
  const { addCampingOpen } = useOutletContext<OutletContextType>();
  return (
    <>
      <section className={styles.main}>
        <section>
          <h1 className={styles.h1}>GLAMP' ADMIN</h1>
        </section>
        {addCampingOpen && (
          <section>
            <FormAddCamping />
          </section>
        )}
      </section>
    </>
  );
}
