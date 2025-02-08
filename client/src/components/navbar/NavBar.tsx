import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-camp.jpg";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <img className={styles.logo} src={logo} alt="logo camping" />
        <ul className={styles.list}>
          <li>
            <NavLink className={styles.link} to="/camping-5-etoiles">
              Camping 5*
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/camping-4-etoiles">
              Camping 4*
            </NavLink>
          </li>
        </ul>
        <button type="button">connexion</button>
      </nav>
    </>
  );
}
