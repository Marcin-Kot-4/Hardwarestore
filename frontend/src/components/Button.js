import React from 'react';

function Button(props) {
    return (
        <button className="hover:bg-black hover:text-white px-6 py-2 font-light">
            {props.title}
        </button>);
};

export default Button;
