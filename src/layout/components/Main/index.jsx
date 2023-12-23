import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About me", to: "/about-me" },
  { name: "Contact", to: "/contact" },
  { name: "Hire me", to: "/hire-me" },
  { name: "Download", to: "/download" },
  { name: "Courses", to: "/courses" },
];

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export default Main;
