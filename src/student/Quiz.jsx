import React, { useState, useEffect, useRef } from "react";
import { LuArrowLeft, LuDownload, LuMoveRight, LuUndo2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { assessment } from "../mock/quiz";
import jsPDF from "jspdf";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";
import { slugify } from "../mock/functions";

const StudentQuizPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("instructions");
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [visitedQuestions, setVisitedQuestions] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const answerRef = useRef(null);

  const celebrate = () => {
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };
  const handleGoToCertificate = () => {
    navigate(`/trainee/course/certificate/${slugify(assessment.title)}`);
    celebrate();
  };

  const totalQuestions = assessment.questions.length;

  const handleNavBack = () => navigate(-1);

  const handleStartQuiz = () => {
    setStep("quiz");
    setVisitedQuestions([0]); // mark first question as visited
  };

  const handleAnswerSelect = (optionKey) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ]: optionKey,
    }));
  };

  const goNext = () => {
    if (currentQ < totalQuestions - 1) {
      const nextQ = currentQ + 1;
      if (!visitedQuestions.includes(nextQ)) {
        setVisitedQuestions((prev) => [...prev, nextQ]);
      }
      setCurrentQ(nextQ);
    }
  };

  const goPrev = () => {
    if (currentQ > 0) {
      const prevQ = currentQ - 1;
      if (!visitedQuestions.includes(prevQ)) {
        setVisitedQuestions((prev) => [...prev, prevQ]);
      }
      setCurrentQ(prevQ);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    let totalMarks = 0;

    assessment.questions.forEach((q, index) => {
      totalMarks += q.marks;
      if (userAnswers[index] === q.answer) {
        score += q.marks;
      }
    });

    const percentage = (score / totalMarks) * 100;
    const passed = percentage >= assessment.passingScore;

    setResult({ score, totalMarks, percentage, passed });
    setStep("result");
    setSubmitted(true);
    celebrate();
  };

  const handleRetry = () => {
    setCurrentQ(0);
    setUserAnswers({});
    setVisitedQuestions([]);
    setResult(null);
    setSubmitted(false);
    setStep("quiz");
  };

  const handleShowAnswers = () => setStep("answers");

  const getStatusClass = (index) => {
    if (index === currentQ) return "active";
    if (userAnswers[index]) return "answered";
    if (visitedQuestions.includes(index)) return "skipped";
    if (index > Math.max(...visitedQuestions)) return "not-visited";
    return "";
  };

  const downloadPDF = () => {
    const input = answerRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth - 20; // add margin (10mm on each side)
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      let position = 10; // initial top margin
      let heightLeft = imgHeight;

      while (heightLeft > 0) {
        pdf.addImage(
          imgData,
          "PNG",
          10, // x margin
          position,
          imgWidth,
          imgHeight
        );
        heightLeft -= pdfHeight;
        if (heightLeft > 0) {
          pdf.addPage();
          position = -pdfHeight + 10;
        }
      }

      // pdf.save("quiz_answer_syllabus.pdf");
      pdf.save(`${assessment.title} — quiz answer syllabus.pdf`)
    });
  };

  return (
    <div className="dashboard">
      <div className="student-enroll-quiz-page">
        <div className="container">
          {/* === INSTRUCTIONS === */}
          {step === "instructions" && (
            <div className="guideline">
              <div className="content">
                <div className="back">
                  <button onClick={handleNavBack}>
                    <LuArrowLeft /> Go Back
                  </button>
                </div>
                <div className="divz">
                  <div>
                    <h2>📘 Quiz Instructions</h2>
                    <p>📚 Course: {assessment.title}</p>
                    <ul className="left">
                      <li>Total Questions: {totalQuestions}</li>
                      <li>Question Type: Multiple Choice</li>
                      <li>Time Limit: {assessment.timeLimitMinutes} minutes</li>
                      <li>Passing Score: {assessment.passingScore}%</li>
                    </ul>
                  </div>
                  <div>
                    {" "}
                    <div className="right">
                      <h2>Guidelines:</h2>
                      <ul>
                        {assessment.instructions.map((g, i) => (
                          <li key={i}>
                            {i + 1}. {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="start-btn">
                      <button onClick={handleStartQuiz}>
                        <span>Start Quiz</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* === QUIZ === */}
          {step === "quiz" && (
            <div className="questions">
              <div className="content">
                <div className="question-main">
                  <h2>Q: {currentQ + 1}</h2>
                  <div className="qa">
                    <div className="question-box">
                      <span>{assessment.questions[currentQ].question}</span>
                    </div>
                    <ul className="optional-answers">
                      {Object.entries(
                        assessment.questions[currentQ].options
                      ).map(([key, value]) => (
                        <li
                          key={key}
                          className={
                            userAnswers[currentQ] === key ? "selected" : ""
                          }
                          onClick={() => handleAnswerSelect(key)}
                        >
                          {key}. {value}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="buttons">
                    <button
                      className="prev"
                      onClick={goPrev}
                      disabled={currentQ === 0}
                    >
                      <LuUndo2 /> Prev
                    </button>
                    {currentQ < totalQuestions - 1 ? (
                      <button className="next" onClick={goNext}>
                        Save and Next <LuMoveRight />
                      </button>
                    ) : (
                      <button className="next" onClick={handleSubmitQuiz}>
                        Submit Quiz <LuMoveRight />
                      </button>
                    )}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="question-sidebar">
                  <div className="timer">
                    <p>Time remaining:</p>
                    <h2>00 : 15 : 32</h2>
                  </div>

                  <div className="q-paginated">
                    {assessment.questions.map((_, index) => (
                      <div
                        key={index}
                        className={`box ${getStatusClass(index)}`}
                        onClick={() => {
                          if (!visitedQuestions.includes(index)) {
                            setVisitedQuestions((prev) => [...prev, index]);
                          }
                          setCurrentQ(index);
                        }}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>

                  <div className="color-guide">
                    <li>
                      <span className="box answered"></span> Answered
                    </li>
                    <li>
                      <span className="box skipped"></span> Skipped
                    </li>
                    <li>
                      <span className="box not-visited"></span> Not Visited
                    </li>
                    <li>
                      <span className="box active"></span> Active
                    </li>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* === RESULT === */}
          {step === "result" && result && (
            <div className="marks">
              {showConfetti && result.passed && <Confetti />}
              <div className="content">
                <p>🎉 {result.passed ? "Congratulations!" : "Oops!"}</p>
                <h3>
                  You have {result.passed ? "passed" : "completed"} the{" "}
                  <span>{assessment.title}</span> test.
                </h3>
                <h1 title={`${result.score}/${result.totalMarks}`}>
                  {Math.round(result.percentage)}%
                </h1>

                <div className="action">
                  {result.passed ? (
                    <>
                      <button onClick={handleGoToCertificate} className="btn">
                        <span>Get Certificate</span>
                      </button>
                      <button className="answer" onClick={handleShowAnswers}>
                        <span>View Answers</span>
                      </button>
                    </>
                  ) : (
                    <button className="btn" onClick={handleRetry}>
                      <span>Retry Assessment</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* === ANSWERS === */}
          {step === "answers" && (
            <div className="answers">
              <div className="content">
                <div className="actions">
                  <div className="back">
                    <button onClick={() => navigate(-1)}>
                      <span>
                        <LuArrowLeft />
                      </span>
                      <span>Assessments</span>
                    </button>
                  </div>
                  <div>
                    <button className="download" onClick={downloadPDF}>
                      <span>
                        <LuDownload />
                      </span>
                      <span className="txt">Answers Sylabus</span>
                    </button>
                  </div>
                </div>
                <h3>Here are the correct answers for all questions</h3>

                <div className="qa-list" ref={answerRef}>
                  {assessment.questions.map((q, index) => (
                    <div className="q-a" key={index}>
                      <h3>
                        Q{index + 1}: {q.question}
                      </h3>
                      <ul>
                        {Object.entries(q.options).map(([key, val]) => (
                          <li
                            key={key}
                            className={q.answer === key ? "correct" : ""}
                          >
                            {key}. {val}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentQuizPage;
