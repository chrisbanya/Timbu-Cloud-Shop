import React, { useEffect, useState } from 'react';
import '../styles/ShopCard.css';
import { ArrowRight, LikeIcon } from './SVG';
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ Popular, Both }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const apiId = process.env.REACT_APP_API_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
    const orgId = process.env.REACT_APP_ORG_ID;

    useEffect(() => {
        const fetchData = async () => {
            const url = `${apiUrl}/products?organization_id=${orgId}&Appid=${apiId}&Apikey=${apiKey}`;
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.items);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='shop-card-container'>
            <div className='shop-card'>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {currentItems.map(({ id, name, photos }) => (
                    <div onClick={() => navigate('/details')} key={id} className='card' style={{ backgroundColor: 'blue' }}>
                        <div className='productInfo'>
                            <span className='product-brand'>Nike</span>
                            <span className='product-name'>{name}</span>
                            <span className='product-price'>N</span>
                        </div>
                        <div className='product-icons'>
                            <LikeIcon />
                            {photos.map(({ url }) =>
                                <img className='productImage' src={`${apiUrl}/images/${url}`} alt={`product ${id}`} />
                            )}
                            <ArrowRight />
                        </div>
                    </div>
                ))}
                {Both?.map(({ id, name, brand, backgroundColor, price, image }) => (
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
                ))}
            </div>
            <div className='pagination'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)} className='pagination-btn'>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ShopCard;











//STOP
// import React, { useEffect, useState } from 'react'
// import '../styles/ShopCard.css'
// import { ArrowRight, LikeIcon } from './SVG'
// import { useNavigate } from 'react-router-dom'

// const ShopCard = ({ Popular, Both }) => {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//     const [error, setError] = useState('');
//     const apiUrl = process.env.REACT_APP_API_BASE_URL;
//     const apiId = process.env.REACT_APP_API_ID;
//     const apiKey = process.env.REACT_APP_API_KEY;
//     const orgId = process.env.REACT_APP_ORG_ID;


//     useEffect(() => {
//         const fetchData = async () => {
//             const url = `${apiUrl}/products?organization_id=${orgId}&Appid=${apiId}&Apikey=${apiKey}`
//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();
//                 setData(result.items);
//                 console.log(result)
//                 setLoading(false);
//             } catch (error) {
//                 setError('Error fetching data');
//                 setLoading(false);
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='shop-card-container'>
//             <div className='shop-card'>
//                 {data?.map(({ id, name, photos }) => {
//                     return (
//                         <div onClick={() => navigate('/details')} key={id} className='card' style={{ backgroundColor: 'blue' }}>
//                             <div className='productInfo'>
//                                 <span className='product-brand'>Nike</span>
//                                 <span className='product-name'>{name}</span>
//                                 <span className='product-price'>N</span>
//                             </div>
//                             <div className='product-icons'>
//                                 <LikeIcon />
//                                 {photos.map(({ url }) =>
//                                     <img className='productImage' src={`${apiUrl}/images/${url}`} alt={`product ${id}`} />
//                                 )}
//                                 <ArrowRight />
//                             </div>
//                         </div>
//                     )

//                 })}
                {/* {Popular?.map(({ id, name, brand, backgroundColor, price, image }) =>
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
                )} */} 
                 

                {/* {Both?.map(({ id, name, brand, backgroundColor, price, image }) =>
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

export default ShopCard */}

