import React from 'react';
import {Link} from "react-router-dom";
import More from "../More";

const Profile = (props) => {
    const formatter = new Intl.DateTimeFormat('pl', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const orders = [
        {
            id: 7000041241233,
            productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
            price: 425,
            image: 'https://images.morele.net/i256/5943414_1_i256.jpg',
            status: 'Zakończone',
            date: new Date(2022, 1, 1),
            options: ['Faktura VAT'],
        },
        {
            id: 7000041241232,
            productName: 'Pamięć GoodRam IRDM X, DDR4, 8 GB, 3200MHz, CL16',
            price: 159.99,
            image: 'https://images.morele.net/i256/8299663_0_i256.jpg',
            status: 'Anulowane',
            date: new Date(2022, 1, 1),
            options: [],
        },
        {
            id: 7000041241231,
            productName: 'Płyta główna Gigabyte B450 AORUS PRO',
            price: 409,
            image: 'https://images.morele.net/i256/4671394_0_i256.jpg',
            status: 'Nieopłacone (offline)',
            date: new Date(2022, 0, 21),
            options: ['Potwierdź zapłatę', 'Anuluj'],
        },
        {
            id: 7000041241230,
            productName: 'Monitor LG UltraGear 27GP850-B',
            price: 1797.99,
            image: 'https://images.morele.net/i256/5947874_0_i256.jpg',
            status: 'Opłacone',
            date: new Date(2022, 0, 20),
            options: [],
        },
        {
            id: 7000041241229,
            productName: 'Obudowa be quiet! Pure Base 500DX',
            price: 499,
            image: 'https://images.morele.net/i256/6726194_0_i256.jpg',
            status: 'Zakończone',
            date: new Date(2022, 1, 8),
            options: [],
        }
    ]


    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-9/12">
                <div className="w-2/12 float-left mr-6">
                    <h1 className="text-xl font-light">Witaj,</h1>
                    {
                        props.role === 'admin' ?
                            <>
                                <h1 className="text-xl font-medium mb-4">Dawid (administrator)</h1>
                                <Link to="/mojekonto/listauzytkownikow">
                                    <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1">Lista
                                        użytkowników
                                    </h1>
                                </Link>
                                <Link to="/mojekonto/produkty">
                                    <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1">Produkty</h1>
                                </Link>
                                <Link to="/mojekonto/dodajprodukt">
                                    <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1">Dodaj
                                        produkt
                                    </h1>
                                </Link>
                            </>
                            :
                            <h1 className="text-xl font-medium mb-4">Patrycja</h1>
                    }
                    <Link to="/mojekonto/zamówienia">
                        <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1 font-medium">Zamówienia</h1>
                    </Link>
                    <Link to="/mojekonto/opinie">
                        <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1">Opinie</h1>
                    </Link>
                    <Link to="/mojekonto/ustawieniakonta">
                        <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1">Ustawienia
                            konta
                        </h1>
                    </Link>
                    <Link to="/mojekonto/wyloguj">
                        <h1 className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer mb-1">Wyloguj</h1>
                    </Link>
                </div>
                <div className="w-9/12 float-left border-l-2 pl-12 border-gray-100">
                    <h1 className="text-2xl font-bold inline">Zamówienia</h1>
                    <div className="mt-6">
                        {
                            orders.map((c) => (
                                <div className="w-full h-36 border-2 border-gray-100 mb-3">
                                    <div
                                        className="inline-block text-left justify-start align-middle w-3/12 float-left bg-n_gray h-full pl-6 pt-4">
                                        <h1 className="font-semibold mb-3">{c.status}</h1>
                                        <h1 className="font-normal text-sm">{formatter.format(c.date)}</h1>
                                        <h1 className="font-light text-sm">nr {c.id}</h1>
                                        <h1 className="text-sm font-semibold mt-3">{c.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                    </div>
                                    <div className="inline-block w-9/12">
                                        <img className="inline-block w-24 h-24 object-contain ml-8 mt-" src={c.image}
                                             alt=""/>
                                        <h1 className="inline-block text-center pl-8 pt-16 font-light text-sm">{c.productName}</h1>
                                        <More options={c.options}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="float-right mt-4">
                        <span className="bg-m_gray px-3 pt-3 pb-1 text-lg text-gray-300 mr-1">
                            <ion-icon name="chevron-back"></ion-icon>
                        </span>
                        <span className="border-black border pl-[15px] pr-[11px] pt-3 pb-1 text-lg mr-1 cursor-pointer">
                            <span className="pr-1 align-text-bottom font-light">1</span>
                        </span>
                        <span
                            className="border-m_gray border pl-[15px] pr-[11px] pt-3 pb-1 text-lg mr-1 cursor-pointer">
                            <span className="pr-1 align-text-bottom font-light">2</span>
                        </span>
                        <span className="bg-m_gray px-3 pt-3 pb-1 text-lg cursor-pointer">
                            <span className="pr-1 align-text-bottom font-light">Następna</span>
                            <ion-icon name="chevron-forward"></ion-icon>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
