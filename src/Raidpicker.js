import React from 'react'
import Raids from './Raids'

export default function raidpicker({raids}) {
  return (
      raids.map(raid =>{
        return <Raids key = {raid.id} raid ={raid}/>
      })
  )
}
