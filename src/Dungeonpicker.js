import React from 'react'
import Dungeons from './Dungeons'

export default function Dungeonpicker({dungeons}) {
  return (
    dungeons.map(dungeon =>{
        return <Dungeons key = {dungeon.id} dungeon ={dungeon}/>
      })
  )
}
