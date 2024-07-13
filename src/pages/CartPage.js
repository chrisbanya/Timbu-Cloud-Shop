import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Cart.css'
import PaymentModal from '../components/PaymentModal'
import ItemCard from '../components/ItemCard'
import TotalCard from '../components/TotalCard'

const CartPage = () => {
  return (
    <>
      <NavBar />
      <div className='shoppingCartWrapper'>
        <div className='shoppingCartContainer'>
          <ItemCard />
          <TotalCard />
        </div>
        <PaymentModal />
      </div>
    </>
  )
}

export default CartPage
