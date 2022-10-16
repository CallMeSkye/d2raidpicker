import React, { useState , useRef, useEffect} from "react";
import Raidpicker from "./Raidpicker";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'raidApp.raids'

function App() {
  const [raids, addRaids] = useState([]);
  const raidRef = useRef();

  useEffect(() => {
    const storedRaids = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    addRaids(storedRaids)
  }, [])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(raids))
  }, [raids])

  function handleAddRaid(e) {
    const raid = raidRef.current.value
    if( raid === '') return console.error('invalid Name');
    addRaids( prevRaids =>{
      return [...prevRaids, {id: uuidv4(), name: raid }]
    })
    raidRef.current.value = null
  }

  return (
    <>
    <Raidpicker raids = { raids } />
    <input ref={raidRef} type = 'text'></input>
    <button onClick={handleAddRaid}>add raid</button>
    <button>chooseraid</button>
    </>
  )
}

export default App;
