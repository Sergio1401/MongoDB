import React from 'react'
import './vehicle.css'
import { Link } from "react-router-dom"

function VehicleView({vehicle}) {
  return (
    <div className='container-header'>
        <h1>{vehicle.name}</h1>
        <h2>{vehicle.description}</h2>
        <img src={vehicle.image} alt={vehicle.name + " imagen"} />
        <button>
        <a href="/" style={{color: "white"}}>Menu</a>
        </button>
        
    </div>
  )
}

export default VehicleView
