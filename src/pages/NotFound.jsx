import { Link, useNavigate } from "react-router-dom";
import { assets } from "../mock/asset";

const NotFound = ({
  title = "Not Found",
  description = "Sorry, we couldn't find what you're looking for.",
  linkText = "Go back",
  linkTo = "/",
}) => {
  const navigate = useNavigate();

  const toggleNavigate = (e) => {
    e.preventDefault(); // Prevent <Link> default navigation
    if (!linkTo || linkTo === "/") {
      navigate(-1);
    } else {
      navigate(linkTo);
    }
  };

  return (
    <div className="not-found-page">
      <div className="bg">
        <img src={assets.bg.errorBg} loading="lazy" />
      </div>

      <div className="container">
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button to="#" onClick={toggleNavigate} className="back-link">
            {linkText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
