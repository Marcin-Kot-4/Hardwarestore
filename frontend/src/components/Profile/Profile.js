import React, {useEffect, useState} from 'react';
import More from "../More";
import ProfileNavigation from "./ProfileNavigation";
import {Pagination} from "@mui/material";
import authHeader from "../../services/auth-header";
import AuthService from "../../services/auth.service";

const Profile = (props) => {
    const formatter = new Intl.DateTimeFormat('pl', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // const orders = [
    //     {
    //         id: 7000041241233,
    //         productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
    //         price: 425,
    //         image: 'https://images.morele.net/i256/5943414_1_i256.jpg',
    //         status: 'Zakończone',
    //         date: new Date(2022, 1, 1),
    //         options: ['Faktura VAT'],
    //     },
    //     {
    //         id: 7000041241232,
    //         productName: 'Pamięć GoodRam IRDM X, DDR4, 8 GB, 3200MHz, CL16',
    //         price: 159.99,
    //         image: 'https://images.morele.net/i256/8299663_0_i256.jpg',
    //         status: 'Anulowane',
    //         date: new Date(2022, 1, 1),
    //         options: ['Faktura VAT'],
    //     },
    //     {
    //         id: 7000041241231,
    //         productName: 'Płyta główna Gigabyte B450 AORUS PRO',
    //         price: 409,
    //         image: 'https://images.morele.net/i256/4671394_0_i256.jpg',
    //         status: 'Nieopłacone (offline)',
    //         date: new Date(2022, 0, 21),
    //         options: ['Potwierdź zapłatę', 'Anuluj'],
    //     },
    //     {
    //         id: 7000041241230,
    //         productName: 'Monitor LG UltraGear 27GP850-B',
    //         price: 1797.99,
    //         image: 'https://images.morele.net/i256/5947874_0_i256.jpg',
    //         status: 'Opłacone',
    //         date: new Date(2022, 0, 20),
    //         options: ['Faktura VAT'],
    //     },
    //     {
    //         id: 7000041241229,
    //         productName: 'Obudowa be quiet! Pure Base 500DX',
    //         price: 499,
    //         image: 'https://images.morele.net/i256/6726194_0_i256.jpg',
    //         status: 'Zakończone',
    //         date: new Date(2022, 1, 8),
    //         options: ['Faktura VAT'],
    //     },
    //     {
    //         id: 7000041241233,
    //         productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
    //         price: 425,
    //         image: 'https://images.morele.net/i256/5943414_1_i256.jpg',
    //         status: 'Zakończone',
    //         date: new Date(2022, 1, 1),
    //         options: ['Faktura VAT'],
    //     }
    // ]

    const [orderss, setOrders] = useState([]);
    const [products, setProducts] = useState([]);

    const user = AuthService.getCurrentUser();

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then(response => response.json())
            .then((result) => {
                    setProducts(result);
                    // console.log(result);
                    fetch("http://localhost:8080/api/orders/" + user.id, {headers: authHeader()})
                        .then(response => response.json())
                        .then((result) => {
                                setOrders(result);
                                // console.log(result);
                            }
                        )
                }
            )
    }, [])


    let [page, setPage] = useState(1);
    const LIMIT_FOR_PAGE = 5;

    const [noOfPages, setNoOfPages] = React.useState(
        Math.ceil(orderss.length / LIMIT_FOR_PAGE)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setNoOfPages(Math.ceil(orderss.length / LIMIT_FOR_PAGE));
        //setPage(1);
    }, [orderss])

    function handleProductId(productId) {
        return products[productId].name;
    }

    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-9/12">
                <div className="w-2/12 float-left mr-6">
                    <ProfileNavigation styleBold={props.styleBold}/>
                </div>
                <div className="w-9/12 float-left border-l-2 pl-12 border-gray-100">
                    <h1 className="text-2xl font-bold inline">Zamówienia</h1>
                    <div className="mt-6">
                        {orderss.length > 0 ? (
                            orderss.slice((page - 1) * LIMIT_FOR_PAGE, page * LIMIT_FOR_PAGE).map((c) => (
                                <div key={orderss.id} className="w-full h-36 border-2 border-gray-100 mb-3">
                                    <div
                                        className="inline-block text-left justify-start align-middle w-3/12 float-left bg-n_gray h-full pl-6 pt-4">
                                        <h1 className="font-semibold mb-3">{c.paymentStatus}</h1>
                                        {/*<h1 className="font-normal text-sm">{formatter.format(c.date)}</h1>*/}
                                        <h1 className="font-normal text-sm">{formatter.format(new Date(2022, 5, 23))}</h1>
                                        <h1 className="font-light text-sm">nr {c.id}</h1>
                                        <h1 className="text-sm font-semibold mt-3">{c.totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                    </div>
                                    <div className="inline-block w-9/12">
                                        {/*<img className="inline-block w-24 h-24 object-contain ml-8 mt-" src={c.image}*/}
                                        {/*     alt=""/>*/}
                                        {/*<h1 className="inline-block text-center pl-8 pt-16 font-light text-sm">{c.productName}</h1>*/}
                                        {c.orderProducts.map((product) => (
                                            <h1 className="inline-block text-center pl-4 pt-16 font-light text-sm">{product.quantity} szt. {handleProductId(product.productId)},</h1>
                                        ))}
                                        <div className="float-right">
                                            <More options={'Faktura VAT'}/>
                                        </div>

                                    </div>
                                </div>
                            ))
                        ) : (
                            <h1 className="text-center my-40 font-[Roboto] text-3xl">Złóż pierwsze zamówienie</h1>
                        )
                        }
                        {
                            orderss.length > 0 ? (
                                <div className=" col-span-3">
                                    <Pagination count={noOfPages} page={page} onChange={handleChange}
                                                disabled={noOfPages === 0 || noOfPages === 1}
                                                defaultPage={1} siblingCount={1}
                                                variant="outlined" shape="rounded" className="float-right"/>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
