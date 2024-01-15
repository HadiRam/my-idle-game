import React, { FC } from 'react'
import classes from './button.module.scss'
import { SweEngineer } from '../../assets/sweEngineer'

type ButtonProps = {
    label: string;
    onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  
  return (
    <button className={classes.video_game_button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
