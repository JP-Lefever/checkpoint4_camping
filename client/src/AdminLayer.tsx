import { Outlet } from "react-router-dom";
import styles from "./adminLayer.module.css";
import NavAdmin from "./components/navAdmin/NavAdmin";
export default function AdminLayer() {
  return (
    <>
      <main className={styles.main}>
        <NavAdmin />
        <Outlet />
      </main>
    </>
  );
}
