import React from 'react'
import Cards from '../../components/Cards/Cards';
import {SHOPCARDS} from '../../data'
import './Shop.scss'

function Shop() {
  return (
    <div className='shop__container'>
      <Cards cards={SHOPCARDS}/>
    </div>
  )
}

export default Shop