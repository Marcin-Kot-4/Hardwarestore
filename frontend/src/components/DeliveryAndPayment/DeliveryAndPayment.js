import React, {useEffect} from 'react';
import {useState} from "react";
import PayPal from "../PayPal/PayPal";
import AuthService from "../../services/auth.service";
import authHeader from "../../services/auth-header";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const DeliveryAndPayment = () => {

    const [deliveryRadio1, setDeliveryRadio1] = useState('radio-button-on-outline');
    const [deliveryRadio2, setDeliveryRadio2] = useState('radio-button-off-outline');
    const [deliveryRadio3, setDeliveryRadio3] = useState('radio-button-off-outline');

    const [paymentRadio1, setPaymentRadio1] = useState('radio-button-on-outline');
    const [paymentRadio2, setPaymentRadio2] = useState('radio-button-off-outline');
    const [paymentRadio3, setPaymentRadio3] = useState('radio-button-off-outline');

    const [deliveryCost, setDeliveryPrice] = useState(20);
    const [deliveryMethod, setDeliveryMethod] = useState('Kurier - Poczta Polska');
    const [paymentCost, setPaymentPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('Płatność online');
    const [paymentStatus, setPaymentStatus] = useState('Zrealizowano');

    function onClickHandlerDelivery(radioNumber, newDeliveryPrice, newDeliveryMethod) {
        setDeliveryRadio1('radio-button-off-outline');
        setDeliveryRadio2('radio-button-off-outline');
        setDeliveryRadio3('radio-button-off-outline');
        radioNumber('radio-button-on-outline');
        setDeliveryPrice(newDeliveryPrice);
        setDeliveryMethod(newDeliveryMethod);
    }

    function onClickHandlerPayment(radioNumber, newPaymentPrice, newPaymentMethod, newPaymentStatus) {
        setPaymentRadio1('radio-button-off-outline');
        setPaymentRadio2('radio-button-off-outline');
        setPaymentRadio3('radio-button-off-outline');
        radioNumber('radio-button-on-outline');
        setPaymentPrice(newPaymentPrice);
        setPaymentMethod(newPaymentMethod);
        setPaymentStatus(newPaymentStatus);
    }

    const [cart, setCart] = useState([]);

    const user = AuthService.getCurrentUser();
    let userId = user.id;

    useEffect(() => {
        fetch("http://localhost:8080/api/cart/" + user.id, {headers: authHeader()})
            .then(response => response.json())
            .then((result) => {
                    setCart(result);
                }
            )
    }, [])

    const [totalAmount, setTotalAmount] = useState(cart.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, deliveryCost + paymentCost).toFixed(2));

    useEffect(() => {
        let _totalAmount = parseInt(cart.reduce((accumulator, object) => {
                return accumulator + object.product.price * object.quantity;
            }, 0))
            + deliveryCost + paymentCost;
        _totalAmount = _totalAmount.toFixed(2);
        setTotalAmount(_totalAmount);
    }, [cart, deliveryCost, paymentCost]);

    const [checkOut, setCheckOut] = useState(false);

    const navigate = useNavigate();

    const handleCheckout = () => {
        if (paymentMethod === 'Płatność online') {
            return payPal;
        } else {
            axios
                .post("http://localhost:8080/api/order", {
                    deliveryCost, deliveryMethod, paymentCost, paymentMethod, paymentStatus, totalAmount, userId
                })
                .then((response) => {
                    if (response.data) {
                        console.log(response.data);
                        console.log('git majonez');
                        navigate("/mojekonto");
                    }
                });
        }
    }

    const payPal = (
        <div className="flex justify-center my-16">
            <PayPal totalAmount={totalAmount} deliveryCost={deliveryCost} paymentCost={paymentCost}
                    deliveryMethod={deliveryMethod} paymentMethod={paymentMethod} paymentStatus={paymentStatus}/>
        </div>
    )

    return (
        <div>
            {
                checkOut ?
                    (
                        handleCheckout()
                    )
                    :
                    (

                        <div className="flex justify-center font-[Roboto] my-16">
                            <div className="w-10/12">
                                <div className="w-8/12 float-left">
                                    <h1 className="text-3xl font-bold">Dostawa i płatność</h1>
                                    <h1 className="text-2xl font-bold mt-8">Sposób dostawy</h1>
                                    <div className="mt-4">
                                        <div className="w-full h-16 pt-1 border-2 border-gray-100 mb-1 align-middle ">
                            <span className="pl-4 text-4xl align-middle hover:text-primary inline-block h-full"
                                  onClick={() => onClickHandlerDelivery(setDeliveryRadio1, 20, 'Kurier - Poczta Polska')}>
                                <ion-icon name={deliveryRadio1}></ion-icon>
                            </span>
                                            <h1 className="inline-block mt-4 text-center pl-6 font-light text-sm align-middle h-full">Kurier
                                                - Poczta Polska
                                            </h1>
                                            <h1 className="inline-block mt-4 text-center pl-1 font-light text-sm align-middle h-full">(20
                                                zł)
                                            </h1>
                                        </div>
                                        <div className="w-full h-16 pt-1 border-2 border-gray-100 mb-1 align-middle ">
                            <span className="pl-4 text-4xl align-middle hover:text-primary inline-block h-full"
                                  onClick={() => onClickHandlerDelivery(setDeliveryRadio2, 0, 'Odbiór osobisty w salonie')}>
                                <ion-icon name={deliveryRadio2}></ion-icon>
                            </span>
                                            <h1 className="inline-block mt-4 text-center pl-6 font-light text-sm align-middle h-full">Odbiór
                                                osobisty w salonie
                                            </h1>
                                            <h1 className="inline-block mt-4 text-center pl-1 font-light text-sm align-middle h-full">(bezpłatnie)</h1>
                                        </div>
                                        <div className="w-full h-16 pt-1 border-2 border-gray-100 mb-1 align-middle ">
                            <span className="pl-4 text-4xl align-middle hover:text-primary inline-block h-full"
                                  onClick={() => onClickHandlerDelivery(setDeliveryRadio3, 12, 'Paczkomaty 24/7')}>
                                <ion-icon name={deliveryRadio3}></ion-icon>
                            </span>
                                            <h1 className="inline-block mt-4 text-center pl-6 font-light text-sm align-middle h-full">Paczkomaty
                                                24/7
                                            </h1>
                                            <h1 className="inline-block mt-4 text-center pl-1 font-light text-sm align-middle h-full">(12
                                                zł)
                                            </h1>
                                        </div>
                                    </div>
                                    <h1 className="text-2xl font-bold mt-8">Metoda płatności</h1>
                                    <div className="mt-4">
                                        <div className="w-full h-16 pt-1 border-2 border-gray-100 mb-1 align-middle ">
                            <span className="pl-4 text-4xl align-middle hover:text-primary inline-block h-full"
                                  onClick={() => onClickHandlerPayment(setPaymentRadio1, 0, 'Płatność online', 'Opłacono')}>
                                <ion-icon name={paymentRadio1}></ion-icon>
                            </span>
                                            <h1 className="inline-block mt-4 text-center pl-6 font-light text-sm align-middle h-full">Płatność
                                                online
                                            </h1>
                                            <h1 className="inline-block mt-4 text-center pl-1 font-light text-sm align-middle h-full">(bezpłatnie)</h1>
                                        </div>
                                        <div className="w-full h-16 pt-1 border-2 border-gray-100 mb-1 align-middle ">
                            <span className="pl-4 text-4xl align-middle hover:text-primary inline-block h-full"
                                  onClick={() => onClickHandlerPayment(setPaymentRadio2, 0, 'Przelew tradycyjny', 'Nieopłacono')}>
                                <ion-icon name={paymentRadio2}></ion-icon>
                            </span>
                                            <h1 className="inline-block mt-4 text-center pl-6 font-light text-sm align-middle h-full">Przelew
                                                tradycyjny
                                            </h1>
                                            <h1 className="inline-block mt-4 text-center pl-1 font-light text-sm align-middle h-full">(bezpłatnie)</h1>
                                        </div>
                                        <div className="w-full h-16 pt-1 border-2 border-gray-100 mb-1 align-middle ">
                            <span className="pl-4 text-4xl align-middle hover:text-primary inline-block h-full"
                                  onClick={() => onClickHandlerPayment(setPaymentRadio3, 15, 'Przy odbiorze', 'W drodze')}>
                                <ion-icon name={paymentRadio3}></ion-icon>
                            </span>
                                            <h1 className="inline-block mt-4 text-center pl-6 font-light text-sm align-middle h-full">Przy
                                                odbiorze
                                            </h1>
                                            <h1 className="inline-block mt-4 text-center pl-1 font-light text-sm align-middle h-full">(15
                                                zł)
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[60px] mr-20 bg-m_gray py-6 w-3/12 float-right px-6">
                                    <div className="text-left w-6/12 float-left">
                                        <h1 className="inline text-lg">Łączna kwota</h1>
                                    </div>
                                    <div className="text-right w-6/12 float-right">
                                        <h1 className="inline text-lg">
                                            {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')}
                                        </h1>
                                    </div>
                                    {/*<Link to="/dostawaiplatnosc">*/}
                                    <button
                                        className="hover:bg-primary hover:text-white bg-green-600 text-white w-full mt-10 px-6 py-3 font-normal block"
                                        onClick={() => {
                                            setCheckOut(true)
                                        }}>
                                        Zamów
                                    </button>
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default DeliveryAndPayment;
