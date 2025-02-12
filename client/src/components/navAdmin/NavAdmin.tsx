import { Power } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navAdmin.module.css";

export default function NavAdmin({
  addCampingOpen,
  setAddCampingOpen,
}: { addCampingOpen: boolean; setAddCampingOpen: (s: boolean) => void }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenuCamping = () => setOpenMenu(!openMenu);

  const [openMenuUser, setOpenMenuUser] = useState(false);
  const handleClickMenuUser = () => setOpenMenuUser(!openMenuUser);
  const navigate = useNavigate();

  const logout = () => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      credentials: "include",
    }).then(() => setTimeout(() => navigate("/"), 1500));
  };

  const handleClickAddCamping = () => setAddCampingOpen(!addCampingOpen);

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
              <li className={styles.li}>Modifier un camping</li>
              <li className={styles.li}>Supprimer un camping</li>
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
