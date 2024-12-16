import React from "react";
import styles from "./index.module.scss";

const Header = () => {
  return (
    
    <div className={styles.container}>
      <button>Зверюшки</button>
      <button>О нас</button>
      <button>Контакты</button>
    </div>
  );
};

export default Header;
