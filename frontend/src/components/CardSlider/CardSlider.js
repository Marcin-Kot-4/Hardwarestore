import React from 'react';
import './CardSlider.css';
// import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const CardSlider = (props) => {
    const sliderClick = () => {
        return 0;
    }

    const slides = [
        {
            image: "https://images.morele.net/i1064/5943414_1_i1064.jpg",
            title: "Samsung 870 QVO 8 TB",
            description: "3 189",
            clickEvent: sliderClick
        },
        {
            image: "https://images.morele.net/i1064/5948060_0_i1064.jpg",
            title: "MSI GeForce RTX 3070 Ti",
            description: "399",
            clickEvent: sliderClick
        },
        {
            image: "https://images.morele.net/i1064/5940924_9_i1064.jpg",
            title: "Razer Viper Ultimate",
            description: "671",
            clickEvent: sliderClick
        },
        {
            image: "https://images.morele.net/i1064/4073823_8_i1064.jpg",
            title: "be quiet! Dark Rock 4 Pro",
            description: "387",
            clickEvent: sliderClick
        },
        {
            image: "https://images.morele.net/i1064/6535085_0_i1064.jpg",
            title: "Nzxt Kraken Z73",
            description: "1 299",
            clickEvent: sliderClick
        },
        {
            image: "https://images.morele.net/i1064/852848_3_i1064.jpeg",
            title: "Beyerdynamic DT 1770 Pro",
            description: "2 039",
            clickEvent: sliderClick
        },
        {
            image: "https://images.morele.net/i1064/6407125_1_i1064.jpg",
            title: "Asus RT-AX56U",
            description: "519",
            clickEvent: sliderClick
        },
        {
            image: "https://images.morele.net/i1064/8408208_3_i1064.jpg",
            title: "Dell Alienware AW3821DW",
            description: "6 545,84",
            clickEvent: sliderClick
        },
    ]

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <div className="mt-28">
            <h1 className="text-center text-3xl font-bold mb-20">Bestsellery</h1>
            <div className="flex w-10/12 mx-auto mt-16" id="main-slider-container">
            <span className="text-3xl slider-icon left">
                <ion-icon name="chevron-back" onClick={slideRight}></ion-icon>
            </span>
                <div id="slider">
                    {
                        slides.map((slide, index) => {
                            return (
                                <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                    <div className="slider-card-image m-auto"
                                         style={{
                                             backgroundImage: `url(${slide.image})`,
                                             backgroundSize: 'contain',
                                             backgroundRepeat: 'no-repeat',
                                             backgroundPosition: 'center'
                                         }}></div>
                                    <p className="mt-1 ml-1 font-light">{slide.title}</p>
                                    <p className="ml-1 font-light">{slide.description} zł</p>
                                </div>
                            )
                        })
                    }
                </div>
                <span className="text-3xl slider-icon right">
                <ion-icon name="chevron-forward" onClick={slideLeft}></ion-icon>
            </span>
            </div>
        </div>
    )
}
export default CardSlider;
