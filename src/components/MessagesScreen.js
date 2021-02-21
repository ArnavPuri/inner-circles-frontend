import MessageReaction from "./MessageReaction";

export default function MessagesScreen({username}) {
    return (
        <div className={"center-aligned list-screen"}>
            <h2>Hi @saransh</h2>
            <div className="messages-list">
                <div className="message-card-container">
                    <div className={"message-card"}>
                    <div className="message">
                        <h3>Welcome to innercircles</h3>
                        <p>We are building a great way to manage your community. Keep your followers/listeners/viewers
                            engaged. Provide them high value content and connect with them closely.</p>
                        <div className={"bullet-list-container"}>
                            Some highlights
                            <ul className={"bullet-list"}>
                                <li>Send messages or newsletters or announcements to all</li>
                                <li>Get feedback via reactions or DMs</li>
                                <li>Sell your products to your community</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="emoji-container">
                        <MessageReaction emoji={"🔥"} count={8}/>
                        <MessageReaction emoji={"♥️"} count={6}/>
                        <MessageReaction emoji={"👍"}/>
                    </div>
                </div>

            </div>
        </div>
    )
}