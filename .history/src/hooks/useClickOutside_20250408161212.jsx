import { useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        // Delay để các sự kiện bên trong ref được xử lý trước
        setTimeout(() => {
          callback();
        }, 100;
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
