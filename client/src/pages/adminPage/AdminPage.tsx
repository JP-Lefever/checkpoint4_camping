import { useOutletContext } from "react-router-dom";
import type { OutletContextType } from "../../assets/lib/definition";
import FormAddCamping from "../../components/addCamping/AddCamping";
import AddInfra from "../../components/addInfra/AddInfra";
import AddTypeMobilhome from "../../components/addTypeMobilhome/AddTypeMobilhome";
import AddTypePitches from "../../components/addTypePitches/AddTypePitches";
import styles from "./adminPage.module.css";

export default function AdminPage() {
  const { addCampingOpen, addMhOpen, addPitchesOpen, addInfraOpen } =
    useOutletContext<OutletContextType>();
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
        {addMhOpen && (
          <section>
            <AddTypeMobilhome />
          </section>
        )}
        {addPitchesOpen && (
          <section>
            <AddTypePitches />
          </section>
        )}
        {addInfraOpen && (
          <section>
            <AddInfra />
          </section>
        )}
      </section>
    </>
  );
}
