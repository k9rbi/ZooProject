import React from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";

const AddAnimalWindow = ({ setClose }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.AddAnimalWindow}>
        <div className={styles.modalHeader}>
          <button onClick={() => setClose(false)}>
            <Icon28CancelCircleFillRed />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAnimalWindow;
