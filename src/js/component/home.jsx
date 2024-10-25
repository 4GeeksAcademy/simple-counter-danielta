import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


// let number = 0
// const counter = () => {
//     number++;
//     // let padNumber = String(number).padStart(6, '0');
//     let padNumber = "00000" + number
//     let result = padNumber.slice(-6)
//     const ctrArray = Array.from(counter())
// }


const Display = ({ctrArray}) => {
    console.log(ctrArray)
    return(
        <div className="justify-content-center" style={{display: "flex", background: "black", height: "15rem"}}>
            <h2 style={{color: "white", margin: "5px", fontSize: "175px"}}>{ctrArray[0]}</h2>
            <h2 style={{color: "white", margin: "5px", fontSize: "175px"}}>{ctrArray[1]}</h2>
            <h2 style={{color: "white", margin: "5px", fontSize: "175px"}}>{ctrArray[2]}</h2>
            <h2 style={{color: "white", margin: "5px", fontSize: "175px"}}>{ctrArray[3]}</h2>
            <h2 style={{color: "white", margin: "5px", fontSize: "175px"}}>{ctrArray[4]}</h2>
            <h2 style={{color: "white", margin: "5px", fontSize: "175px"}}>{ctrArray[5]}</h2>
        </div>
    )
};



export default Display;
