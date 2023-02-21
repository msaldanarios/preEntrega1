import React from 'react'
import style from './itemListContainer.module.css'


const ItemListContainer = ( {greeting} ) => {
  return (
    <div  className={style.container}>
      <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
