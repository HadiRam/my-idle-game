import React, { FC, useState } from 'react'
import SweEngineer from '../../assets/sweEngineer'
import Button from '../Buttons/Button'
import classes from './item.module.scss'

type NewComponentProps = {
  title: string;
}

export const Item: FC<NewComponentProps> = ({ title }) => {

  return (
    <div className={classes.item}>
      <h2 className={classes.item_title}>{title}</h2>
      <SweEngineer width='110px' height='110px' />
      <Button label='code' onClick={() => console.log('hi')} />
    </div>
  )
}

export default Item