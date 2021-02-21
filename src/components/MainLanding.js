import React from "react";
import {Link} from "react-router-dom";

export default function MainLanding(props) {
    return (
        <div className={"center-aligned"}>
            <h1>innercircles.com</h1>
            <p>Best way to create your community on the internet</p>
            <Link to="/signup">
                <button>
                    login/signup
                </button>
            </Link>
        </div>
    )
}