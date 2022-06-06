import React from 'react';

const Cart = () => {
    const cart = [
        {
            productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
            price: '425',
            image: 'https://images.morele.net/i256/5943414_1_i256.jpg'
        },
        {
            productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
            price: '425',
            image: 'https://images.morele.net/i256/5943414_1_i256.jpg'
        },
        {
            productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
            price: '425',
            image: 'https://images.morele.net/i256/5943414_1_i256.jpg'
        },
        {
            productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
            price: '425',
            image: 'https://images.morele.net/i256/5943414_1_i256.jpg'
        },
        {
            productName: 'Dysk SSD Samsung 870 QVO 1 TB 2.5" SATA III',
            price: '425',
            image: 'https://images.morele.net/i256/5943414_1_i256.jpg'
        }
    ]


    return (
        <div className="flex justify-center font-[Roboto]">
            <div className="w-10/12">
                <div className="w-7/12">
                    <h1 className="text-2xl font-bold inline">Koszyk</h1>
                    <h1 className="text-2xl font-light inline ml-2">({cart.length})</h1>
                    <div className="inline ml-auto right-0">
                        <h1 className="text-sm font-light inline mr-0 ml-auto ">Wyczyść koszyk</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
