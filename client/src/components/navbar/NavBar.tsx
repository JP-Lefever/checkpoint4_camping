import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-camp.jpg";
import styles from "./navBar.module.css";

import LogButton from "../../LogButton/LogButton";
import type { ConnectedProps } from "../../assets/lib/definition";

export default function NavBar({ user, setUser }: ConnectedProps) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="logo camping" />
        </a>
        <ul className={styles.list}>
          <li>
            <NavLink className={styles.link} to="#">
              Camping 5*
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="#">
              Camping 4*
            </NavLink>
          </li>
        </ul>
        <LogButton user={user} setUser={setUser} />
      </nav>
    </>
  );
}
