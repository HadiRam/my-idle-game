import React, { FC } from 'react'
import classes from './button.module.scss'

type ButtonProps = {
    label: string;
    onClick: any;
};

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  
  return (
    <button className={classes.video_game_button} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
