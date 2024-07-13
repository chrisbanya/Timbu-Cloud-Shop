import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SearchIcon, LikeIcon, CartIcon } from '../components/SVG'
import Shape from '../assets/shape.png'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const [iconClicked, setIconClicked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (paths) => paths.includes(location.pathname);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '';
        }
    }, [showLinks]);


    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <div className='logo-container'>
                        <img src={Shape} alt="logo" />
                        <span className='logoText'>Just <span className='logoText2'>Shoes</span></span>
                    </div>
                    <button className='nav-toggle'>
                        {showLinks ? <span onClick={toggleLinks}>✕</span> : <div className='DashBtn'><span onClick={() => navigate('/cart')}><CartIcon /></span><span onClick={toggleLinks}>☰</span> </div>}
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>

                    <div className='links' ref={linksRef}>
                        <div className={`link ${isActive(['/', '/cart', '/details']) ? 'active' : ''}`} onClick={() => { navigate('/'); }}>
                            Home
                            {isActive(['/', '/cart', '/details']) && <hr className='active' />}
                        </div>
                        <div className={`link ${isActive(['/shop']) ? 'active' : ''}`} onClick={() => { navigate('/shop'); }}>
                            Shop
                            {isActive(['/shop']) && <hr className='active' />}
                        </div>
                        <div className='link'>
                            Contact
                        </div>
                    </div>
                </div>
                <div className='social-icons'>
                    <div><SearchIcon /></div>
                    <div onClick={() => navigate('/cart')}><CartIcon /></div>
                    <div onClick={() => setIconClicked(!iconClicked)}><LikeIcon iconClicked={iconClicked} /></div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
