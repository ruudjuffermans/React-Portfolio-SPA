import { useEffect, useRef, useState } from "react";

const withAnimateState = (WrappedComponent, enter, setEnter) => {
  return (props) => {
    const STATE = {
      UNMOUNTED: "UNMOUNTED",
      MOUNTED: "MOUNTED",
      ENTERING: "ENTERING",
      ENTERED: "ENTERED",
      LEAVING: "LEAVING",
    };

    const hasMounted = useRef(false);
    const [state, setState] = useState(
      props.enterOnMount ? STATE.MOUNTED : STATE.UNMOUNTED
    );

    useEffect(() => {
      if (hasMounted.current) {
        if (enter) {
          setState(STATE.MOUNTED);
          setTimeout(() => {
            setState(STATE.ENTERING);
          }, 50);
        }
        if (!enter) {
          setState(STATE.LEAVING);
        }
      } else {
        hasMounted.current = true;
      }
    }, [enter]);

    useEffect(() => {
      if (state === STATE.LEAVING) {
        setTimeout(() => {
          setState(props.unmountOnLeave ? STATE.UNMOUNTED : STATE.MOUNTED);
        }, props.duration);
      }
      if (state === STATE.ENTERING) {
        setTimeout(() => {
          setState(STATE.ENTERED);
        }, props.duration);
      }
    }, [state, props.enterOnMount]);

    return <WrappedComponent {...props} state={state} />;
  };
};

export default withAnimateState;
