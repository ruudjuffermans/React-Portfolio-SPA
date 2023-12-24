import styles from "./style.module.css";

const Button = ({ children, primary, onClick = () => { } }) => {
  return (
    <button onClick={onClick} className={primary ? `${styles.btn} ${styles.btn__primary}` : styles.btn}>
      {children}
    </button>
  );
};

export default Button;
