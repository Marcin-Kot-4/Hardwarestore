import React from 'react';
import HeaderIcons from "./HeaderIcons";
import Logo from "../../assets/Logo.png";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="flex xl:h-20 h-12">
            <div className="xl:flex justify-start w-5/12"></div>
            <Link to="/" className="xl:flex justify-center items-center w-2/12">
                <img src={Logo} alt="logo" className={"xl:cursor-pointer h-16"}/>
                <h1 className="pl-2 font-[Poppins] text-2xl font-semibold">hardwarestore.com</h1>
            </Link>
            <div className="xl:flex justify-end xl:w-4/12 w-8/12">
                <HeaderIcons authorized={props.authorized}/>
            </div>
        </div>
    );
};

export default Header;
