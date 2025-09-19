import React from "react";
import { LuPin } from "react-icons/lu";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.58290845763!2d30.037332695222894!3d-1.9378893993733886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a40203f041%3A0x5f8434259d8c4393!2sKacyiru%2C%20Kigali!5e0!3m2!1sen!2srw!4v1758297381316!5m2!1sen!2srw";

const ContactPage = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="map">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="container">
          <div className="content">
            <form action="" className="form">
                <h2>Contact us</h2>
              <div className="input">
                <input type="text" placeholder="e.g. Kalisa Andrew" />
              </div>
              <div className="input">
                <input type="tel" name="" placeholder="250781234567" />
              </div>
              <div className="input">
                <input type="email" placeholder="example@chw.rw" />
              </div>
              <div className="input">
                <textarea name="message" placeholder="I want you help me with ..."></textarea>
              </div>
              <button>
                <span>Send Message</span>
              </button>
            </form>
            <div className="conts">
              <h2>Get In Touch</h2>

              <div className="div">
                <span className="icon">
                  <LuPin />
                </span>
                <ul>
                  <li>
                    <span>123 Kigali</span>
                  </li>
                  <li>
                    <span>Kigali, Rwanda</span>
                  </li>
                </ul>
              </div>
              <div className="div">
                <span className="icon">
                  <LuPin />
                </span>
                <ul>
                  <li>
                    <span>123 Kigali</span>
                  </li>
                  <li>
                    <span>Kigali, Rwanda</span>
                  </li>
                </ul>
              </div>
              <div className="div">
                <span className="icon">
                  <LuPin />
                </span>
                <ul>
                  <li>
                    <span>123 Kigali</span>
                  </li>
                  <li>
                    <span>Kigali, Rwanda</span>
                  </li>
                </ul>
              </div>
              <div className="div">
                <span className="icon">
                  <LuPin />
                </span>
                <ul>
                  <li>
                    <span>123 Kigali</span>
                  </li>
                  <li>
                    <span>Kigali, Rwanda</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
