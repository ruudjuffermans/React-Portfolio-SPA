import styles from "./style.module.css";

const Section = ({ children }) => {
  return (
    <div className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
