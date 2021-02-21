import {useState} from "react";
import {Link} from "react-router-dom";

export default function LoginSignup(props) {
    let [isEnteringPhone, setEnteringPhone] = useState(true);

    return (<div className="center-aligned">
        <h1>signup</h1>

        {isEnteringPhone ?
            <div className="center-aligned">
                <div className="input-group prefix-suffix">
                    <span className="input-group-addon prefix">+91</span>
                    <input type="tel" name="contact-no" placeholder="1234567890"/>
                    <span className="input-group-addon suffix">Phone no.</span>
                </div>
                <button onClick={(e) => setEnteringPhone(false)}>next</button>
            </div> : <div className="center-aligned">
                <div className="input-group">
                    <input type="number" name="otp" placeholder="Enter OTP"/>
                </div>
                <Link to="/onboarding">
                    <button>>confirm</button>
                </Link>
            </div>
        }
    </div>)
}