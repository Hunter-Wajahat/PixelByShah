import React from 'react'
import './chatbox.css'
const ChatInbox = () => {
  return (
    <div className="chatCard">
    <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        className="chatAvatar"
    />

    <div className="chatContent">
        <div className="chatHeader">
            <span className="chatName">Ali Raza</span>
            <span className="chatTime">2 min ago</span>
        </div>

        <div className="chatBubble">
            Hey! I finally finished the portfolio design. Let me know what you
            think.
        </div>
    </div>
</div>
  )
}

export default ChatInbox
