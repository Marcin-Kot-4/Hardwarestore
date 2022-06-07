import React from 'react';
import {useState} from "react";

const SmallTrashIcon = (props) => {
    const [icon, setIcon] = useState(props.iconName);

    return (
        <div className="hover:cursor-pointer"
             onMouseEnter={() => setIcon(props.iconNameHover)}
             onMouseLeave={() => setIcon(props.iconName)}>
            <span className="inline-block text-xl text-center table-cell align-middle hover:text-primary">
                <ion-icon name={icon}></ion-icon>
            </span>
        </div>
    );
};

export default SmallTrashIcon;
