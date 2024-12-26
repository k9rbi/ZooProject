import React from "react";
import styles from "./index.module.scss";

export const UpLoadImage = () => {
  const handDragOver = () => {};
  const handDragLeave = () => {};
  const handDrop = () => {};
  return (
    <div
      onDragOver={handDragOver}
      onDragLeave={handDragLeave}
      onDrop={handDrop}
      className={styles.conteiner}
    >
      <label htmlFor="fileUpLoad">
        <input type="file" id="fileUpLoad" />
      </label>
    </div>
  );
};
