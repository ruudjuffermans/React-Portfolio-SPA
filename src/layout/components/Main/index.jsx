import styles from "./style.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export default Main;
