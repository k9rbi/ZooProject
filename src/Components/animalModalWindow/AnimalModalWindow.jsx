import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";
import useCount from "../../hooks/useCount";

const AnimalModalWindow = ({ setClose, index, animal, id }) => {
  const { count, plus } = useCount();

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div key={id} className={styles.bg}>
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
        <div className={styles.name}>11 {animal.name}</div>
        <div className={styles.species}>22</div>
        <div className={styles.age}>33</div>
        <div className={styles.gender}>44</div>
        <div className={styles.date}>55</div>
        <div className={styles.status}>66</div>
        <div className={styles.description}>77</div>
        <div className={styles.image}>88</div>
      </div>
    </div>
  );
};

export default AnimalModalWindow;
