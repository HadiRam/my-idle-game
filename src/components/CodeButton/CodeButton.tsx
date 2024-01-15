import React from 'react'
import classes from './codebutton.module.scss' // CSS file for styling
import CodeButtonImage from '../../assets/codeButtonImg' // Import the CodeButtonImage component

export const CodeButton = () => {
  return (
    <button
      className={classes.code_button}>
      <CodeButtonImage width={'350'} height={'300'} />
    </button>
  )
}