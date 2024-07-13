import React, { useState } from 'react';
import { BackIcon, BatchIcon, CancelIcon, MinusIcon, PlusIcon } from './SVG';
import '../styles/ItemCardStyle.css';
import { Popular as initialPopular } from '../Data';

const ItemCard = () => {
    const [data, setDate] = useState(initialPopular);

    const handleClick = (id) => {
        // const updatedItems = data.filter(item => item.id !== (id));
        // setDate(updatedItems);
        // console.log(updatedItems);
        console.log(id);
    };

    return (
        <div>
            <div className='itemCardHeader'>
                <BackIcon />
                <span className='itemCardText'>Shopping Cart</span>
                <BatchIcon />
            </div>

            <div className='itemCardContainer'>
                {data?.slice(0, 4).map(({ id, image }) => (
                    <div key={id} className='itemCard'>
                        <img className='itemImage' src={image} alt={`product ${id}`} />
                        <div className='itemDetails'>
                            <div className='itemInfo'>
                                <span className='itemBrand'>Nike</span>
                                <span className='itemName'>AirMax</span>
                                <span className='itemPrice'>N63,999</span>
                                <div className='quantity'>
                                    <span className='plusIcon minusIcon'><MinusIcon /></span>
                                    01
                                    <span className='plusIcon'><PlusIcon /></span>
                                </div>
                            </div>
                            <span onClick={() => handleClick(id)}><CancelIcon /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemCard;
