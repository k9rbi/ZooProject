import React from "react";
import styles from "./index.module.scss";
import { Icon28CancelCircleFillRed } from "@vkontakte/icons";
import { ModalContainer } from "../ui/modal/ModalContainer";
import { UpLoadImage } from "../upLoadImage/UpLoadImage";

const AddAnimalWindow = ({ setClose, open }) => {
  return (
    <ModalContainer
      setClose={setClose}
      open={open}
      headerName={"Добавить зверюшку"}
    >
      <div className={styles.conteiner}>
        <UpLoadImage />
        <div className={styles.inputs}>
          <input placeholder="Кличка" />
          <input type="date" placeholder="Дата поступления" />
          <input placeholder="Статус" />
          <textarea name="Описание животного"></textarea>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddAnimalWindow;
