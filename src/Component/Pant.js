import React from 'react'
import object from './Object'
import Pantcomp from './Pantcomp'

export default function Pant({addToCart}) {
    let pantdata=object.filter(info=>info.type==="pant")
  return (
     <Pantcomp object={{pantdata,addToCart}}/>
  )
}
