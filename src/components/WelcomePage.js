import {Link} from "react-router-dom";

export default function WelcomePage({username}){
    return (<div className={"center-aligned app-main"}>
        <h2>Hi @{username}</h2>
        <div className="subscriptions-list">
            <Link to={"/messages"}>
            <div className="subscription-card">
                <h2 className={"title"}>welcome to innercircles</h2>
                <p className="sub-count">@saransh + 20 subscribers</p>
            </div>
            </Link>
            <div className="subscription-card">
                <h2 className={"title"}>start new</h2>
                {/*<p className="sub-count">@saransh + 20 subscribers</p>*/}
            </div>
        </div>
    </div>)
}