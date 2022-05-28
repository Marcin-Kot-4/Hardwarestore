import React from "react";

const Item = ({ Links, title }) => {
    return (
        <ul className="border-l-2 border-gray-300 pl-6">
            <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((link) => (
                <li key={link.name}>
                    <a className="font-light text-black hover:text-primary duration-300 text-sm cursor-pointer leading-6"
                        href={link.link} >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Item;
