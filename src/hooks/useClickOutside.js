import React, { useEffect } from "react";

export const useClickOutside = (modalRef, setClose) => {
  useEffect(() => {
    const clickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setClose(null);
        console.log(open);
      }
    };
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, [setClose]);
};
