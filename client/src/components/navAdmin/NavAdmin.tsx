import { useState } from "react";
import styles from "./navAdmin.module.css";

export default function NavAdmin() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenuCamping = () => setOpenMenu(!openMenu);

  const [openMenuUser, setOpenMenuUser] = useState(false);
  const handleClickMenuUser = () => setOpenMenuUser(!openMenuUser);

  return (
    <>
      <nav className={styles.nav}>
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
              <li className={styles.li}>Ajouter un camping</li>
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
