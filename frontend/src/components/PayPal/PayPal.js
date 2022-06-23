import React, {useEffect, useRef} from 'react';
import axios from "axios";
import AuthService from "../../services/auth.service";

const PayPal = (props) => {
    const user = AuthService.getCurrentUser();

    const deliveryCost = props.deliveryCost;
    const paymentCost = props.paymentCost;
    const deliveryMethod = 'Kurier - Poczta Polska';
    const paymentMethod = 'Płatność online';
    const paymentStatus = 'Zrealizowano';
    const totalAmount = props.totalAmount;
    const userId = user.id;

    const paypal = useRef();

    useEffect(() => {
        if (window.paypalButtons) {
            window.paypalButtons.close();
        }

        window.paypalButtons = window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Hardwarestore, order no. " + 111,
                            amount: {
                                currency_code: "PLN",
                                value: totalAmount
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                axios
                    .post("http://localhost:8080/api/order", {
                        deliveryCost, deliveryMethod, paymentCost, paymentMethod, paymentStatus, totalAmount, userId
                    })
                    .then((response) => {
                        if (response.data) {
                            console.log(response.data);
                            console.log('git majonez');
                        }
                    });
            },
            onError: (err) => {
                console.log(err);
            }
            });
        window.paypalButtons.render(paypal.current);
    }, )

    return (
            <div ref={paypal}></div>
    );
};

export default PayPal;
