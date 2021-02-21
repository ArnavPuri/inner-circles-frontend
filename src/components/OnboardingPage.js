import React, {useState} from "react";
import {Link} from "react-router-dom";


export default function OnboardingPage(props) {
    let [userName, setUserName] = useState('');
    return (<div className={"center-aligned"}>
        <h1>Welcome to innercircles.com</h1>
        <h2>Secure your @username</h2>
        <div className={"input-group"}>
            <input type="text" name="username" placeholder="elonMusk" onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <Link to="/welcome">
            <button disabled={userName.trim() == ''} >confirm</button>
        </Link>
    </div>)
}