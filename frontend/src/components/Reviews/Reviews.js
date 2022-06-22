import React,  {useEffect, useState} from 'react';
import ProfileNavigation from "../Profile/ProfileNavigation";
import {Pagination} from "@mui/material";

const Reviews = (props) => {
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
        },
        {
            id: 7000041241230,
            productName: 'Monitor LG UltraGear 27GP850-B',
            price: 1797.99,
            image: 'https://images.morele.net/i256/5947874_0_i256.jpg',
            status: 'Opłacone',
            date: new Date(2022, 0, 20),
            options: [],
        }
    ]

    let [page, setPage] = useState(1);
    const LIMIT_FOR_PAGE = 5;

    const [noOfPages, setNoOfPages] = React.useState(
        Math.ceil(orders.length / LIMIT_FOR_PAGE)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setNoOfPages(Math.ceil(orders.length / LIMIT_FOR_PAGE));
        //setPage(1);
    }, [orders])

    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-9/12">
                <div className="w-2/12 float-left mr-6">
                    <ProfileNavigation styleBold={props.styleBold}/>
                </div>
                <div className="w-3/5 float-left border-l-2 pl-12 border-gray-100">
                    <h1 className="text-2xl font-bold inline">Opinie</h1>
                    <div className="mt-6">
                        {
                            orders.slice((page - 1) * LIMIT_FOR_PAGE, page * LIMIT_FOR_PAGE).map((c) => (
                                <div className="w-full h-36 border-2 border-gray-100 mb-3">
                                    <div className="inline-block w-full">
                                        <img className="inline-block w-24 h-24 object-contain ml-8" src={c.image}
                                             alt=""/>
                                        <div className="inline-block pt-10 pl-8">
                                            <h1 className="text-center font-light text-sm">{c.productName}</h1>
                                            <h1 className="font-light text-xs">{formatter.format(c.date)}</h1>
                                        </div>
                                        <button className="mt-12 mr-4 float-right hover:bg-black hover:text-white
                                         px-6 py-2 font-light border border-black">Wystaw opinię
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        <div className=" col-span-3">
                            <Pagination count={noOfPages} page={page} onChange={handleChange}
                                        disabled={noOfPages === 0 || noOfPages === 1}
                                        defaultPage={1} siblingCount={1}
                                        variant="outlined" shape="rounded" className="float-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
