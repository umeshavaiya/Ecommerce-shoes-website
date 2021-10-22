import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import orangeShoes from '../../images/orange.png'
import './CarouselShoes.css'


function CarouselShoes() {
    return (
        <div className='main'>
            <div>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    dots={true}
                    showSides={true}
                    // sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                </InfiniteCarousel>
            </div>
        </div>
    )
}

export default CarouselShoes
