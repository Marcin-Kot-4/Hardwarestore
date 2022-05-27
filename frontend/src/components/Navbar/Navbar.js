import React, {useState} from 'react';
// import {Link} from "react-router-dom";
// import Logo from '../../assets/Logo.png';
import NavLinks from "./NavLinks";
import Button from "../Button";
import ButtonPrimary from "./ButtonPrimary";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="md:bg-m_gray bg-white">
            <div className="flex items-center font-medium justify-center">
                <div className="z-50 p-5 md:hidden w-full flex justify-between items-center">
                    {/*<img src={Logo} alt="logo" className={"md:cursor-pointer h-9"}/>*/}
                    <h1 className="font-[Poppins] font-semibold">hardwarestore.com</h1>
                    {/* Mobile Hamburger*/}
                    <div className="text-2xl md:hidden flex items-center" onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                    </div>
                </div>
                <ul className="h-12 font-light text-base md:flex hidden uppercase items-center font-[Roboto]">
                    <li>
                        {/*<Link to={'/'} className="py-7 px-3 inline-block">*/}
                        {/*    Home*/}
                        {/*</Link>*/}
                    </li>
                    <NavLinks/>
                </ul>
                <div className="md:flex pl-10 hidden ">
                    <ButtonPrimary title={'SALE'}/>
                    <Button title={'POLECAMY'}/>
                </div>
                {/* --- Mobile navigation --- */}
                <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                    <li>
                        {/*<Link to={'/'} className="py-7 px-3 inline-block">*/}
                        {/*    Home*/}
                        {/*</Link>*/}
                    </li>
                    <NavLinks/>
                    <div className="py-5">
                        <ButtonPrimary title={'SALE'}/>
                        <Button title={'POLECAMY'}/>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
