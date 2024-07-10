import React from 'react';
import '../styles/PaymentModalStyle.css'; 
import { useNavigate } from 'react-router-dom';


const PaymentModal = () => {
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/Success');
    };
    return (
        <div className='paymentDetailsWrapper'>
            <span><h2>Payment Info</h2></span>
            <div className='radioWrapper'>
                <h3 className='header-text'>Choose Payment Method</h3>
                <div className='radioContainer'>
                    <div className='inputWrapper'>
                        <input type="radio" className='radioInput' id="Verve" name="paymentMethod" />
                        <input type="radio" className='radioInput' id="MasterCard" name="paymentMethod" defaultChecked />
                        <input type="radio" className='radioInput' id="Visa" name="paymentMethod" />
                    </div>
                    <div className='labelWrapper'>
                        <label htmlFor="Verve">Verve</label>
                        <label htmlFor="MasterCard">MasterCard</label>
                        <label htmlFor="Visa">Visa</label>
                    </div>
                </div>
            </div>
            <div className='cardHolderInput'>
                <label htmlFor="CardHolder">Card Holder Name</label>
                <input type="text" className="cardInput" />
            </div>
            <div className='cardHolderInput'>
                <label htmlFor="CardNumber">Card Number</label>
                <input type="text" pattern="\d{1,12}" maxLength={12} className="cardInput" />
            </div>
            <div className='expCvContainer'>
                <div className='labelContainer'>
                    <label htmlFor="ExpiryDate" className='header-text'>Expiry Date</label>
                    <input type="text" pattern="\d{1,5}" maxLength={5} className="expiryInput" />
                </div>
                <div className='labelContainer'>
                    <label htmlFor="Cv" className='header-text'>CV</label>
                    <input type="text" pattern="\d{1,3}" maxLength={3} className="cvInput" />
                </div>
            </div>
            <div>
                <button className='submit-btn' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default PaymentModal;
