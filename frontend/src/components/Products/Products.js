import React, {useEffect, useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import authHeader from "../../services/auth-header";
import axios from "axios";
import AuthService from "../../services/auth.service";

const Products = () => {

    let {categoryName} = useParams();
    let {subCategoryName} = useParams();
    const categoryLink = '/' + categoryName + '/' + subCategoryName;
    const [subCategory, setSubCategory] = useState();
    const [products, setProducts] = useState([]);

    const user = AuthService.getCurrentUser();

    useEffect(() => {
        axios.post("http://localhost:8080/api/subCategoryByLink", categoryLink)
            .then((result) => {
                    setSubCategory(result.data);
                    // console.log(subCategory.id);
                    fetch("http://localhost:8080/api/subCategories/" + result.data.id + "/products")
                        .then(response => response.json())
                        .then((result) => {
                            // console.log(result)
                                setProducts(result);
                                setFilteredProducts(result);
                                setNewFilteredProducts(result);
                                setNewProducerQuantityProducts(result);
                            }
                        )
                }
            )
    }, [categoryName, subCategoryName])

    let uniqueProducers = products.filter((value, index, self) =>
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
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const handleFilters = (filters, producers) => {
        // console.log(filters); // array of producers that are checked

        if (filters.length === 0) {
            setFilteredProducts(products);
            setNewFilteredProducts(products);

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
    }

    const [newFilteredProducts, setNewFilteredProducts] = useState(filteredProducts);
    const [newProducerQuantityProducts, setNewProducerQuantityProducts] = useState(products);

    useEffect(() => {
        if (minPrice > 0 || maxPrice > 0) {

            if (minPrice > 0) {
                setMinPrice(minPrice);
            }
            if (maxPrice > 0) {
                setMaxPrice(maxPrice);
            }

            if (minPrice > 0 && maxPrice > minPrice) {
                let productsFilteredByPrice = [];
                let finalProductsFilteredByPrice = [];
                let producerQuantity = [];
                let finalProducerQuantity = [];

                for (let i = 0; i < filteredProducts.length; i++) {
                    if (filteredProducts[i].price >= minPrice) {
                        productsFilteredByPrice.push(filteredProducts[i]);
                    }
                }

                for (let i = 0; i < productsFilteredByPrice.length; i++) {
                    if (productsFilteredByPrice[i].price <= maxPrice) {
                        finalProductsFilteredByPrice.push(productsFilteredByPrice[i]);
                    }
                }

                for (let i = 0; i < products.length; i++) {
                    if (products[i].price >= minPrice) {
                        producerQuantity.push(products[i]);
                    }
                }

                for (let i = 0; i < producerQuantity.length; i++) {
                    if (producerQuantity[i].price <= maxPrice) {
                        finalProducerQuantity.push(producerQuantity[i]);
                    }
                }

                setNewFilteredProducts(finalProductsFilteredByPrice);
                setNewProducerQuantityProducts(finalProducerQuantity);
            }

            if (minPrice > 0 && maxPrice <= 0) {
                let finalProductsFilteredByPrice = [];
                let finalProducerQuantity = [];

                for (let i = 0; i < filteredProducts.length; i++) {
                    if (filteredProducts[i].price >= minPrice) {
                        finalProductsFilteredByPrice.push(filteredProducts[i]);
                    }
                }

                for (let i = 0; i < products.length; i++) {
                    if (products[i].price >= minPrice) {
                        finalProducerQuantity.push(products[i]);
                    }
                }

                setNewFilteredProducts(finalProductsFilteredByPrice);
                setNewProducerQuantityProducts(finalProducerQuantity);
            }

            if (maxPrice >= minPrice && minPrice <= 0) {
                let finalProductsFilteredByPrice = [];
                let finalProducerQuantity = [];

                for (let i = 0; i < filteredProducts.length; i++) {
                    if (filteredProducts[i].price <= maxPrice) {
                        finalProductsFilteredByPrice.push(filteredProducts[i]);
                    }
                }

                for (let i = 0; i < products.length; i++) {
                    if (products[i].price <= maxPrice) {
                        finalProducerQuantity.push(products[i]);
                    }
                }

                setNewFilteredProducts(finalProductsFilteredByPrice);
                setNewProducerQuantityProducts(finalProducerQuantity);
            }

            if (maxPrice <= minPrice && minPrice <= 0) {
                setNewFilteredProducts(filteredProducts);
                setNewProducerQuantityProducts(products);
            }
        }
    }, [filteredProducts, minPrice, maxPrice, products])

    if (selectedSorting === 'ascending') {
        newFilteredProducts.sort(sortAscending);
    } else {
        newFilteredProducts.sort(sortDescending);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //The Pagination component enables the user to select a specific page from a range of pages.
    let [page, setPage] = useState(1);
    const LIMIT_FOR_PAGE = 12;

    const [noOfPages, setNoOfPages] = React.useState(
        Math.ceil(newFilteredProducts.length / LIMIT_FOR_PAGE)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setNoOfPages(Math.ceil(newFilteredProducts.length / LIMIT_FOR_PAGE));
        setPage(1);
    }, [newFilteredProducts])

    return (
        <div className="flex justify-center font-[Roboto]">
            <div className="grid flex-col w-10/12 justify-center">
                <h1 className="col-span-4 font-light mt-4 text-sm mb-4">hardwarestore
                    > {capitalizeFirstLetter(categoryName)} > {capitalizeFirstLetter(subCategoryName.replace(/-/g, ' '))}</h1>
                <div className="grid grid-container grid-cols-4 gap-8">
                    <div className="col-span-4">
                        <h1 className="text-3xl font-bold inline-block">{capitalizeFirstLetter(subCategoryName.replace(/-/g, ' '))}</h1>
                        <h1 className="text-3xl font-light inline-block ml-2">({newFilteredProducts.length})</h1>
                    </div>
                    <div className="col-span-1 row-span-6 border-2 mb-12">
                        <h1 className="text-2xl font-semibold pl-4 pt-3">Filtry</h1>
                        <h1 className="text-xl font-semibold pl-4 pt-3 mb-2">Producenci</h1>
                        {
                            uniqueProducers.map((myproducers) => (
                                <div key={myproducers.producer} className="form-check form-check-inline">
                                    <input
                                        className="ml-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        onChange={() => handleToggle(myproducers.producer)} type="checkbox"
                                        id={'checkbox' + myproducers.producer} value={myproducers.producer}
                                        checked={Checked.indexOf(myproducers.producer) !== -1}/>
                                    <label className="form-check-label inline-block font-light"
                                           htmlFor="inlineCheckbox1">{myproducers.producer}</label>
                                    <label className="form-check-label inline-block font-light text-gray-400 ml-1"
                                           htmlFor="inlineCheckbox1">({newProducerQuantityProducts.filter(({producer}) => producer === myproducers.producer).length})</label>
                                </div>
                            ))
                        }
                        <h1 className="text-xl font-semibold pl-4 pt-3 mb-2">Cena</h1>
                        <input onChange={e => setMinPrice(parseInt(e.target.value, 10))}
                               className="border-2 w-24 ml-4 text-right inline-block" type="number"
                               placeholder="od     zł"/>
                        <div className="w-3 border-2 inline-block mx-2 mb-1"></div>
                        <input onChange={e => setMaxPrice(parseInt(e.target.value, 10))}
                               className="border-2 w-24 text-right inline-block" type="number" placeholder="do     zł"/>
                    </div>
                    <select onChange={e => setSelectedSorting(e.target.value)} id="sort" name="sort"
                            className="col-span-1 text-center p-2 ml-16 col-start-4 bg-m_gray">
                        <option value="ascending">Cena - rosnąco</option>
                        <option value="descending">Cena - malejąco</option>
                    </select>
                    {
                        newFilteredProducts.length > 0 ?
                            newFilteredProducts.slice((page - 1) * LIMIT_FOR_PAGE, page * LIMIT_FOR_PAGE).map((myproducts) => (

                                <Link key={myproducts.id} to={myproducts.link}>
                                    <div className="col-span-1 row-span-1 h-60 w-72">
                                        <img className="h-40" src={'../' + myproducts.imgThumbnail} alt=""/>
                                        <h1 className="font-normal mt-6">{myproducts.name}</h1>
                                        <h1 className="font-normal text-xl">{myproducts.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ', ')} zł</h1>
                                    </div>
                                </Link>

                            )) :
                            <div className="col-span-3 text-center">
                                <h1>
                                    Żaden produkt nie spełnia podanych kryteriów 🤔
                                </h1>
                            </div>
                    }
                    <div className="col-span-4">
                        <Pagination count={noOfPages} page={page} onChange={handleChange}
                                    disabled={noOfPages === 0 || noOfPages === 1}
                                    defaultPage={1} siblingCount={1}
                                    variant="outlined" shape="rounded" className="float-right"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
