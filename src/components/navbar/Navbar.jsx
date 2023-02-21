import React from 'react'
import Button from '../button/Button'
import CartWidget from '../CartWidget/CartWidget'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.container}>
      <h1>Mosita Clothes</h1>
      <Button txtBtn='Home'/>
      <Button txtBtn='About'/>
      <Button txtBtn='Contact us'/>
      <CartWidget />
    </nav>
  )
}

export default Navbar
