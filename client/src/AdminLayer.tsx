import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import styles from "./adminLayer.module.css";
import NavAdmin from "./components/navAdmin/NavAdmin";

export default function AdminLayer() {
  const [addCampingOpen, setAddCampingOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/connected`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "user" || !data.authentification) {
          navigate("/");
        }
      });
  }, [navigate]);

  return (
    <>
      <main className={styles.main}>
        <NavAdmin
          addCampingOpen={addCampingOpen}
          setAddCampingOpen={setAddCampingOpen}
        />
        <Outlet context={{ addCampingOpen }} />
        <ToastContainer
          position="top-center"
          autoClose={6000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </main>
    </>
  );
}
