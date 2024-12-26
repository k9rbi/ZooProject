import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";
import { motion } from "framer-motion";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useBlockScroll } from "../../../hooks/useBlockScroll";

export const ModalContainer = ({ children, setClose, open, headerName }) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, setClose);

  useBlockScroll(open);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.bg}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        ref={modalRef}
        className={styles.Window}
      >
        <div className={styles.Header}>
          <div className={styles.name}>{headerName}</div>
          <button onClick={() => setClose(null)}>
            <Icon28CancelCircleFillRed />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </motion.div>
    </motion.div>
  );
};
