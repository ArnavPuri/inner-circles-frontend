import Twemoji from 'react-twemoji';
import {useState} from "react";

export default function MessageReaction(props) {
    let [count, setCount] = useState(props.count || 1);
    let [clicked, setClicked] = useState(false);
    let toggleReaction = (_event) => {
        let toAdd = 1;
        if (clicked) {
            toAdd = -1;
        }
        setClicked(!clicked);
        setCount(count + toAdd);
    }
    return (
        <Twemoji
            className={clicked ? "message-reaction message-reaction-clicked" : "message-reaction"}
            options={{className: 'message-reaction-twemoji'}}
            onClick={toggleReaction}
        >
        <span className="message-reaction-emoji" role="img" aria-label="bird">
          {props.emoji}
        </span>
            <span className="message-emoji-count">{count}</span>
        </Twemoji>
    )
}