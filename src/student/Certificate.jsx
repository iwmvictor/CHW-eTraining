import  { useRef, useState } from "react";
import { LuArrowLeft, LuDownload, LuShare2, LuX } from "react-icons/lu";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { assets } from "../mock/asset";

const StudentCertificatePage = () => {
  const certificateRef = useRef(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [copyMsg, setCopyMsg] = useState("");
  const [showCeleb, setShowCeleb] = useState(false);

  const handleGoBack = () => {
    window.history.back();
  };

  const downloadAsImage = async () => {
    const canvas = await html2canvas(certificateRef.current);
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "CHW-certificate.png";
    link.click();

    celebrate();
  };

  const downloadAsPDF = async () => {
    const canvas = await html2canvas(certificateRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("CHW-certificate.pdf");

    celebrate();
  };

  const celebrate = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  const handleCeleb = () => {
    setShowCeleb(true);
    setTimeout(() => {
      setShowCeleb(false);
    }, 6000);
  };

  const handleCopyLink = () => {
    const link = window.location.href; // or use a public share link
    navigator.clipboard.writeText(link);
    setCopyMsg("Link copied to clipboard!");
    setTimeout(() => setCopyMsg(""), 2000);
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="dashboard">
        <div className="student-get-certified">
          <div className="container">
            <div className="page-nav">
              <div className="back">
                <button onClick={handleGoBack}>
                  <span>
                    <LuArrowLeft />
                  </span>
                  <span>Go Back</span>
                </button>
              </div>

              <div className="act">
                <button
                  className="share"
                  onClick={() => setShowShareOptions(!showShareOptions)}
                >
                  <span>
                    <LuShare2 />
                  </span>
                </button>
                <button className="download" onClick={handleCeleb}>
                  <span>
                    <LuDownload />
                  </span>
                  <span>Download</span>
                </button>
              </div>
            </div>

            {showShareOptions && (
              <div className="share-options">
                <button onClick={handleCopyLink}>Copy Link</button>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  X (Twitter)
                </a>
                <a
                  href={`https://www.instagram.com`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            )}

            {copyMsg && <div className="copy-msg">{copyMsg}</div>}

            <div className="content">
              <div className="cert-container">
                {showCeleb && <Confetti style={{ maxWidth: "100%" }} />}
                <img loading="lazy" src={assets.certificate || assets.certificate} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDownloadModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Download Certificate</h3>
            <button onClick={downloadAsImage}>Save as Image (PNG)</button>
            <button onClick={downloadAsPDF}>Save as PDF</button>
            <button
              className="close-modal"
              onClick={() => setShowDownloadModal(false)}
            >
              <LuX />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentCertificatePage;
