import React, { FC } from 'react'
import codeButtonImage from './imgs/codeButton.png'

type CodeButtonProps = {
  width: string
  height: string
}

export const CodeButtonImage: FC<CodeButtonProps> = ({ width, height }) => {
  return (
    <img 
      src={codeButtonImage}
      width={width} 
      height={height} 
      alt="Code Button"
    />
  )
}

export default CodeButtonImage
