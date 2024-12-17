import React from "react";
import styles from "./index.module.scss";
import logoHeader from "../../assets/kandinsky-download-1734422869924.png";
import {
  Icon20InfoCircleOutline,
  Icon20UserAddOutline,
  Icon28AddCircleFillBlue,
} from "@vkontakte/icons";
import { Bear } from "../../svg/Bear";
import { DogLegg } from "../../svg/DogLegg";
import { AddButton } from "../../svg/AddButton";

const Header = () => {
  const arrButton = [
    { title: "Зверюшки", icon: <DogLegg width={24} height={24} /> },
    { title: "О нас", icon: <Icon20InfoCircleOutline /> },
    { title: "Контакты", icon: <Icon20UserAddOutline /> },
  ];
  return (
    <div className={styles.container}>
      <img src={logoHeader} />
      <div className={styles.headerMenu}>
        <div className={styles.addButton}>
          <button>
            <AddButton width={48} />
          </button>
        </div>

        <div className={styles.mainMenu}>
          {arrButton.map((button, index) => (
            <button key={index}>
              {button.icon}
              <p>{button.title}</p>
            </button>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
