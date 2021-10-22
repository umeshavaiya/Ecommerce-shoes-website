import React from 'react'
import './HomeShoesDetails.css'
import HomeDetailsShoes from '../../images/running shoes.png'

function HomeShoesDetails() {
    return (
        <div className="details__container">
            <div className="homeImage__details">
                <div className='BackgroundFilter'>
                </div>
            </div>
            <div className='running__shoes'>
                <img className="imgflow" src={HomeDetailsShoes} alt="Home shose" />
                <div className="shoes__circle"></div>
            </div>
        </div>
    )
}

export default HomeShoesDetails