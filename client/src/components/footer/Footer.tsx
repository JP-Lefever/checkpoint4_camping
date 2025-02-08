import logo from "../../assets/images/logo-camp.jpg";
import logoInstagram from "../../assets/images/logo-instagram.png";
import logoLinkedIn from "../../assets/images/logo-linkedin.png";
import logoYouTube from "../../assets/images/logo-youtube.png";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerMain}>
      <section className={style.section}>
        <div className={style.footerRight}>
          <p>CONTACT US</p>
          <p>glamping@contact.com</p>
          <p>01 39 35 42 29</p>
        </div>
        <div className={style.footerMiddle}>
          <h3>GLAMPING CLUB</h3>
          <img className={style.logoClass} src={logo} alt="Logo Boarder Line" />
        </div>
        <div className={style.footerLeft}>
          <p>FOLLOW US</p>
          <div className={style.social}>
            <img
              className={style.miniLogoAnimation}
              src={logoLinkedIn}
              alt="Logo LinkedIn"
            />
            <img
              className={style.miniLogoAnimation}
              src={logoInstagram}
              alt="Logo Instagram"
            />
            <img
              className={style.miniLogoAnimation}
              src={logoYouTube}
              alt="Logo YouTube"
            />
          </div>
        </div>
      </section>
      <section className={style.footerBottom}>
        <p>Mentions légales et CGU • Données personnelles et cookies</p>
        <p>
          Images from&nbsp;
          <a
            className={style.link}
            href="https://unsplash.com/fr/@foxandhyde"
            rel="noreferrer"
            target="_blank"
          >
            Unsplash
          </a>
          &nbsp;,&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            className={style.link}
            href={"https://fr.freepik.com/"}
          >
            Freep!k
          </a>
          &nbsp;&&nbsp;
          <a
            className={style.link}
            rel="noreferrer"
            href="https://fr.pngtree.com/"
            target="_blank"
          >
            PNG Tree
          </a>
        </p>
      </section>
    </footer>
  );
}
