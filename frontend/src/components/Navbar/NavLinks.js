import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const NavLinks = () => {
    const [categoriesList, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/categories/all")
            .then(response => response.json())
            .then((result) => {
                    setCategories(result);
                }
            )
    }, [])

    return (
        <>
            { categoriesList.length > 0 ?
                categoriesList.map((mainCategory) => (
                    <div key={mainCategory.id}>
                        <div className="h-12 text-left xl:cursor-pointer group">
                            <h1 className="h-12 hover:text-white hover:bg-black font-light flex justify-between items-center
                             xl:pr-2 xl:pl-3 pl-5 pr-5 group group-hover:bg-black group-hover:text-white">
                                {mainCategory.name}
                                <span
                                    className="text-lg xl:mt-1 xl:ml-1 xl:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                    <ion-icon
                                        name="chevron-down"></ion-icon>
                                </span>
                            </h1>
                            {(
                                <div>
                                    <div
                                        className="absolute z-50 top-28 pt-1 hidden  group-hover:xl:block hover:xl:block">
                                        <div className="py-3">
                                            <div className="w-4 h-4 left-3 absolute mt-1 bg-m_gray rotate-45"></div>
                                        </div>
                                        <div className="bg-m_gray p-5 grid grid-cols-3 gap-10">
                                            {
                                                mainCategory.categories.map((category) => (
                                                    <div>
                                                        <h1 className="font-normal">{category.name}</h1>
                                                        {category.subCategories.map(subCategory => (
                                                            <li className="text-sm text-gray-600 my-2.5">
                                                                <Link to={subCategory.link}
                                                                      className="hover:text-primary">{subCategory.name}</Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))
                :
                <div>Cannot fetch data</div>
            }
        </>
    );
};

export default NavLinks;
