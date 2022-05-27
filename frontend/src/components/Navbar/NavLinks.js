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
                        <div className="px-3 text-left md:cursor-pointer group">
                            {/* Toggle subLinks on mobile devices */}
                            <h1 className="py-7 font-light flex justify-between items-center md:pr-0 pr-5 group"
                                onClick={() => {
                                    heading !== link.name ? setHeading(link.name) : setHeading("");
                                    setSubHeading("");
                                }}>
                                {link.name}
                                {/* Mobile chevron */}
                                <span className="text-xl md:hidden inline">
                                    <ion-icon
                                        name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                </span>
                                {/* Desktop chevron */}
                                <span
                                    className="text-lg md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                    <ion-icon
                                        name="chevron-down"></ion-icon>
                                </span>
                            </h1>
                            {link.submenu && (
                                <div>
                                    <div className="absolute top-10 hidden group-hover:md:block hover:md:block">
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
                            ${heading === link.name ? 'md:hidden' : 'hidden'}
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
                                                className="py-4 pl-7 font-normal md:pr-0 pr-5 flex justify-between items-center">
                                                {sublinks.Head}
                                                <span className="text-xl md:mt-1 md:ml-2 inline">
                                    <ion-icon
                                        name={`${subHeading === sublinks.Head ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                </span>
                                            </h1>
                                            <div className={`${
                                                subHeading === sublinks.Head ? "md:hidden" : "hidden"
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
