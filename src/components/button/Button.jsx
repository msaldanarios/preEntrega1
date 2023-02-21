import React from 'react'
import style from './button.module.css'

const Button = ({txtBtn}) => {
  const handleClick = () => {
    alert("We are working on it!")
  }

  return (
    <button onClick={handleClick} className={style.container}>{txtBtn}</button>
  )
}

export default Button
