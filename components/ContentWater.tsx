import React from 'react'
import {Water} from '../assets'
import Label from './Label'

function ContentWater() {
  return (
    <>
      <Water height="115" />
      <Label text="1.9" fontSize="large" fontFamily="bold" />
      <Label text="liters" />
    </>
  )
}

export default ContentWater
