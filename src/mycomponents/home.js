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
export default function Home() {

    const [name, setname] = useState("");

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 offset-sm-3 text-center">
                    <div className="card myCard">
                    <h5 className="card-title text-muted text-center">Open Chat Room</h5>

                        <div className="card-body">
                            <input onKeyPress={(event) => event.key === 'Enter' ? event.preventDefault() : null}
                                onChange={(e) => setname(e.target.value)} className="form-control inputname" id="inputname" type="text"
                                placeholder="Enter your name" />
                            <br />
                            <Link className="go btn btn-primary mt-3"
                                onClick={(event) => name === '' ? event.preventDefault() : click()} to="/chat">Enter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export { userName };

