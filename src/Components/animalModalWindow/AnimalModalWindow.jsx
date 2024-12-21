import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";
import useCount from "../../hooks/useCount";

const AnimalModalWindow = ({ setClose, index }) => {
  const { count, plus } = useCount();

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className={styles.bg}>
      <div className={styles.Window}>
        <div className={styles.Header}>
          <button onClick={() => setClose(null)}>
            <Icon28CancelCircleFillRed />
          </button>
        </div>
        <div className={styles.index}>
          {index}
          <button onClick={plus}>{count}</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalModalWindow;
