import React from 'react';
import Icon from "../Icon";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

const HeaderIcons = () => {
    return (
        <div className="w-full h-20 flex justify-end">
            <SearchBar></SearchBar>
            <Link to="/login">
                <Icon text="Zaloguj się" iconName="person-outline" iconNameHover="person"></Icon>
            </Link>
            <Icon text="Ulubione" iconName="heart-outline" iconNameHover="heart"></Icon>
            <Link to="/koszyk">
                <Icon text="Koszyk" iconName="basket-outline" iconNameHover="basket"></Icon>
            </Link>
        </div>
    );
};

export default HeaderIcons;
