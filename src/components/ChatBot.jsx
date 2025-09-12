import React, { useState } from "react";
import {
  LuBot,
  LuBotMessageSquare,
  LuForward,
  LuGrip,
  LuMic,
  LuPaperclip,
  LuX,
} from "react-icons/lu";
import { chatBot } from "../mock/messages";
import PrimaryLoader from "./Loader/PrimaryLoader";

const ChatBot = () => {
  const [chatModal, setChatModal] = useState(false);

  const handleChatModal = () => {
    setChatModal(!chatModal);
  };

  const lastBotMessage = chatBot
    .filter((chat) => chat.user === "bot")
    .slice(-1)[0];

  const lastMessageUser = chatBot.slice(-1)[0].user;

  return (
    <>
      <div className="chatbot-comp">
        <button onClick={handleChatModal}>
          <span>
            <LuBot />
          </span>
        </button>
        <span className="news">1</span>
      </div>

      {chatModal && (
        <div className="bot-modal">
          <div className="chat-card">
            <div className="chat-header">
              <div className="logo">
                <span>
                  <LuBotMessageSquare />
                </span>
              </div>
              <div className="action">
                <button className="grip">
                  <span>
                    <LuGrip />
                  </span>
                </button>
                <button onClick={handleChatModal}>
                  <span>
                    <LuX />
                  </span>
                </button>
              </div>
            </div>
            <div className="chat-body">
              {chatBot.map((chat, index) => (
                <div
                  key={index}
                  className={
                    chat.user === "bot" ? "received msg-card" : "sent msg-card"
                  }
                >
                  <div
                    className="msg"
                    dangerouslySetInnerHTML={{ __html: chat.message }}
                  ></div>
                </div>
              ))}
              {lastMessageUser && (
                <div className="bot-loader">
                  <PrimaryLoader />
                </div>
              )}
            </div>
            <div className="chat-input">
              <textarea name="" id=""></textarea>
              <span className="upload">
                <LuPaperclip />
              </span>

              <button>
                <span>
                  <LuForward />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
