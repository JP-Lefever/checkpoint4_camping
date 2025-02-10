import { Power, UserRound } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../components/modalLogin/ModalLogin";
import styles from "./logButton.module.css";

export default function LogButton() {
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const handleClickModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/home");
  };
  const userInfo = false;
  return (
    <>
      {openModalLogin && createPortal(<ModalLogin />, document.body)}
      <section>
        {!userInfo ? (
          <button
            className={styles.button}
            type="button"
            onClick={handleClickModalLogin}
          >
            <UserRound size={38} color="#013134" />
          </button>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={handleLogout}
          >
            <Power size={36} color="white" />
          </button>
        )}
      </section>
    </>
  );
}
