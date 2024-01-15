import React, { FC } from 'react'
import engineerImage from './imgs/pixil-frame-0.png'

type SweEngineerProps = {
  width: string
  height: string
}

export const SweEngineer: FC<SweEngineerProps> = ({ width, height }) => {
  return (
    <img 
      src={engineerImage}
      width={width} 
      height={height} 
      alt="Software Engineer"
    />
  )
}

export default SweEngineer
