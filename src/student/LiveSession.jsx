import {
  LuActivity,
  LuCamera,
  LuCameraOff,
  LuEllipsis,
  LuForward,
  LuMic,
  LuMicOff,
  LuPaperclip,
  LuShare2,
  LuUpload,
  LuUsersRound,
  LuVoicemail,
  LuVolume2,
  LuVolumeX,
} from "react-icons/lu";
import { userProfiles } from "../mock/asset";
import React, { useState } from "react";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
};

const liveImg =
  "https://d287ku8w5owj51.cloudfront.net/inline/products/24210/images/10-livemeeting.jpg?width=750";

const datas = {
  title: "Chap 1: Understanding AIDS & HIV",
  date: new Date().toLocaleDateString("en-Us", options),
  pasticipants: [
    {
      name: "Kaneza A.",
      role: "CHW",
      profile: userProfiles.user1,
    },
    {
      name: "Abacu A.",
      role: "Trainee",
      profile: userProfiles.user5,
    },
    {
      name: "Aline A.",
      role: "CHW",
      profile: userProfiles.user6,
    },
    {
      name: "Kabela A.",
      role: "Trainee",
      profile: userProfiles.user7,
    },
    {
      name: "Thadeo A.",
      role: "CHW",
      profile: userProfiles.user4,
    },
    {
      name: "Frey A.",
      role: "CHW",
      profile: userProfiles.user3,
    },
    {
      name: "Ferdinand A.",
      role: "CHW",
      profile: userProfiles.user2,
    },
    {
      name: "Kaneza A.",
      role: "CHW",
      profile: userProfiles.user8,
    },
    {
      name: "Kaneza A.",
      role: "CHW",
      profile: userProfiles.user9,
    },
    {
      name: "Kaneza A.",
      role: "CHW",
      profile: userProfiles.user3,
    },
    {
      name: "Kaneza A.",
      role: "CHW",
      profile: userProfiles.user2,
    },
    {
      name: "Kaneza A.",
      role: "CHW",
      profile: userProfiles.user2,
    },
    {
      name: "Kaneza A.",
      role: "CHW",
      profile: userProfiles.user8,
    },
  ],
  messages: [
    {
      id: 1,
      user: "Gatare E.",
      profile: userProfiles.user1,
      message: "Hi David, Which one do you think is better?",
    },
    {
      id: 2,
      user: "Gatare E.",
      profile: userProfiles.user2,
      message: "Hi David, Which one do you think is better?",
    },
    {
      id: 3,
      user: "Gatare E.",
      profile: userProfiles.user3,
      message: "Hi David, Which one do you think is better?",
    },
    {
      id: 4,
      user: "Gatare E.",
      profile: userProfiles.user6,

      message: "Hi David, Which one do you think is better?",
    },
    {
      id: 5,
      user: "Kamana",
      profile: userProfiles.user5,
      message: "Hi David, Which one do you think is better?",
    },
  ],
  screenBg: liveImg,
  duration: "02:33",
  volume: 65,
};

const StudentLiveSession = () => {
  const [muted, setMuted] = useState(false);
  const [camera, setCamera] = useState(false);
  const [volume, setVolume] = useState(true);

  const handleMute = () => {
    setMuted(!muted);
  };

  const handleCamera = () => {
    setCamera(!camera);
  };

  const handleVolume = () => {
    setVolume(!volume);
  };

  const volumeLvl = 66;

  const maxVisible = 5;
  const participants = datas.pasticipants || [];
  const visibleParticipants = participants.slice(0, maxVisible);
  const extraCount = participants.length - maxVisible;

  // Timer state and effect
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Start timer on mount
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format seconds to mm:ss
  const formatDuration = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div>
      <div className="dashboard">
        <div className="student-live-session">
          <div className="container">
            <div className="content">
              <div className="main">
                <div className="titles">
                  <div className="text">
                    <h2>{datas.title}</h2>
                    <div className="div">
                      <span>{datas.date} — </span>
                      <span>
                        <span>
                          <LuUsersRound />
                        </span>
                        <span>{participants.length} participants</span>
                      </span>
                    </div>
                  </div>
                  <div className="action">
                    <button className="share">
                      <span>
                        <LuShare2 />
                      </span>
                      <span>Share</span>
                    </button>
                    <button className="more">
                      <span>
                        <LuEllipsis />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="video-container">
                  <div className="image">
                    <img loading="lazy" src={datas.screenBg} alt="" />
                  </div>
                  <div className="duration">
                    <span>
                      <LuActivity />
                    </span>
                    <span>{formatDuration(secondsElapsed)}</span>
                  </div>
                  <ul className="participants">
                    {visibleParticipants.map((item, index) => (
                      <li
                        className={
                          item.role === "CHW" ? "blue at-card" : "at-card"
                        }
                        key={index}
                      >
                        <img loading="lazy" src={item.profile} alt="" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                    {extraCount > 0 && (
                      <li className="more-participants" key="more">
                        <h3> +{extraCount} </h3>
                        <p>participants</p>
                      </li>
                    )}
                  </ul>
                  <div className="volume">
                    <span
                      className={volume ? "display bar" : "bar"}
                      title={`${volumeLvl}%`}
                    >
                      <div className="level">
                        <div
                          className="lvl"
                          style={{ height: `${volumeLvl}%` }}
                        ></div>
                      </div>
                    </span>
                    <span onClick={handleVolume} className="icon">
                      {volume ? <LuVolume2 /> : <LuVolumeX />}
                    </span>
                  </div>
                  <div className="controls">
                    <button
                      className={muted ? "voice" : "voice active"}
                      onClick={handleMute}
                    >
                      <span>{muted ? <LuMicOff /> : <LuMic />}</span>
                    </button>
                    <button
                      className={camera ? "camera active" : "camera"}
                      onClick={handleCamera}
                    >
                      <span>{camera ? <LuCamera /> : <LuCameraOff />}</span>
                    </button>
                    <button className="cancel">
                      <span>
                        <LuVoicemail />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="messages">
                <div className="title">
                  <h3>Messages</h3>
                </div>
                <ul className="message-list">
                  {datas.messages.map((item, index) => (
                    <li
                      key={index}
                      className={item.user === "Kamana" ? "me" : ""}
                    >
                      <div className="info">
                        <div className="img">
                          <img loading="lazy" src={item.profile} alt="" />
                        </div>
                        <span className="name">{item.user}</span>
                        <span className="time">3:40 PM</span>
                      </div>
                      <div className="msg">
                        <p>{item.message}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="input">
                  <textarea placeholder="Type here.."></textarea>
                  <span className="attach">
                    <LuPaperclip />
                  </span>
                  <button className="send">
                    <span>
                      <LuForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLiveSession;
