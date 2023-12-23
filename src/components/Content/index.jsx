import styles from "./style.module.css";

const Content = ({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
};


export default Content;
