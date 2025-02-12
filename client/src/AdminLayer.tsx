import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./adminLayer.module.css";
import NavAdmin from "./components/navAdmin/NavAdmin";
export default function AdminLayer() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/connected`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "user") {
          navigate("/");
        }
      });
  }, [navigate]);

  return (
    <>
      <main className={styles.main}>
        <NavAdmin />
        <Outlet />
      </main>
    </>
  );
}
