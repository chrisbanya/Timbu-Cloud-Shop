import React, { useState } from 'react'
import '../styles/DetailsCard.css'
import { AddIcon, CartIconsvg, MdIcon, LgIcon, XlIcon, XxlIcon, ArrowRight, LikeIcon } from './SVG'
import { ButtonText } from './SVG'
import { useNavigate } from 'react-router-dom'
import { Popular } from '../Data'

const DetailsCard = () => {
    const navigate = useNavigate();
    const [productID, setProductID] = useState(0);


    const handleClick = (id) => {
        console.log(id)
        setProductID(id);
    }
    const firstItem = Popular?.[productID];
    return (
        <div>
        <div className='shop-card-container'>
            <div>
                {firstItem && (
                    <div onClick={() => navigate('/details')} key={firstItem.id} className='cards firstItem' style={{ backgroundColor: firstItem.backgroundColor }}>
                        <div className='productInfo'>
                            <span className='product-brand'>{firstItem.brand}</span>
                            <span className='product-name'>{firstItem.name}</span>
                            <span className='product-brand'>Both</span>
                        </div>
                        <div className='product-icons'>
                            <LikeIcon />
                            <img className='productImage' src={firstItem.image} alt={`product ${firstItem.id}`} />
                            <span className='product-price'>N63, 999</span>
                        </div>
                    </div>
                )}
            </div>
            <div className='shop-cards'>
                {Popular?.map(({ id, name, brand, backgroundColor, price, image }) =>
                    <div onClick={() => handleClick(id)} key={id} className='cards card' style={{ backgroundColor: backgroundColor }}>
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
        <div className='detailsIcons'>
                <div className='sizeIcon'>
                    <span><ButtonText /></span>
                    <span><MdIcon /></span>
                    <span><LgIcon /></span>
                    <span><XlIcon /></span>
                    <span><XxlIcon /></span>
                </div>
                <div className='addCartIcon'>
                    <span><AddIcon /></span>
                    <span><CartIconsvg /></span>
                </div>
            </div>
        </div>
    
    )
}

export default DetailsCard
