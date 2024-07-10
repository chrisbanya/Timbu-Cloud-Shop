import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SearchIcon, LikeIcon, CartIcon } from '../components/SVG'
import Shape from '../assets/shape.png'

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);
    const [iconClicked, setIconClicked] = useState(false);

    // const isActive = (path) => location.pathname.includes(path);
    const isActive = (paths) => paths.includes(location.pathname);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='navbar'>
            <div className='logo-container'>
                <div>
                    <img src={Shape} alt="logo" />
                    <span className='logoText'>Just <span className='logoText2'>Shoes</span></span>
                </div>
            </div>
            {isMobile ? (
                <div className='mobile-menu-icon' onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </div>
            ) : (
                <>
                    <div className='links'>
                        <div className={`link ${isActive(['/', '/cart', '/details']) ? 'active' : ''}`} onClick={() => { navigate('/'); setIsOpen(false); }}>
                            Home
                            {isActive(['/', '/cart', '/details']) && <hr className='active' />}
                        </div>
                        <div className={`link ${isActive(['/shop']) ? 'active' : ''}`} onClick={() => { navigate('/shop'); setIsOpen(false); }}>
                            Shop
                            {isActive(['/shop']) && <hr className='active' />}
                        </div>
                        <div className={`link ${isActive(['/contact']) ? 'active' : ''}`} onClick={() => { navigate('/contact'); setIsOpen(false); }}>
                            Contact
                            {isActive(['/contact']) && <hr className='active' />}
                        </div>
                    </div>

                    <div className='icons'>
                        <div><SearchIcon /></div>
                        <div onClick={() => navigate('/cart')}><CartIcon /></div>
                        <div onClick={() => setIconClicked(!iconClicked)}><LikeIcon iconClicked={iconClicked} /></div>
                    </div>
                </>
            )}
            {isMobile && isOpen && (
                <div className='mobile-links'>
                    <div className={`link ${isActive('/') ? 'active' : ''}`} onClick={() => { navigate('/'); setIsOpen(false); }}>
                        Home
                        {isActive('/') && <hr className='active' />}
                    </div>
                    <div className={`link ${isActive('/shop') ? 'active' : ''}`} onClick={() => { navigate('/shop'); setIsOpen(false); }}>
                        Shop
                        {isActive('/shop') && <hr className='active' />}
                    </div>
                    <div className={`link ${isActive('/contact') ? 'active' : ''}`} onClick={() => { navigate('/contact'); setIsOpen(false); }}>
                        Contact
                        {isActive('/contact') && <hr className='active' />}
                    </div>
                </div>
            )}

        </div>
    )
}

export default NavBar
