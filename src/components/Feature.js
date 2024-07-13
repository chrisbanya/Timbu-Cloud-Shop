import React from 'react'
import FeatureImage from '../assets/shoe1.png'
import ShadowImage from '../assets/shadow.png'
import { useNavigate } from 'react-router-dom'

const Feature = () => {
    const navigate = useNavigate();

    return (
        <div className='feature'>
            <div className='feature-container'>
                <div className='textContainer'>
                    <h1>Upgrade Your <br />Collections</h1>
                    <p>Sum extra dummy text goes here like so.</p>
                    <button className='btn' onClick={() => navigate('/shop')}>Shop Now</button>
                </div>
                <div className='feature-image'>
                    <img src={FeatureImage} alt='feature-image' />
                    <img className='shadow-image' src={ShadowImage} alt='shadow' />
                </div>
            </div>
        </div>
    )
}

export default Feature;
