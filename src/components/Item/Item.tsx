import { FC } from 'react'
import { ItemImage,  } from '../../assets/itemImage'
import Button from '../Buttons/Button'
import classes from './item.module.scss'

type ItemProps = {
  title: string
  image: string
}

export const Item: FC<ItemProps> = ({ title, image }) => {

  return (
    <div className={classes.item}>
      <h2 className={classes.item_title}>{title}</h2>
      <ItemImage width='110px' height='110px' image={image}/>
      <Button label='Buy' onClick={() => console.log('hi')} />
    </div>
  )
}

export default Item