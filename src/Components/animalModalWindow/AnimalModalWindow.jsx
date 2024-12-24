import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";
import useCount from "../../hooks/useCount";

const AnimalModalWindow = ({ setClose, open, animal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const clickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setClose(null);
        console.log(open);
      }
    };
    window.addEventListener("mouseup", clickOutside);
    return () => {
      window.removeEventListener("mouseup", clickOutside);
    };
  }, [setClose]);

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

  return (
    <div className={styles.bg}>
      <div ref={modalRef} className={styles.Window}>
        <div className={styles.Header}>
          <div className={styles.name}>{animal.name}</div>
          <button onClick={() => setClose(null)}>
            <Icon28CancelCircleFillRed />
          </button>
        </div>
        <div className={styles.content}>
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
          <div>Описание</div>
          <p>{animal.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalModalWindow;
