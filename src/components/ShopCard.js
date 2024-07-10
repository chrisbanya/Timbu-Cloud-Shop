import React from 'react'
import '../styles/ShopCard.css'
import { ArrowRight, LikeIcon } from './SVG'
import { useNavigate } from 'react-router-dom'

const ShopCard = ({ Popular, Both }) => {
    const navigate = useNavigate();
    return (
        <div className='shop-card-container'>
            <div className='shop-card'>
                {Popular?.map(({ id, name, brand, backgroundColor, price, image }) =>
                    <div onClick={() => navigate('/details')} key={id} className='card' style={{ backgroundColor: backgroundColor }}>
                        <div className='productInfo'>
                            <span className='product-brand'>{brand}</span>
                            <span className='product-name'>{name}</span>
                            <span className='product-price'>N{price}</span>
                        </div>
                        <div className='product-icons'>
                            <LikeIcon />
                            <img className='productImage' src={image} alt={`product ${id}`} />
                            <ArrowRight />
                        </div>
                    </div>
                )}

                {Both?.map(({ id, name, brand, backgroundColor, price, image }) =>
                    <div onClick={() => navigate('/details')} key={id} className='card' style={{ backgroundColor: backgroundColor }}>
                        <div className='productInfo'>
                            <span className='product-brand'>{brand}</span>
                            <span className='product-name'>{name}</span>
                            <span className='product-price'>N{price}</span>
                        </div>
                        <div className='product-icons'>
                            <LikeIcon />
                            <img className='productImage' src={image} alt={`product ${id}`} />
                            <ArrowRight />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShopCard
