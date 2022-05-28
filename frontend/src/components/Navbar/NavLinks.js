import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {links} from "./Mylinks";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {
                links.map((link) => (
                    <div key={link.key}>
                        <div className="h-12 text-left xl:cursor-pointer group">
                            {/* Toggle subLinks on mobile devices */}
                            <h1 className="h-12 hover:text-white hover:bg-black font-light flex justify-between items-center
                             xl:pr-2 xl:pl-3 pl-5 pr-5 group group-hover:bg-black group-hover:text-white"
                                onClick={() => {
                                    heading !== link.name ? setHeading(link.name) : setHeading("");
                                    setSubHeading("");
                                }}>
                                {link.name}
                                {/* Mobile chevron */}
                                <span className="text-xl xl:hidden inline">
                                    <ion-icon
                                        name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                </span>
                                {/* Desktop chevron */}
                                <span
                                    className="text-lg xl:mt-1 xl:ml-1 xl:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                    <ion-icon
                                        name="chevron-down"></ion-icon>
                                </span>
                            </h1>
                            {link.submenu && (
                                <div>
                                    <div
                                        className="absolute top-28 pt-1 hidden  group-hover:xl:block hover:xl:block">
                                        <div className="py-3">
                                            <div className="w-4 h-4 left-3 absolute mt-1 bg-m_gray rotate-45"></div>
                                        </div>
                                        <div className="bg-m_gray p-5 grid grid-cols-3 gap-10">
                                            {
                                                link.sublinks.map((mysublinks) => (
                                                    <div>
                                                        <h1 className="font-normal">{mysublinks.Head}</h1>
                                                        {mysublinks.sublink.map(sublink => (
                                                            <li className="text-sm text-gray-600 my-2.5">
                                                                <Link to={sublink.link}
                                                                      className="hover:text-primary">{sublink.name}</Link>
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
                        {/* Mobile dropdown menu */}
                        <div className={`
                            ${heading === link.name ? 'xl:hidden' : 'hidden'}
                        `}>
                            {/* subLinks */}
                            {
                                link.sublinks.map((sublinks) => (
                                    <div>
                                        <div>
                                            {/* Toggle subSubLinks */}
                                            <h1 onClick={() =>
                                                subHeading !== sublinks.Head ?
                                                    setSubHeading(sublinks.Head)
                                                    : setSubHeading("")
                                            }
                                                className="py-4 pl-7 font-normal xl:pr-0 pr-5 flex justify-between items-center">
                                                {sublinks.Head}
                                                <span className="text-xl xl:mt-1 xl:ml-2 inline">
                                    <ion-icon
                                        name={`${subHeading === sublinks.Head ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                </span>
                                            </h1>
                                            <div className={`${
                                                subHeading === sublinks.Head ? "xl:hidden" : "hidden"
                                            }`}>
                                                {sublinks.sublink.map(sublink => (
                                                    <li className="py-3 pl-14">
                                                        <Link to={sublink.link}
                                                              className="hover:text-primary font-light">
                                                            {sublink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default NavLinks;
