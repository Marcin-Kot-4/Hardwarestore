import React from 'react';
import HeaderIcon from "../HeaderIcon";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import AuthService from "../../services/auth.service";

const HeaderIcons = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="w-full h-20 flex justify-end">
            <SearchBar></SearchBar>
            {currentUser ?
                <Link to="/mojekonto">
                    <HeaderIcon text="Moje konto" iconName="person-outline" iconNameHover="person"></HeaderIcon>
                </Link>
                :
                <Link to="/login">
                    <HeaderIcon text="Zaloguj się" iconName="person-outline" iconNameHover="person"></HeaderIcon>
                </Link>}

            <HeaderIcon text="Ulubione" iconName="heart-outline" iconNameHover="heart"></HeaderIcon>
            <Link to="/koszyk">
                <HeaderIcon text="Koszyk" iconName="basket-outline" iconNameHover="basket"></HeaderIcon>
            </Link>
        </div>
    );
};

export default HeaderIcons;
