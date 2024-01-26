import styles from "./style.module.css";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import close from "../../assets/svg/close.svg"

import routes from "../../router/routes"

const Menu = ({ show, setShow }) => {
  return (
    <Modal enter={show} setEnter={setShow}>
      {({ state }) => (
        <div className={[styles.drawer, styles[`drawer--${state}`]].join(" ")}>
          <button className={styles.drawer__btn} onClick={() => setShow(false)}>
            <img src={close} alt="" />
          </button>
          <ul className={styles.menu__list}>
          {routes.filter((route) => !route.isDynamic)
            .map(({ name, route, key }) => (
              <li key={key} className={styles.menu__item}>
              <Link
                className={styles.drawer__link}
                onClick={() => setShow(false)}
                to={route}
              >
                {name}
              </Link>
            </li>
            )
          )}
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default Menu;
