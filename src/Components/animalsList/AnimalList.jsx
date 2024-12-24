import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import AnimalModalWindow from "../animalModalWindow/AnimalModalWindow";
import AnimalCard from "../animalСard/AnimalCard";
import axios from "axios";

const AnimalList = () => {
  const [animalModalOpen, setAnimalModalOpen] = useState(null);
  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const resData = await axios.get("/api/getAnimals");
        setAnimalList(resData.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAnimals();
  }, []);

  return (
    <>
      {animalModalOpen && (
        <AnimalModalWindow
          setClose={setAnimalModalOpen}
          open={animalModalOpen}
          animal={animalModalOpen}
        />
      )}
      <div className={styles.list}>
        {animalList &&
          animalList.map((animal, index) => (
            <AnimalCard
              index={index}
              setAnimalModalOpen={setAnimalModalOpen}
              animal={animal}
            />
          ))}
      </div>
    </>
  );
};

export default AnimalList;
