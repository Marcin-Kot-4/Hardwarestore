import React from 'react';

function Button(props) {
    return (
        <button className="hover:bg-primary hover:text-white text-primary px-6 py-2 font-medium">
            {props.title}
        </button>);
};

export default Button;
