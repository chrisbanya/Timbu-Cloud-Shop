import React, { useState } from 'react'
import { CheckedIcon, UnCheckedIcon } from './SVG'
import '../styles/TotalCardStyle.css'

const TotalCard = () => {

  return (
    <div className='totalCardWrapper'>
      <div className='totalCard'>
        <div className='total'>
          <span className='totalInfo'><CheckedIcon />Sub total:</span>
          <span className='prices'>N60, 000</span>
        </div>
        <div className='total'>
          <span className='totalInfo'><CheckedIcon />VAT:</span>
          <span className='prices'>N999</span>
        </div>
        <div className='total'>
          <span className='totalInfo'><UnCheckedIcon />Delivery:</span>
          <span className='price'>N3,000</span>
        </div>
        <div className='totalItems'>
          <span className='totalInfo text'>TOTAL:</span>
          <span className='otherPrice'>N60, 999</span>
        </div>
      </div>
    </div>
  )
}

export default TotalCard; 