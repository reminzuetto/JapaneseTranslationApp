// import { useEffect, useRef } from "react";

// const useClickOutside = (callback) => {
//   const ref = useRef();

//   useEffect(() => {
//     const handleClick = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         callback();
//       }
//     };

//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [callback]);

//   return ref;
// };

// export default useClickOutside;

// import { useEffect, useRef, useState } from "react";

// export default function useClickOutside(dom = "button") {
//   const [show, setShow] = useState(false);
//   const nodeRef = useRef(null);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         nodeRef.current &&
//         !nodeRef.current.contains(event.target) &&
//         !event.target.matches(dom)
//       ) {
//         setShow(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return {
//     show,
//     setShow,
//     nodeRef,
//   };
// }
