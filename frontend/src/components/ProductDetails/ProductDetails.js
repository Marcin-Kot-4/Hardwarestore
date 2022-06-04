import React from 'react';
import {useParams} from "react-router-dom";

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
            Stars: 5,
            Description: 'Jestem bardzo zadowolony z tego sprzętu.'
        },
        {
            Stars: 3,
            Description: 'Jest ok.'
        }
    ]

    let {product} = useParams();

    return (
        <div className="mt-16 flex justify-center font-[Roboto]">
            <div className="grid flex-col w-10/12 justify-center">
                <div className="grid grid-container grid-cols-4 gap-4">
                    <div className="col-span-2 row-span-2">
                        <img src="https://images.morele.net/i1064/9259054_0_i1064.jpg" alt="product"/>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <h1 className="font-normal mt-4 text-3xl mb-4">{product.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
