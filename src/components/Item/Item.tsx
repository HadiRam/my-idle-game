import React, { FC } from 'react'
import SweEngineer from '../../assets/sweEngineer'
import Button from '../Buttons/Button'
import classes from './item.module.scss'

type NewComponentProps = {
  title: string;
}

export const Item: FC<NewComponentProps> = ({ title }) => {
  const handleClick = () => {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random()

    // 25% chance to log "This code failed"
    if (randomNumber < 0.10) {
      console.log('This code sadly failed')
    } else {
      console.log('code sucessfully coded')
    }
  }

  return (
    <div className={classes.item}>
      <h2 className={classes.item_title}>{title}</h2>
      <SweEngineer width='110px' height='110px' />
      <Button label='code' onClick={() => handleClick() }/>
    </div>
  )
}

export default Item
