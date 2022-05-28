import React from 'react';

const Newsletter = () => {
    return (
        <div className="flex items-center justify-center grid grid-cols-1 mb-10 mt-20">
            <div className="grid grid-cols-1 font-[Roboto] text-black text-center">
                <span className="font-bold text-lg">Zapisz się na newsletter</span>
                <span className="font-light text-sm">bądź na bieżąco z promocjami, rabatami i nowymi produktami</span>
            </div>
            <div className="grid grid-cols-1 font-[Roboto] text-black justify-items-center">
                <input className="w-48 border-b-stone-800 border-b-2 focus:border-b-stone-800 focus:border-b-2 focus:outline-none py-2 px-3"
                       id="newsletter" type="text" placeholder="podaj swój adres e-mail..."/>
                <button className="font-bold hover:bg-black hover:text-white w-48"> zapisz </button>
            </div>
        </div>
);
};

export default Newsletter;
