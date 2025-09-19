import React, { useState } from "react";
import { chatDiscussion } from "../mock/other";
import { LuPaperclip, LuThumbsUp } from "react-icons/lu";

const ChatDiscussionComponent = () => {
  return (
    <div className="chat-container">
      {chatDiscussion.participants.map((participant, idx) => (
        <ChatMessage key={idx} participant={participant} />
      ))}
      <div className="chat-input">
        <textarea placeholder="Type here..." />
        <span className="attach">
          <LuPaperclip />
        </span>
        <button>Send Message</button>
      </div>
    </div>
  );
};

const ChatMessage = ({ participant }) => {
  const [showReplies, setShowReplies] = useState(false);

  return participant.messages.map((msg, i) => (
    <div className="chat-message" key={i}>
      <div className="avatar">
        <img src={participant.avatar} alt={participant.name} />
      </div>
      <div className="message-content">
        <div className="message-header">
          <span className="name">{participant.name}</span>
          <span className="date">{msg.date}</span>
        </div>
        <div className="text">{msg.content}</div>

        {msg.attachments && (
          <div className="attachment">
            <span>
              <LuPaperclip />
            </span>{" "}
            {msg.attachments.map((file, idx) => (
              <span key={idx} className="file">
                {file}
              </span>
            ))}
          </div>
        )}

        <div className="message-footer">
          <span className="likes">
            <span>
              <LuThumbsUp />
            </span>{" "}
            {msg.reactions?.likes || 0}
          </span>
          {msg.reactions?.replies?.length > 0 && (
            <button
              className="toggle-replies"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies
                ? "Hide replies"
                : `View ${msg.reactions.replies.length} reply${
                    msg.reactions.replies.length > 1 ? "ies" : ""
                  }`}
            </button>
          )}
        </div>

        {showReplies &&
          msg.reactions?.replies?.map((reply, rIdx) => (
            <div className="chat-reply" key={rIdx}>
              <div className="avatar small">
                <img src={reply.avatar} alt={reply.name} />
              </div>
              <div className="reply-content">
                <div className="message-header">
                  <span className="name">{reply.name}</span>
                  <span className="date">{reply.date}</span>
                </div>
                <div className="text">{reply.content}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  ));
};

export default ChatDiscussionComponent;
