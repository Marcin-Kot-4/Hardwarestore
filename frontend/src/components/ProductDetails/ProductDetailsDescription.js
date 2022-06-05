import React from 'react';

const ProductDetailsDescription = (props) => {
    return (
        <div id="Opis" className="mt-8 flex justify-center font-[Roboto]">
            <div className="flex-col w-10/12 justify-start">
                <h1 className="text-2xl font-semibold pb-16">Opis produktu</h1>
                {
                    props.productDescription.map((productDescription) => (
                        <>
                            <h1 className="text-center text-3xl font-semibold pb-4">{productDescription.header}</h1>
                            <h2 className="pb-4">{productDescription.content}</h2>
                            <img className="mx-auto pb-12" src={productDescription.image} alt=""/>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductDetailsDescription;
