import React from 'react'
import object from './Object'
import Shirtcomp from './Shirtcomp'

export default function Shirt({addToCart}) {
    let shirtdata=object.filter(info=>info.type==="shirt")
  return (
    <Shirtcomp object={{shirtdata,addToCart}}/>
  )
}
