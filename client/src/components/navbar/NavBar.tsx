import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-camp.jpg";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <img className={styles.logo} src={logo} alt="logo camping" />
        <ul>
          <li>
            <NavLink to="/camping-5-etoiles">Camping 5*</NavLink>
          </li>
          <li>
            <NavLink to="/camping-4-etoiles">Camping 4*</NavLink>
          </li>
        </ul>
        <button type="button">connexion</button>
      </nav>
    </>
  );
}
