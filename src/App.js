import React, { useState , useRef, useEffect} from "react";
import Raidpicker from "./Raidpicker";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [raids, addRaids,] = useState([{id:uuidv4() , name: 'Kingsfall'},{id:uuidv4() , name: 'Vow of the Disciple'},{id:uuidv4() , name: 'Deep Stone Crypt'},{id:uuidv4() , name: 'Last Wish'},{id:uuidv4() , name: 'Garden of Salvation'},{id:uuidv4() , name: 'Vault of Glass'}]);



  function handleChooseRaid(){
    let chosenRaid = raids[getRandomInt(raids.length)]
      addRaids(prevRaids =>{
        return [...prevRaids]
      }) 
      toast(chosenRaid.name)
  }

  function getRandomInt(max){
    return Math.floor(Math.random() * max)
  }


  return (
    <div>
    <Raidpicker raids = { raids } />
    <button onClick={handleChooseRaid}>choose Raid</button>
    <ToastContainer/>
    </div>
  )
}

export default App;
