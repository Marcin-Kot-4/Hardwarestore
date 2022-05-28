import React from "react";
import "./Slider.css";

export default function ButtonSlider({ direction, moveSlide }) {
    // console.log(direction, moveSlide);
    return (
        // returns button styled and positioned - left or right button depending on props values
        // passed function "moveSlide" by props - this function is changing the slides (in Slider.js we have 2 functions)
        // one is responsible for changing to previous slide and second for next slide
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <span className="text-3xl items-center w-full h-full flex justify-center">
                <ion-icon
                    name={`${direction === "next" ? "chevron-forward" : "chevron-back"}`}></ion-icon>
            </span>
        </button>
    );
}
