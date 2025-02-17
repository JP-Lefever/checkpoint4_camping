import { Power } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { OutletContextType } from "../../assets/lib/definition";
import styles from "./navAdmin.module.css";

export default function NavAdmin({
  addCampingOpen,
  setAddCampingOpen,
  addMhOpen,
  setAddMhOpen,
  addPitchesOpen,
  setPitchesOpen,
  addInfraOpen,
  setAddInfraOpen,
}: OutletContextType) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenuCamping = () => setOpenMenu(!openMenu);

  const [openMenuUser, setOpenMenuUser] = useState(false);
  const handleClickMenuUser = () => setOpenMenuUser(!openMenuUser);
  const navigate = useNavigate();

  const logout = () => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.message))
      .then(() => setTimeout(() => navigate("/"), 1500));
  };

  const handleClickAddCamping = () => setAddCampingOpen(!addCampingOpen);
  const handleClickAddMh = () => setAddMhOpen(!addMhOpen);
  const handleClickAddPitches = () => setPitchesOpen(!addPitchesOpen);
  const handleClickAddInfra = () => setAddInfraOpen(!addInfraOpen);
  return (
    <>
      <nav className={styles.nav}>
        <button className={styles.logout} onClick={logout} type="button">
          <Power size={32} />
        </button>
        <section>
          <button
            className={styles.button}
            type="button"
            onClick={handleClickMenuCamping}
          >
            Gestion des camping
          </button>
          {openMenu && (
            <ul className={styles.ul}>
              <button
                type="button"
                onClick={handleClickAddCamping}
                className={styles.addCamp}
              >
                Ajouter un camping
              </button>
              <button
                type="button"
                onClick={handleClickAddMh}
                className={styles.addCamp}
              >
                Ajouter un type d'hébergement
              </button>
              <button
                type="button"
                onClick={handleClickAddPitches}
                className={styles.addCamp}
              >
                Ajouter un type d'emplacement
              </button>
              <button
                type="button"
                onClick={handleClickAddInfra}
                className={styles.addCamp}
              >
                Ajouter une infrastructure
              </button>
            </ul>
          )}
        </section>
        <section>
          <button
            className={styles.button}
            type="button"
            onClick={handleClickMenuUser}
          >
            Gestion des utilisateurs
          </button>
          {openMenuUser && (
            <ul className={styles.ul}>
              <li className={styles.li}>Comptes client</li>
              <li className={styles.li}>Messages</li>
              <li className={styles.li}>Mailing</li>
            </ul>
          )}
        </section>
      </nav>
    </>
  );
}
