import React from "react";
import { LuArrowLeft, LuDownload } from "react-icons/lu";
import { assets } from "../mock/asset";
import { useNavigate } from "react-router-dom";
import { slugify } from "../mock/functions";

const data = {
  title: "HIV and Sexual Transmitted Diseases",
  marks: "32/50",
  message:
    "You have successfully completed the course and passed the CHW test for this particular program",
};

const StudentLearningComplete = () => {
  const navigate = useNavigate();

  const title = data.title;
  const slug = slugify(title);

  const handleNavCertificate = () => {
    navigate(`/trainee/course/certificate/${slug}`);
  };

  return (
    <>
      <div className="dashboard">
        <div className="student-learning-completed">
          <div className="container">
            <div className="content">
              <div className="back">
                <button>
                  <span>
                    <LuArrowLeft />
                  </span>
                  <span>Go Back</span>
                </button>
              </div>
              <h2>{data.title}</h2> {/* course name */}
              <div className="info-container">
                <div className="image">
                  <img loading="lazy" src={assets.medal}  />
                </div>
                <div className="text">
                  <h3>Conglatulations!</h3>
                  <p>{data.message}</p>
                  <span className="marks">{data.marks}</span>
                  <button onClick={handleNavCertificate}>
                    <span>
                      <LuDownload />
                    </span>
                    <span>Get Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLearningComplete;
