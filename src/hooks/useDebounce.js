import { useCallback, useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const latestCallback = useRef();
    const timer = useRef();

    useEffect(() => {
        latestCallback.current = callback;
    }, [callback]);

    return useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            latestCallback.current();
        }, delay);
    }, [delay]);
};

export default useDebounce;
