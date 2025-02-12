import { SquareMenu, UserRound } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useNavigate } from "react-router-dom";
import ModalLogin from "../components/modalLogin/ModalLogin";
import styles from "./logButton.module.css";

export default function LogButton() {
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const handleClickModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  const logout = () => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      credentials: "include",
    })
      .then(() => {
        setUser(!user);
        setOpenBurgerMenu(false);
      })
      .then(() => setTimeout(() => navigate("/"), 1500));
  };

  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const handleClickMenu = () => setOpenBurgerMenu(!openBurgerMenu);

  return (
    <>
      {openModalLogin &&
        createPortal(
          <ModalLogin
            closeModal={() => {
              setOpenModalLogin(false);
              setUser(true);
            }}
          />,
          document.body,
        )}
      <section>
        {user ? (
          <button
            className={styles.button_logout}
            type="button"
            onClick={handleClickMenu}
          >
            <SquareMenu size={48} color="#013134" />
          </button>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={handleClickModalLogin}
          >
            <UserRound size={38} color="#013134" />
          </button>
        )}
        {openBurgerMenu && (
          <ul className={styles.menu}>
            <NavLink
              onClick={() => setOpenBurgerMenu(false)}
              className={styles.link}
              to="/profil"
            >
              Mon profil
            </NavLink>
            <button className={styles.link} onClick={logout} type="button">
              Se deconnecter
            </button>
          </ul>
        )}
      </section>
    </>
  );
}
