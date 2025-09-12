import React from "react";
import { LuCalendar } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const BlogCardComponent = ({ article }) => {
  const { id, img, date, category, title, excert } = article;

  const slug = `${category}-${id}`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      day: "numeric",
      month: "short",
    });
  };

  const navigate = useNavigate();

  const handleBlogNav = () => {
    navigate(`${slug}`);
  };

  return (
    <>
      <div className="blog-card-comp">
        <div className="image">
          <img src={img} loading="lazy" />
        </div>

        <div className="text">
          <div className="items">
            <div className="date">
              <span className="icon">
                <LuCalendar />
              </span>
              <span>{formatDate(date)}</span>{" "}
              <span className="cat">#{category}</span>
            </div>
          </div>
          <h3 onClick={handleBlogNav}>{title}</h3>
          <p>{excert}</p>
          <button onClick={handleBlogNav}>
            <span>Read More</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCardComponent;
