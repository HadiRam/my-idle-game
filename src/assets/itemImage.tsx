import React, { FC } from 'react'

type ItemImageProps = {
  width: string
  height: string
  image: string
}

export const ItemImage: FC<ItemImageProps> = ({ width, height, image }) => {
  return (
    <img 
      src={image}
      width={width} 
      height={height} 
      alt="Purchase Item"
    />
  )
}

export default ItemImage
