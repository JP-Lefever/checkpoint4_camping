import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
      </main>
    </>
  );
}
