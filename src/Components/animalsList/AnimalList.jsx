import React from "react";
import styles from "./index.module.scss";

const AnimalList = () => {
  return (
    <div className={styles.list}>
      {Array(50)
        .fill(null)
        .map((_, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgC}>
              <img src="https://steamuserimages-a.akamaihd.net/ugc/1876337554557461496/1E9DFA017A38A15A1D01A1FFA9402FC02EA6BCA4/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" />
            </div>
            <div className={styles.caption}>Имя животинки</div>
            <div className={styles.description}>
              Что-то о животинке, её вес, рост, возраст, привычки, группа крови
              на рукаве мой порядковый
            </div>
            <div></div>
          </div>
        ))}
    </div>
  );
};

export default AnimalList;
