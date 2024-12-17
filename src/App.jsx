import { useState } from "react";
import Header from "./Components/header/Header";
import AnimalList from "./Components/animalsList/AnimalList";

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <AnimalList />
        </div>
      </div>
    </>
  );
}

export default App;
