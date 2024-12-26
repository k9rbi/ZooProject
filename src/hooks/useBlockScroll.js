import React, { useEffect } from "react";

export const useBlockScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("blockScroll");
    } else {
      document.body.classList.remove("blockScroll");
    }
    return () => {
      document.body.classList.remove("blockScroll");
    };
  }, [open]);
};
