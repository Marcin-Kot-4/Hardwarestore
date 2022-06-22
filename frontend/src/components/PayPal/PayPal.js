import React, {useEffect, useRef} from 'react';

const PayPal = (props) => {

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
                                value: props.totalAmount
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);

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
