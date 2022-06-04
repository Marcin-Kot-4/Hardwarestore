import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Products = (props) => {
    const products = [
        {
            link: '/laptop-asus-asus-chromebook-flip',
            src: 'https://images.morele.net/i256/8307177_0_i256.jpg',
            name: 'Laptop Asus ASUS Chromebook Flip',
            price: 2599,
            producer: 'ASUS'
        },
        {
            link: '/laptop-dell-xps-17-9710',
            src: 'https://images.morele.net/i256/9781560_0_i256.jpg',
            name: 'Laptop Dell XPS 17 9710',
            price: 29662.70,
            producer: 'Dell'
        },
        {
            link: '/laptop-apple-macbook-pro-16-mk193ze-a',
            src: 'https://images.morele.net/i256/9371894_0_i256.jpg',
            name: 'Laptop Apple MacBook Pro 16',
            price: 14299,
            producer: 'Apple'
        },
        {
            link: '/laptop-microsoft-surface-laptop-4-15',
            src: 'https://images.morele.net/i256/9629200_0_i256.jpg',
            name: 'Laptop Microsoft Surface Laptop 4',
            price: 12593.90,
            producer: 'Microsoft'
        },
        {
            link: '/laptop-lenovo-thinkpad-x1-carbon-g9-20xw00k3pb',
            src: 'https://images.morele.net/i256/10227127_4_i256.jpg',
            name: 'Laptop Lenovo ThinkPad X1 Carbon G9',
            price: 10881.90,
            producer: 'Lenovo'
        },
        {
            link: '/laptop-lenovo-thinkpad-x13-yoga-g2-20w8000qpb',
            src: 'https://images.morele.net/i256/8565867_0_i256.jpg',
            name: 'Laptop Lenovo ThinkPad X13 Yoga G2',
            price: 10499,
            producer: 'Lenovo'
        },
        {
            link: '/laptop-dell-xps-15-9510-djy6y',
            src: 'https://images.morele.net/i256/9259054_0_i256.jpg',
            name: 'Laptop Dell XPS 15 9510',
            price: 10490,
            producer: 'Dell'
        }
    ]

    const uniqueProducers = products.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.producer === value.producer
            ))
    )

    // console.log(uniqueProducers);

    function sortAscending(a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }

    function sortDescending(a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
        return 0;
    }

    const [selectedSorting, setSelectedSorting] = useState('ascending');

    // filtering by producers checked in Filter checkboxes

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        handleFilters(newChecked);
    }

    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })


    const [filteredProducts, setFilteredProducts] = useState(products);

    let minPrice = 0;
    let maxPrice = 0;

    const handleFilters = (filters, producers) => {
        // console.log(filters); // array of producers that are checked

        if (filters.length === 0) {
            setFilteredProducts(products);
            return 0;
        }

        const newFilters = {...Filters};

        newFilters[producers] = filters;

        let newProducts = [];

        for (let i = 0; i < products.length; i++) {
            for (let j = 0; j < filters.length; j++) {
                if (products[i].producer === filters[j]) {
                    newProducts.push(products[i]);
                }
            }
        }

        setFilters(newFilters);
        setFilteredProducts(newProducts);
        setNewFilteredProducts(newProducts);

        if (minPrice > 0) {
            handleMinPrice(minPrice);
        }

        if (maxPrice > 0) {
            handleMaxPrice(maxPrice);
        }
    }

    const [newFilteredProducts, setNewFilteredProducts] = useState(filteredProducts);

    const handleMinPrice = (minPrice) => {
        if (minPrice > 0) {
            let newProducts = [];

            for (let i = 0; i < filteredProducts.length; i++) {
                if (filteredProducts[i].price >= minPrice) {
                    newProducts.push(filteredProducts[i]);
                }
            }

            setNewFilteredProducts(newProducts);
        } else {
            setNewFilteredProducts(filteredProducts);
        }
    }

    const handleMaxPrice = (maxPrice) => {
        if (maxPrice > 0) {
            let newProducts = [];

            for (let i = 0; i < filteredProducts.length; i++) {
                if (filteredProducts[i].price <= maxPrice) {
                    newProducts.push(filteredProducts[i]);
                }
            }

            setNewFilteredProducts(newProducts);
        } else {
            setNewFilteredProducts(filteredProducts);
        }
    }

    if (selectedSorting === 'ascending') {
        newFilteredProducts.sort(sortAscending);
    } else {
        newFilteredProducts.sort(sortDescending);
    }

    return (
        <div className="flex justify-center font-[Roboto]">
            <div className="grid flex-col w-10/12 justify-center">
                <h1 className="col-span-4 font-light mt-4 text-sm mb-4">hardwarestore
                    > {props.categoryName} > {props.subCategoryName}</h1>
                <div className="grid grid-container grid-cols-4 gap-8">
                    <div className="col-span-4">
                        <h1 className="text-3xl font-bold inline-block">{props.subCategoryName}</h1>
                        <h1 className="text-3xl font-light inline-block ml-2">({products.length})</h1>
                    </div>
                    <div className="col-span-1 row-span-6 border-2 mb-12">
                        <h1 className="text-2xl font-semibold pl-4 pt-3">Filtry</h1>
                        <h1 className="text-xl font-semibold pl-4 pt-3 mb-2">Producenci</h1>
                        {
                            uniqueProducers.map((myproducers) => (
                                <div className="form-check form-check-inline">
                                    <input
                                        className="ml-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        onChange={() => handleToggle(myproducers.producer)} type="checkbox"
                                        id={'checkbox' + myproducers.producer} value={myproducers.producer}
                                        checked={Checked.indexOf(myproducers.producer) === -1 ? false : true}/>
                                    <label className="form-check-label inline-block font-light"
                                           htmlFor="inlineCheckbox1">{myproducers.producer}</label>
                                    <label className="form-check-label inline-block font-light text-gray-400 ml-1"
                                           htmlFor="inlineCheckbox1">({products.filter(({producer}) => producer === myproducers.producer).length})</label>
                                </div>
                            ))
                        }
                        <h1 className="text-xl font-semibold pl-4 pt-3 mb-2">Cena</h1>
                        <input onChange={e => handleMinPrice(parseInt(e.target.value, 10))}
                               className="border-2 w-24 ml-4 text-right inline-block" type="number"
                               placeholder="od     zł"/>
                        <div className="w-3 border-2 inline-block mx-2 mb-1"></div>
                        <input onChange={e => handleMaxPrice(parseInt(e.target.value, 10))}
                               className="border-2 w-24 text-right inline-block" type="number" placeholder="do     zł"/>
                    </div>
                    <select onChange={e => setSelectedSorting(e.target.value)} id="sort" name="sort"
                            className="col-span-1 text-center p-2 ml-16 col-start-4 bg-m_gray">
                        <option value="ascending">Cena - rosnąco</option>
                        <option value="descending">Cena - malejąco</option>
                    </select>
                    {
                        newFilteredProducts.length > 0 ?
                            newFilteredProducts.map((myproducts) => (
                                <Link className="" to={myproducts.link}>
                                    <div className="col-span-1 row-span-1 ">
                                        <img className="h-40" src={myproducts.src} alt=""/>
                                        <h1 className="font-normal mt-6">{myproducts.name}</h1>
                                        <h1 className="font-normal text-xl">{myproducts.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                    </div>
                                </Link>
                            )) : <div className="col-span-3 text-center">
                                <h1>
                                    Żaden produkt nie spełnia podanych kryteriów 🤔
                                </h1>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
