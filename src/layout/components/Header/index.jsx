import { useState } from "react";
import Menu from "../../../components/Menu";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import menu from "../../../assets/svg/menu.svg"

import routes from "../../../router/routes"

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <a className={styles.header__name} href="/">Ruud Juffermans</a>

      <ul className={styles.header__nav}>
      {routes.filter((route) => !route.isDynamic) // Exclude items with dynamic: true
        .map(({ name, route, key }) => (
          <li key={key}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.header__link} ${styles.active}` : styles.header__link
              }
              to={route}
            >
              {name}
            </NavLink>
          </li>
        )
      )}

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
