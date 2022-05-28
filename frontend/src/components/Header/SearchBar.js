import React from 'react';

const SearchBar = () => {
    return (
        <div
            className="h-12 xl:h-20 relative flex flex-col justify-center overflow-hidden">
            <div
                className="relative rounded-2xl content-center">
                <form action="" className="relative w-full h-full">
                    <input type="search"
                           className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text"/>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black-500 px-3.5"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
