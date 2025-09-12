import React, { useState } from "react";
import {
  LuEllipsisVertical,
  LuListFilter,
  LuMailPlus,
  LuPaperclip,
  LuSearch,
  LuSend,
} from "react-icons/lu";
import { chats } from "../mock/messages"; // Your mock chat data
import { assets } from "../mock/asset";

const six_hours = 6 * 60 * 60 * 1000;

const TrainerMessage = () => {
  const [selectedChatId, setSelectedChatId] = useState(chats[0]?.id || null); // Default to first chat
  const currentChat = chats.find((chat) => chat.id === selectedChatId);

  const now = new Date();
  const sixHoursAgo = new Date(now.getTime() - six_hours);

  return (
    <div className="dashboard">
      <div className="chat-room">
        <div className="container">
          <div className="content">
            {/* Sidebar */}
            <div className="sidebar">
              <div className="title">
                <h2>Messages</h2>
                <div className="action">
                  <button>
                    <LuMailPlus />
                  </button>
                  <button className="filter">
                    <LuListFilter />
                  </button>
                </div>
              </div>

              {/* Search */}
              <div className="input">
                <input type="search" placeholder="Search..." />
                <span className="icon">
                  <LuSearch />
                </span>
              </div>

              {/* Users List */}
              <ul className="users-list">
                {chats.map((chat) => {
                  const lastMessage = chat.messages[chat.messages.length - 1];

                  const lastMessagTime = new Date(lastMessage.time);
                  const isRecent = lastMessagTime > sixHoursAgo;

                  return (
                    <li
                      key={chat.id}
                      onClick={() => setSelectedChatId(chat.id)}
                      className={`user-preview ${
                        selectedChatId === chat.id ? "active" : ""
                      }`}
                    >
                      <div className="image">
                        <img
                          src={chat.avatar || assets.userProfile}
                          alt={chat.name}
                        />
                      </div>
                      <div className="txt">
                        <div className="name">
                          <h3>{chat.name}</h3>
                          <span className="time">{lastMessage.time}</span>
                        </div>
                        <div className="msg">
                          <p>{lastMessage.text}</p>
                          {isRecent && <span className="new">1</span>}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Chat Window */}
            <div className="chat-window">
              {currentChat ? (
                <>
                  <div className="chat-header">
                    <div className="image">
                      <img loading="lazy" src={currentChat.avatar} alt={currentChat.name} />
                    </div>
                    <div className="input">
                      <div className="search">
                        <input type="search" placeholder="search in chat" />
                      </div>
                      <button>
                        <span>
                          <LuEllipsisVertical />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="chat-body">
                    {currentChat.messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`message-bubble ${
                          msg.isMyMessage ? "sent" : "received"
                        }`}
                      >
                        <div className="meta">
                          {!msg.isMyMessage && (
                            <span className="sender">{msg.sender}</span>
                          )}
                          <span className="time">{msg.time}</span>
                        </div>
                        <p>{msg.text}</p>

                        {msg.attachments?.map((file, i) => (
                          <img
                            key={i}
                            src={file}
                            className="attachment-preview"
                            alt="attachment"
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Message input */}
                  <div className="chat-footer">
                    <div className="input">
                      <textarea name="" placeholder="Message..."></textarea>
                      <span className="attach">
                        <LuPaperclip />
                      </span>
                    </div>
                    <button>
                      <span>
                        <LuSend />
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="empty-chat">
                  Select a chat to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerMessage;
