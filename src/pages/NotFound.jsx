import { Link } from "react-router-dom";

const NotFound = ({
  title = "Not Found",
  description = "Sorry, we couldn't find what you're looking for.",
  linkText = "Go back",
  linkTo = "/"
}) => {
  return (
    <div className="not-found">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={linkTo} className="back-link">
        {linkText}
      </Link>
    </div>
  );
};

export default NotFound;
