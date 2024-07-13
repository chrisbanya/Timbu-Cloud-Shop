// import react from 'react'
import myImage from '../assets/Image (3).png';
import '../styles/SuccessCard.css'


const SuccessCard = () => {
  return (
    <>
      <div>
        <div className='successCardContainer'>
          <img src={myImage} alt="thumbsUpEmoji" className='thumbEmoji' />
          <h2>Successful</h2>
          <h3>Thanks for shopping with us</h3>
          <button className='exploreBtn'>Explore More</button>
        </div>
      </div>
    </>
  );
}

export default SuccessCard;