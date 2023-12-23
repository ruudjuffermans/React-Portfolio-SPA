import { useRef } from "react";
import AnimateState from "../AnimateState";
import styles from "./style.module.css";
import useClickOutside from "../../hooks/useClickOutside";

const Modal = ({ enter, setEnter, children }) => {
  const contentRef = useRef(null);
  useClickOutside(contentRef, () => {
    setEnter(false);
  });

  const handleClose = () => {
    setEnter(false);
  };

  return (
    <AnimateState setEnter={setEnter} unmountOnLeave enter={enter}>
      {({ state }) => {
        return (
          <div
            className={[styles.backdrop, styles[`backdrop--${state}`]].join(
              " "
            )}
          >
            <div style={{ display: "contents" }} ref={contentRef}>
              {children({ handleClose, state })}
            </div>
          </div>
        );
      }}
    </AnimateState>
  );
};

export default Modal;
