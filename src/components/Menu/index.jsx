import styles from "./style.module.css";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import close from "../../assets/svg/close.svg"

const data = [
  { name: "Home", to: "/" },
  { name: "About me", to: "/about-me" },
  { name: "Contact", to: "/contact" },
  { name: "Hire me", to: "/hire-me" },
  { name: "Downloads", to: "/download" },
  { name: "Courses", to: "/courses" },
];

const Menu = ({ show, setShow }) => {
  return (
    <Modal enter={show} setEnter={setShow}>
      {({ state }) => (
        <div className={[styles.drawer, styles[`drawer--${state}`]].join(" ")}>
          <button onClick={() => setShow(false)}>
            <img src={close} alt="" />
          </button>
          <ul className={styles.menu__list}>
            {data.map((item, i) => (
              <li key={i} className={styles.menu__item}>
                <Link
                  className={styles.drawer__link}
                  onClick={() => setShow(false)}
                  to={item.to}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default Menu;
