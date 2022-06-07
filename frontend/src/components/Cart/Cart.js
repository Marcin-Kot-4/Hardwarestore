import React from 'react';
import TrashIcon from "../TrashIcon";
import SmallTrashIcon from "../SmallTrashIcon";
import {Link} from "react-router-dom";

const Cart = () => {
    const cart = [
        {
            productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
            price: 425,
            image: 'https://images.morele.net/i256/5943414_1_i256.jpg'
        },
        {
            productName: 'Pamięć GoodRam IRDM X, DDR4, 8 GB, 3200MHz, CL16',
            price: 159.99,
            image: 'https://images.morele.net/i256/8299663_0_i256.jpg'
        },
        {
            productName: 'Płyta główna Gigabyte B450 AORUS PRO',
            price: 409,
            image: 'https://images.morele.net/i256/4671394_0_i256.jpg'
        },
        {
            productName: 'Monitor LG UltraGear 27GP850-B',
            price: 1797.99,
            image: 'https://images.morele.net/i256/5947874_0_i256.jpg'
        },
        {
            productName: 'Obudowa be quiet! Pure Base 500DX',
            price: 499,
            image: 'https://images.morele.net/i256/6726194_0_i256.jpg'
        }
    ]


    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-10/12">
                <div className="w-8/12 float-left">
                    <h1 className="text-3xl font-bold inline">Koszyk</h1>
                    <h1 className="text-3xl font-light inline ml-2">({cart.length})</h1>
                    <div className="inline-block float-right text-center align-middle hover:text-primary">
                        <TrashIcon iconName="trash-outline" iconNameHover="trash"></TrashIcon>
                    </div>
                    <div className="mt-6">
                        {
                            cart.map((c) => (
                                <div className="w-full h-28 pt-1 border-2 border-gray-100 mb-3">
                                    <div className="inline-block w-9/12">
                                        <img className="inline-block w-24 h-24 object-contain ml-6" src={c.image} alt=""/>
                                        <h1 className="inline-block text-center pl-6 font-light text-sm">{c.productName}</h1>
                                    </div>
                                    <div className="w-3/12 inline-block text-right justify-end align-middle">
                                        <h1 className="font-light text-sm inline-block mr-6">{c.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                        <div className="inline-block align-middle text-center pr-6">
                                            <SmallTrashIcon iconName="trash-outline" iconNameHover="trash"/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-[60px] mr-20 bg-m_gray py-6 w-3/12 float-right px-6">
                    <div className="text-left w-6/12 float-left">
                        <h1 className="inline text-lg">Łączna kwota</h1>
                    </div>
                    <div className="text-right w-6/12 float-right">
                        <h1 className="inline text-lg">{cart.reduce((accumulator, object) => {return accumulator + object.price;}, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')}</h1>
                    </div>
                    <Link to="/dostawaiplatnosc">
                        <button
                            className="hover:bg-primary hover:text-white bg-green-600 text-white w-full mt-10 px-6 py-3 font-normal block">Przejdź do dostawy
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
