import React from 'react'
import NavBar from '../components/NavBar'
import ShopCard from '../components/ShopCard'
import ShopCategory from '../components/ShopCategory'
import ShopCategoryTwo from '../components/ShopCategoryTwo'
import { Popular, Both } from '../Data'

const Shop = () => {
  return (
    <div>
      <NavBar />
      <ShopCategory />
      <ShopCard Popular={Popular} />
      <ShopCategoryTwo />
      <ShopCard Both={Both} />
    </div>
  )
}

export default Shop
