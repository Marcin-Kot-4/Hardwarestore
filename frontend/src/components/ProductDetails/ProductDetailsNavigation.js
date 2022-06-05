import React from 'react';

const ProductDetailsNavigation = () => {
    return (
        <div className="mt-16 flex justify-center font-[Roboto] bg-m_gray">
            <div className="flex-col w-10/12 justify-start">
                <a href="#Opis"
                    className="hover:bg-black hover:text-white bg-m_gray text-black px-6 py-2 font-light inline-block">Opis
                </a>
                <a href="#Specyfikacja"
                    className="hover:bg-black hover:text-white bg-m_gray text-black px-6 py-2 font-light inline-block">Specyfikacja
                </a>
                <a href="#Opinie"
                    className="hover:bg-black hover:text-white bg-m_gray text-black px-6 py-2 font-light inline-block">Opinie
                </a>
            </div>
        </div>
    );
};

export default ProductDetailsNavigation;
