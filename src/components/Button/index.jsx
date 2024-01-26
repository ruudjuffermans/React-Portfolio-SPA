import styles from "./style.module.css";

const Button = ({ children, primary, onClick = () => { }, className }) => {
  return (
    <button onClick={onClick} className={primary ? `${styles.btn} ${styles.btn__primary} ${className}` : `${styles.btn}  ${className}`}>
      {children}
    </button>
  );
};

export default Button;
