import React from 'react';

const ProductDetailsNavigation = () => {
    return (
        <div className="mt-16 flex justify-center font-[Roboto] bg-m_gray">
            <div className="flex-col w-10/12 justify-start">
                <button
                    className="hover:bg-black hover:text-white bg-m_gray text-black px-6 py-2 font-light inline-block">Opis
                </button>
                <button
                    className="hover:bg-black hover:text-white bg-m_gray text-black px-6 py-2 font-light inline-block">Specyfikacja
                </button>
                <button
                    className="hover:bg-black hover:text-white bg-m_gray text-black px-6 py-2 font-light inline-block">Opinie
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsNavigation;
