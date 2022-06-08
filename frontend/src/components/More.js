import React from 'react';
import {useState} from "react";

const More = (props) => {
    const [icon, setIcon] = useState('ellipsis-vertical-outline');
    const [classToggle, setClassToggle] = useState('hidden');

    function onClickHandle() {
        if (classToggle === 'hidden')
            setClassToggle('block');
        else
            setClassToggle('hidden');
    }

    function dropDown() {
        if (props.options.length === 1) {
            return (
                <span className={classToggle}>
                    <h1 className="text-sm border-2 border-m_gray p-2">{props.options[0]}</h1>
                </span>
            );
        }
        if (props.options.length === 2) {
            return (
                <span className={classToggle}>
                    <h1 className="text-sm border-2 border-m_gray p-2">{props.options[0]}</h1>
                    <h1 className="text-sm border-x-2 border-b-2 border-m_gray p-2">{props.options[1]}</h1>
                </span>
            );
        }
    }

    return (<>
        <span className="float-right text-3xl mt-1 mr-1 hover:bg-n_gray pt-2 px-2 hover:cursor-pointer"
              onMouseEnter={() => setIcon('ellipsis-vertical')}
              onMouseLeave={() => setIcon('ellipsis-vertical-outline')}
              onClick={onClickHandle}>
            <ion-icon name={icon}></ion-icon>
        </span>
        <div className="shadow-md float-right mt-12 text-center">
            {dropDown()}
        </div>
    </>);
};

export default More;
