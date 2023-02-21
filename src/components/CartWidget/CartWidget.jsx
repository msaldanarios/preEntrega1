import React from 'react'
import { HiShoppingCart } from 'react-icons/Hi'
import style from './cartwidget.module.css'

const CartWidget = () => {
  return (
    <div className={style.cart}>
      <HiShoppingCart className={style.container}/>
      <div>
        <p className={style.items}>0</p>
      </div>
    </div>
  )
}

export default CartWidget
