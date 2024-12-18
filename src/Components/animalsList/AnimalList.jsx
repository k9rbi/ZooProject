import React, { useState } from "react";
import styles from "./index.module.scss";
import AnimalModalWindow from "../animalModalWindow/AnimalModalWindow";
import { div } from "framer-motion/client";
import AnimalCard from "../animalСard/AnimalCard";

const AnimalList = () => {
  const [animalModalOpen, setAnimalModalOpen] = useState(null);
  return (
    <>
      {animalModalOpen && (
        <AnimalModalWindow
          setClose={setAnimalModalOpen}
          index={animalModalOpen}
        />
      )}
      <div className={styles.list}>
        {Array(50)
          .fill(null)
          .map((_, index) => (
            <AnimalCard index={index} setAnimalModalOpen={setAnimalModalOpen} />
          ))}
      </div>
    </>
  );
};

export default AnimalList;
