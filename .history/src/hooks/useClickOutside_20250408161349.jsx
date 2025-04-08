import { useEffect, useRef, useState } from "react";

export default function useClickOutside(initialShow = false, callback) {
  const [show, setShow] = useState(initialShow);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // Đợi 1 chút để onClick trong dropdown kịp chạy trước
        setTimeout(() => {
          setShow(false);
          if (typeof callback === "function") {
            callback();
          }
        }, 0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return {
    ref,
    show,
    setShow,
  };
}
