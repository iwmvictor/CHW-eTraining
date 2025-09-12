import ImageGallery from "../components/ImageGallery";
import { assets, userProfiles } from "../mock/asset";
import { BrandPartners } from "./Homepage";

import "./../style/homepage.scss";
import { useState } from "react";

const mockdata = {
  hero: {
    title: "Who we are?",
    description:
      "Meet the talented individuals who bring our vision to life every day. With a shared passion and commitment, our team works tirelessly to deliver exceptional quality and innovation. Discover the stories, skills, and dedication that make us who we are.",
    image: assets.placeholderImg,
  },
  abt: `<p>Meet the talented individuals who bring our vision to life every day. With a shared passion and commitment, our team works tirelessly to deliver exceptional quality and innovation. Discover the stories, skills, and dedication that make us who we are.</p> <p>Meet the talented individuals who bring our vision to life every day. With a shared passion and commitment, our team works tirelessly to deliver exceptional quality and innovation. Discover the stories, skills, and dedication that make us who we are. Meet the talented individuals who bring our vision to life every day. With a shared passion and commitment, our team works tirelessly to deliver exceptional quality and innovation. Discover the stories, skills, and dedication that make us who we are.</p>`,
  bannerImg: assets.placeholderImg,
  numbers: [
    {
      num: "01",
      txt: "Year",
    },
    {
      num: "13+",
      txt: "Courses",
    },
    {
      num: "1.3k+",
      txt: "Users",
    },
  ],
  mission: {
    title: "Our Mission",
    txt: "Meet the talented individuals who bring our vision to life every day. With a shared passion and commitment, our team works tirelessly to deliver exceptional quality and innovation. Discover the stories, skills, and dedication that make us who we are.",
  },
  vision: {
    title: "Our Vision",
    txt: "Meet the talented individuals who bring our vision to life every day. With a shared passion and commitment, our team works tirelessly to deliver exceptional quality and innovation. Discover the stories, skills, and dedication that make us who we are.",
  },
  gallery: [
    { src: userProfiles.user1 },
    { src: userProfiles.user2 },
    { src: userProfiles.user3 },
    { src: userProfiles.user4 },
    { src: userProfiles.user5 },
    { src: userProfiles.user6 },
    { src: userProfiles.user7 },
    { src: userProfiles.user8 },
  ],

  faq: [
    {
      q: "What is this e-learning platform designed for?",
      a: "This platform is built to support Community Health Workers (CHWs), nurses, and other health professionals by providing accessible, up-to-date training and health education resources.",
    },
    {
      q: "Can I access courses offline?",
      a: "Yes, select courses and materials can be downloaded and accessed offline, making it easier for CHWs working in remote or low-connectivity areas.",
    },
    {
      q: "What types of content are available?",
      a: "The platform offers a variety of learning materials, including interactive modules, videos, quizzes, case studies, and downloadable reference guides tailored to health education and community outreach.",
    },
    {
      q: "Is the platform available in multiple languages?",
      a: "Yes, the platform supports multiple languages to ensure accessibility for diverse communities and regions. You can select your preferred language in the settings.",
    },
    {
      q: "How do I track my learning progress?",
      a: "Each user has a personalized dashboard where they can monitor their course completions, quiz scores, certificates earned, and areas needing improvement.",
    },
    {
      q: "Can organizations use this to train their staff?",
      a: "Absolutely. Health organizations can onboard their teams, assign learning paths, monitor progress, and generate training reports for compliance and capacity-building purposes.",
    },
  ],
};

const AboutPage = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFAQ = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <>
      <div className="about-page">
        <section className="hero">
          <div className="bg">
            <img src={assets.bg.abtHero} alt="" />
          </div>
          <div className="container">
            <div className="content">
              <h2>{mockdata.hero.title}</h2>
              <p>{mockdata.hero.description}</p>
            </div>
            <div className="brandedImg">
              <img src={mockdata.hero.image} alt="Branded Logo / Brand Image" />
            </div>
          </div>
        </section>
        <section className="about-contents">
          <div className="container">
            <div className="content">
              <div className="text">
                <div
                  className="txt"
                  dangerouslySetInnerHTML={{ __html: mockdata.abt }}
                ></div>
              </div>
              <div className="image">
                <div className="img">
                  <img src={mockdata.bannerImg} alt="" />
                </div>
                <ul>
                  {mockdata.numbers.map((item, i) => (
                    <li key={i}>
                      <h1>{item.num}</h1>
                      <p>{item.txt}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mission">
              <div className="div">
                <h2>{mockdata.mission.title}</h2>
                <p>{mockdata.mission.txt}</p>
              </div>
              <div className="div">
                <h2>{mockdata.vision.title}</h2>
                <p>{mockdata.vision.txt}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="container">
            <div className="content">
              <ImageGallery images={mockdata.gallery} />
            </div>
          </div>
        </section>

        <section className="faq">
          <div className="container">
            <div className="content">
              <div className="sec-title">
                <p>#FAQs</p>
                <h1>Frequently Asked Questions</h1>
              </div>
              <div className="question-list">
                {mockdata.faq.map((faq, index) => (
                  <div
                    className={`fa ${activeFaq === index ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                    key={index}
                  >
                    <h3>{faq.q}</h3>
                    {activeFaq === index && <p>{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BrandPartners />
      </div>
    </>
  );
};

export default AboutPage;
