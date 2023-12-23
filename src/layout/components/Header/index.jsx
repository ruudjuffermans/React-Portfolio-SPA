import { useState } from "react";
import Menu from "../../../components/Menu";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import menu from "../../../assets/svg/menu.svg"

const navigation = [
  { name: "Home", to: "/" },
  { name: "About me", to: "/about-me" },
  { name: "Contact", to: "/contact" },
  { name: "Resume", to: "/resume" },
  { name: "Downloads", to: "/download" },
  { name: "Courses", to: "/courses" },
];

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <a className={styles.header__name} href="/">Ruud Juffermans</a>

      <ul className={styles.header__nav}>
        {navigation.map(({ name, to }, i) => (
          <li key={i}>
            <NavLink className={({ isActive }) =>
              isActive ? `${styles.header__link} ${styles.active}` : styles.header__link}
              to={to}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.header__menu} >

        <button className={styles.header__btn} onClick={() => setShow(!show)}>
          <img src={menu} alt="" />
        </button>
        <Menu show={show} setShow={setShow} />
      </div>
    </header>
  );
};

export default Header;
