import React, {useState} from 'react';

const HeaderIcon = (props) => {
    const [icon, setIcon] = useState(props.iconName);

    return (
        <div className="w-16 xl:h-20 h-12 z-50 text-center table">
            <span className="text-3xl text-center table-cell align-middle hover:cursor-pointer hover:text-primary"
                  onMouseEnter={() => setIcon(props.iconNameHover)}
                  onMouseLeave={() => setIcon(props.iconName)}>
                <ion-icon name={icon}></ion-icon>
                <h2 className="xl:text-xs xl:grid hidden">{props.text}</h2>
            </span>
        </div>
    );
};

export default HeaderIcon;
