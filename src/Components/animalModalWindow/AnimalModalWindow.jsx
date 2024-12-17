import React from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";

const AnimalModalWindow = ({ setClose, index }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.Window}>
        <div className={styles.Header}>
          <button onClick={() => setClose(null)}>
            <Icon28CancelCircleFillRed />
          </button>
        </div>
        <div className={styles.index}>{index}</div>
      </div>
    </div>
  );
};

export default AnimalModalWindow;
