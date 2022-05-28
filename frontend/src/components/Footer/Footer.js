import React from 'react';
import Item from "./Item";
import {SafeShopping, CustomerService, Help, Hardwarestore} from "./Data";

const Footer = () => {
    return (
        <div className="bg-m_gray text-black">
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 font-[Poppins] font-medium text-black text-2xl">
                    <span>Hardware</span>
                    <span>store</span>
                    <span>.com</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8  py-16">
                    <Item Links={SafeShopping} title="Bezpieczne zakupy"/>
                    <Item Links={CustomerService} title="Obsługa klienta"/>
                    <Item Links={Help} title="Pomoc"/>
                    <Item Links={Hardwarestore} title="Hardwarestore"/>
                </div>
            </div>
            <div
                className="flex bg-white w-full justify-center font-light text-black text-xs py-3">
                <span className="w-5/12 flex justify-start">Hardwarestore Copyright © 2001 - 2022</span>
                <span className="w-5/12 flex justify-end">Korzystanie z serwisu oznacza akceptację regulaminu</span>
            </div>
        </div>
    );
};

export default Footer;
