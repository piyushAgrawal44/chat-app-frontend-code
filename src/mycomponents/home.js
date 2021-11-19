import React, { useState } from 'react';
import './home.css';

import {
    Link
} from "react-router-dom";

var userName;
function click() {
    userName = document.getElementById('inputname').value;
    document.getElementById('inputname').value = "";
    
}
export default function Home(){

    const [name, setname] = useState("");
   
    return (
       
            <div className="container bg-dark text-light text-center">
                <h1 className="text-center temp">Welcome to Unique Chat app</h1>
                <input onKeyPress={(event) => event.key === 'Enter'?event.preventDefault():null} onChange={(e)=>setname(e.target.value)} className="inputname" id="inputname" type="text" placeholder="enter your name" />
                <br />
                <Link  className="go btn btn-lg btn-primary mt-3" onClick={(event)=> name===''?event.preventDefault(): click()} to="/chat">Go!!</Link>
            </div>

       
    )
}

export {userName};

