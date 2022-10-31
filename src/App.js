import React, { useState } from "react";
import Raidpicker from "./Raidpicker";
import Dungeonpicker from "./Dungeonpicker";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [raids, addRaids] = useState([
    { id: uuidv4(), name: "Kingsfall" },
    { id: uuidv4(), name: "Vow of the Disciple" },
    { id: uuidv4(), name: "Deep Stone Crypt" },
    { id: uuidv4(), name: "Last Wish" },
    { id: uuidv4(), name: "Garden of Salvation" },
    { id: uuidv4(), name: "Vault of Glass" },
  ]);

  const [dungeons, addDungeons] = useState([
    { id: uuidv4(), name: "Shattered Throne" },
    { id: uuidv4(), name: "Pit of Heresy" },
    { id: uuidv4(), name: "Prophecy" },
    { id: uuidv4(), name: "Grasp of Avarice" },
    { id: uuidv4(), name: "Duality" },
  ]);

  function handleChooseRaid() {
    let chosenRaid = raids[getRandomInt(raids.length)];
    addRaids((prevRaids) => {
      return [...prevRaids];
    });
    toast(chosenRaid.name);
  }

  function handleChooseDungeon() {
    let chosenDungeon = dungeons[getRandomInt(dungeons.length)];
    addDungeons((prevDungeon) => {
      return [...prevDungeon];
    });
    toast(chosenDungeon.name);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      <div>
        <Raidpicker raids={raids} />
        <button onClick={handleChooseRaid}>choose Raid</button>
      </div>
      <div>
        <Dungeonpicker dungeons={dungeons} />
        <button onClick={handleChooseDungeon}> choose Dungeon </button>
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
