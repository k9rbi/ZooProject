import styles from "./index.module.scss";

import React from "react";

const AnimalCard = ({ index, setAnimalModalOpen, animal }) => {
  return (
    <div
      key={index}
      className={styles.card}
      onClick={() => setAnimalModalOpen(animal)}
    >
      <div className={styles.imgC}>
        <div
          style={{
            backgroundImage: `url(http://localhost:3005/getImage/${animal.image})`,
          }}
          className={styles.bgImg}
        />

        <img
          src={`http://localhost:3005/getImage/${animal.image}`}
          alt="Load"
        />
      </div>
      <div className={styles.caption}>{animal.name}</div>
      <div className={styles.description}>{animal.description}</div>
    </div>
  );
};

export default AnimalCard;
