import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";

import { motion } from "framer-motion";
import { useBlockScroll } from "../../hooks/useBlockScroll";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ModalContainer } from "../ui/modal/ModalContainer";

const AnimalModalWindow = ({ setClose, open, animal }) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, setClose);

  useBlockScroll(open);

  return (
    <ModalContainer setClose={setClose} open={open} headerName={animal.name}>
      <div className={styles.container}>
        <div className={styles.animalInfo}>
          <div className={styles.image}>
            <img
              src={`http://localhost:3005/getImage/${animal.image}`}
              alt="Loading..."
            />
          </div>
          <div className={styles.info}>
            <div className={styles.species}>
              <div>Вид:</div>
              <p>{animal.species}</p>
            </div>
            <div className={styles.age}>
              <div>Возраст:</div>
              <p>{animal.age}</p>
            </div>
            <div className={styles.gender}>
              <div>Пол:</div>
              <p>{animal.gender}</p>
            </div>
            <div className={styles.date}>
              <div>Дата поступления:</div>
              <p>{animal.date}</p>
            </div>
            <div className={styles.status}>
              <div>Статус:</div>
              <p>{animal.status}</p>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <div>
            <p>{animal.description}</p>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AnimalModalWindow;
