import React from 'react';
import {useParams} from "react-router-dom";
import Rating from "react-rating";

const ProductDetails = () => {
    const productMainDetails = [
        {
            head: 'Dedykowany układ graficzny: ',
            headDesc: 'NVIDIA GeForce RTX 3050 Ti Laptop GPU',
        },
        {
            head: 'Pamięć RAM (zainstalowana): ',
            headDesc: '16 GB',
        },
        {
            head: 'Procesor: ',
            headDesc: 'Intel Core i7-11800H',
        },
        {
            head: 'Przekątna ekranu: ',
            headDesc: '15.6"',
        },
        {
            head: 'System operacyjny: ',
            headDesc: 'Windows 10 Home'
        }
    ];

    const productRatings = [
        {
            stars: 5,
            description: 'Jestem bardzo zadowolony z tego sprzętu.'
        },
        {
            stars: 3,
            description: 'Jest ok.'
        }
    ]

    let {product} = useParams();

    let totalRatings = 0;
    productRatings.forEach(({stars}) => totalRatings += stars);
    const averageRating = totalRatings / productRatings.length;


    return (
        <div className="mt-16 flex justify-center font-[Roboto]">
            <div className="grid flex-col w-10/12 justify-center">
                <div className="grid grid-container grid-cols-4 gap-4">
                    <div className="col-span-2 row-span-2">
                        <img src="https://images.morele.net/i1064/9259054_0_i1064.jpg" alt="product"/>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <h1 className="font-normal mt-4 text-3xl mb-4">{product.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</h1>
                        <Rating initialRating={averageRating} readonly stop={6}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
