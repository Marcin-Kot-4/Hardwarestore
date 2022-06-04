import React, {useState} from 'react';
// import {Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "../Button";
import ButtonPrimary from "./ButtonPrimary";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (<nav className="xl:bg-m_gray bg-white">
        <div className="flex font-medium">
            <div className="z-50 px-5 h-10 xl:hidden w-full flex justify-between items-center">
                <h1 className="font-[Poppins] font-semibold">hardwarestore.com</h1>
                {/* Mobile Hamburger*/}
                <div className="text-2xl xl:hidden flex items-center" onClick={() => setOpen(!open)}>
                    <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                </div>
            </div>
            {/* empty div for positioning */}
            <div className="xl:flex hidden w-2/12"></div>
            <ul className="h-12 xl:w-8/12 font-light text-base xl:flex justify-center hidden uppercase items-center font-[Roboto]">
                <NavLinks/>
            </ul>
            <div className="xl:flex hidden w-1/12 justify-end font-[Roboto]">
                <ButtonPrimary title={'SALE'}/>
                <Button title={'POLECAMY'}/>
            </div>
            {/* --- Mobile navigation --- */}
            <ul className={`xl:hidden bg-white absolute w-full h-full bottom-0 py-24 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                <NavLinks/>
                <div className="py-5">
                    <ButtonPrimary title={'SALE'}/>
                    <Button title={'POLECAMY'}/>
                </div>
            </ul>
        </div>
    </nav>);
};

export default Navbar;
