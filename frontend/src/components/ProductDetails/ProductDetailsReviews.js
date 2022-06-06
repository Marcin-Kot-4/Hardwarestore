import React from 'react';
import {Rating} from "@mui/material";

const ProductDetailsReviews = (props) => {

    return (
        <div id="Opinie" className="my-24 flex justify-center font-[Roboto]">
            <div className="flex-col w-10/12 justify-start">
                <h1 className="text-2xl font-semibold pb-8">Opinie</h1>
                <div className="items-center flex-col w-full flex mb-8">
                    <div>
                        <h1 className="text-5xl inline">{props.averageRating.toString().replace('.', ',')}</h1>
                        <h1 className="inline text-gray-500">/6</h1>
                    </div>
                    <div></div>
                    <Rating value={props.averageRating} readOnly precision={0.1} max={6} size="large"/>
                    <h2 className="text-sm text-gray-500">({props.productReviews.length} opinie)</h2>
                </div>
                {
                    props.productReviews.map((productReview) => (
                        <div className="border-t-2 flex-col pt-1">
                            <h1 className="flex w-3/12 text-sm justify-center font-light inline-flex">{productReview.userName}</h1>
                            <div className="w-9/12 inline-flex flex-col pt-1">
                                <Rating value={productReview.stars} readOnly precision={0.1} max={6} size="small"/>
                                <h1 className="pt-3 text-sm font-normal pb-1">{productReview.description}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductDetailsReviews;
