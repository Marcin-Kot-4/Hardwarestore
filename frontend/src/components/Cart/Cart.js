import React, {useEffect} from 'react';
import TrashIcon from "../TrashIcon";
import SmallTrashIcon from "../SmallTrashIcon";
import {Link} from "react-router-dom";
import CartService from "../../services/cart.service";
import {useState} from "react";
import AuthService from "../../services/auth.service";
import axios from "axios";
import authToken from "../../services/auth-token";
import authHeader from "../../services/auth-header";

const Cart = () => {

    const [cart, setCart] = useState([]);

    const user = AuthService.getCurrentUser();

    useEffect(() => {
        fetch("http://localhost:8080/api/cart/" + user.id,{headers: authHeader()})
            .then(response => response.json())
            .then((result) => {
                    setCart(result);
                }
            )
    }, [])

    function handleDeleteOneProduct(productId) {
        axios.delete("http://localhost:8080/api/cart/" + productId, {headers: authHeader()});
        let new_cart = cart.filter(function (obj) {
            return obj.id !== productId;
        });
        setCart(new_cart);
    }

    function handleDeleteAll() {
        console.log(user.id);
        axios.delete("http://localhost:8080/api/cart/deleteAll/" + user.id, {headers: authHeader()});
        setCart([]);
    }

    return (
        <div>
            {
                cart.length !== 0 ? (
                        <div className="flex justify-center font-[Roboto] my-16">
                            < div className="w-10/12">
                                <div className="w-8/12 float-left">
                                    <h1 className="text-3xl font-bold inline">Koszyk</h1>
                                    <h1 className="text-3xl font-light inline ml-2">({cart.length})</h1>
                                    <div className="inline-block float-right text-center align-middle hover:text-primary"
                                         onClick={handleDeleteAll}>
                                        <TrashIcon iconName="trash-outline" iconNameHover="trash"></TrashIcon>
                                    </div>
                                    <div className="mt-6">
                                        {
                                            cart.map((c) => (
                                                <div key={c.id} className="w-full h-28 pt-1 border-2 border-gray-100 mb-3">
                                                    <div className="inline-block w-9/12">
                                                        <img className="inline-block w-24 h-24 object-contain ml-6"
                                                             src={c.product.imgThumbnail} alt=""/>
                                                        <h1 className="inline-block text-center pl-6 font-light text-sm">{c.product.name}</h1>
                                                    </div>
                                                    <div
                                                        className="w-3/12 inline-block text-right justify-end align-middle">
                                                        <h1 className="font-light text-sm inline-block mr-6">{c.quantity} szt.</h1>
                                                        <h1 className="font-light text-sm inline-block mr-6">{c.product.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                                        <div className="inline-block align-middle text-center pr-6"
                                                             onClick={() => {
                                                                 handleDeleteOneProduct(c.id)
                                                             }}>
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
                                        <h1 className="inline text-lg">{cart.reduce((accumulator, object) => {
                                            return accumulator + object.product.price * object.quantity;
                                        }, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')}</h1>
                                    </div>
                                    <Link to="/dostawaiplatnosc">
                                        <button
                                            className="hover:bg-primary hover:text-white bg-green-600 text-white w-full mt-10 px-6 py-3 font-normal block">Przejdź
                                            do dostawy
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <h1 className="text-center my-40 font-[Roboto] text-3xl">Twój koszyk jest pusty 🤔</h1>
                    )
            }
        </div>
    )
};

export default Cart;
