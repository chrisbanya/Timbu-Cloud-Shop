import React from 'react'
import '../styles/Contact.css';
const Contact = () => {
    return (
    
            <div className='contactUs'>
                <p>Contact Us</p>
            
            <div className='contactContainer'>
                <div className='contactWrapper'>
                    <div className='inputInfo'>
                        <label for="name">Your Name</label>
                        <input className='inputBox' type="text" id="name" name="name" />
                    </div>
                    <div className='inputInfo'>
                        <label for="email">Your Email</label>
                        <input className='inputBox' type="email" id="email" />
                    </div>

                </div>
                <div className='messageWrapper'>

                    <label for="message">Message</label>
                    <textarea id="message" className='inputBox' resize={false} cols="60" rows="10" name="message" />
                    <button className='submitBtn'>Submit Message</button>

                </div>
            </div>

        </div>
    )
}

export default Contact
