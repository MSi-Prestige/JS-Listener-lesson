"use strict";

const butJs = document.querySelector("button");

// butJs.addEventListener("click", () => {
//     alert("cklick");
// });

// butJs.addEventListener("click", () => {       //! -------- click listener 
//     alert("second slick");
// });

butJs.addEventListener("mouseenter", () => {        //! ---------- mouse hover listener
    console.log("Hover-mouse");
});