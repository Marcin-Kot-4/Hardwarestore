import React from 'react';

const ProductDetailsSpecification = (props) => {
    return (
        <div id="Specyfikacja" className="mt-12 flex justify-center font-[Roboto]">
            <div className="flex-col w-10/12 justify-start">
                <h1 className="text-2xl font-semibold pb-4">Specyfikacja</h1>
                {
                    props.productSpecification.map((specification) => (
                        <div className="border-t-2 border-gray-100 py-1">
                            <h1 className="font-medium inline-flex pl-12 w-4/12">{specification.header}</h1>
                            <h1 className="font-light inline-flex w-8/12">{specification.content}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductDetailsSpecification;
