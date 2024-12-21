import React, { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount((prev) => prev + 1);
  };
  return {
    count,
    plus,
  };
};

export default useCount;
