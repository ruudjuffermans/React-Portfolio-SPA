import { useEffect, useRef, useState } from "react";

const STATE = {
  UNMOUNTED: "UNMOUNTED",
  MOUNTED: "MOUNTED",
  ENTERING: "ENTERING",
  ENTERED: "ENTERED",
  LEAVING: "LEAVING",
};

const AnimateState = ({
  enter,
  enterOnMount,
  unmountOnLeave,
  children,
  duration = 300,
}) => {
  const hasMounted = useRef(false);
  const [state, setState] = useState(STATE.UNMOUNTED);

  useEffect(() => {
    if (hasMounted.current) {
      if (enter) {
        setState(STATE.MOUNTED);
        setTimeout(() => {
          setState(STATE.ENTERING);
        }, 10);
      }
      if (!enter) {
        setState(STATE.LEAVING);
      }
    } else {
      hasMounted.current = true;
      if (enterOnMount) {
        setState(STATE.MOUNTED);
        setTimeout(() => {
          setState(STATE.ENTERING);
        }, 10);
      }
    }
  }, [enter]);

  useEffect(() => {
    if (state === STATE.LEAVING) {
      setTimeout(() => {
        setState(unmountOnLeave ? STATE.UNMOUNTED : STATE.MOUNTED);
      }, duration);
    }
    if (state === STATE.ENTERING) {
      setTimeout(() => {
        setState(STATE.ENTERED);
      }, duration);
    }
  }, [state, enterOnMount]);

  if (state === STATE.UNMOUNTED) return null;

  return children({ state });
};

export default AnimateState;
