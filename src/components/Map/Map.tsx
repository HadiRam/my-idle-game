import React from 'react'
import classes from './map.module.scss' // Assuming you're using CSS Modules

interface MapProps {
    onSquareClick?: (squareId: number) => void;
    squares: number; // Number of squares in the map
}

export const Map: React.FC<MapProps> = ({ onSquareClick, squares }) => {
  const squareElements = Array.from({ length: squares }, (_, index) => (
    <div key={index} className={classes.square}></div>
  ))

  return <div className={classes.map}>{squareElements}</div>
}

export default Map
