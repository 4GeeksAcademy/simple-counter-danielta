//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Display from "./component/home.jsx";


let number = 0
const counter = () => {
    number++;
    let padNumber = "00000" + number
    let result = padNumber.slice(-6)
    const ctrArray = Array.from(result)
    ReactDOM.createRoot(document.getElementById('app')).render(<Display ctrArray={ctrArray}/>);
}

setInterval(counter, 1000);


//render your react application


