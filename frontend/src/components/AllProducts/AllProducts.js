import React, {useEffect, useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import ProfileNavigation from "../Profile/ProfileNavigation";
import {Pagination} from "@mui/material";
import SearchBar from "../Header/SearchBar";
import More from "../More";

const AllProducts = (props) => {
    const products = useMemo(() => [
        {
            link: '/produkt/laptop-asus-chromebook-flip',
            src: 'https://images.morele.net/i256/8307177_0_i256.jpg',
            name: 'Laptop Asus ASUS Chromebook Flip',
            price: 2599,
            producer: 'ASUS',
            options: ['Edytuj', 'Zablokuj', 'Usuń'],
        },
        {
            link: '/produkt/laptop-dell-xps-17-9710',
            src: 'https://images.morele.net/i256/9781560_0_i256.jpg',
            name: 'Laptop Dell XPS 17 9710',
            price: 29662.70,
            producer: 'Dell',
            options: ['Edytuj', 'Zablokuj', 'Usuń'],
        },
        {
            link: '/produkt/laptop-apple-macbook-pro-16',
            src: 'https://images.morele.net/i256/9371894_0_i256.jpg',
            name: 'Laptop Apple MacBook Pro 16',
            price: 14299,
            producer: 'Apple',
            options: ['Edytuj', 'Zablokuj', 'Usuń'],
        },
        {
            link: '/produkt/laptop-microsoft-surface-laptop-4',
            src: 'https://images.morele.net/i256/9629200_0_i256.jpg',
            name: 'Laptop Microsoft Surface Laptop 4',
            price: 12593.90,
            producer: 'Microsoft',
            options: ['Edytuj', 'Zablokuj', 'Usuń'],
        },
        {
            link: '/produkt/laptop-lenovo-thinkpad-x1-carbon-g9',
            src: 'https://images.morele.net/i256/10227127_4_i256.jpg',
            name: 'Laptop Lenovo ThinkPad X1 Carbon G9',
            price: 10881.90,
            producer: 'Lenovo',
            options: ['Edytuj', 'Zablokuj', 'Usuń'],
        },
        {
            link: '/produkt/laptop-lenovo-thinkpad-x13-yoga-g2',
            src: 'https://images.morele.net/i256/8565867_0_i256.jpg',
            name: 'Laptop Lenovo ThinkPad X13 Yoga G2',
            price: 10499,
            producer: 'Lenovo',
            options: ['Edytuj', 'Zablokuj', 'Usuń'],
        },
        {
            link: '/produkt/laptop-dell-xps-15-9510',
            src: 'https://images.morele.net/i256/9259054_0_i256.jpg',
            name: 'Laptop Dell XPS 15 9510',
            price: 10490,
            producer: 'Dell',
            options: ['Edytuj', 'Zablokuj', 'Usuń'],
        }
    ], []);

    let [page, setPage] = useState(1);
    const LIMIT_FOR_PAGE = 12;

    const [noOfPages, setNoOfPages] = React.useState(
        Math.ceil(products.length / LIMIT_FOR_PAGE)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setNoOfPages(Math.ceil(products.length / LIMIT_FOR_PAGE));
        //setPage(1);
    }, [products])

    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-9/12">
                <div className="w-2/12 float-left mr-6">
                    <ProfileNavigation styleBold={props.styleBold}/>
                </div>
                <div className="w-9/12 float-left border-l-2 pl-12 border-gray-100">
                    <h1 className="text-2xl font-bold inline">Wszystkie produkty</h1>
                    <div className="grid grid-container grid-cols-3 gap-8">
                        <div className="col-span-3 w-1/3">
                            <SearchBar/>
                        </div>
                        {
                            products.slice((page - 1) * LIMIT_FOR_PAGE, page * LIMIT_FOR_PAGE).map((p) => (
                                <div className="col-span-1 row-span-1 ">
                                    <More options={p.options}/>
                                    <Link className="mt-1" to={p.link}>
                                        <img className="h-40" src={p.src} alt=""/>
                                        <h1 className="font-normal mt-6">{p.name}</h1>
                                        <h1 className="font-normal text-xl">{p.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                    </Link>
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

export default AllProducts;
