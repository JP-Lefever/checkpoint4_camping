import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/connected`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.authentification);

        console.info(data);
      });
  }, []);

  return (
    <>
      <NavBar setUser={setUser} user={user} />
      <Outlet context={{ setUser, user }} />
      <Footer />
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
    </>
  );
}

export default App;
