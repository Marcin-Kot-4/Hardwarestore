import React, {useState} from 'react';

const TrashIcon = (props) => {
    const [icon, setIcon] = useState(props.iconName);

    return (
        <div className="hover:cursor-pointer"
            onMouseEnter={() => setIcon(props.iconNameHover)}
            onMouseLeave={() => setIcon(props.iconName)}>
            <div className="inline-flex align-middle text-center">
                <span className="text-xl text-center table-cell align-middle hover:text-primary">
                      <ion-icon name={icon}></ion-icon>
                </span>
            </div>
            <h1 className="ml-1 font-light inline-block">Wyczyść koszyk</h1>
        </div>
    );
};

export default TrashIcon;
