import React from "react";
import { LuStar, LuStarHalf, LuStar as LuStarEmpty } from "react-icons/lu"; // Use appropriate icon set if different
import { assets } from "../mock/asset";
import { useNavigate } from "react-router-dom";
import { slugify } from "../mock/functions";

const CourseCardComponent = ({ course }) => {
  const {
    title,
    thumbnail,
    chapters,
    enrollments,
    progress,
    reviews = [],
    isLive = false,
    hasCertificate = true,
  } = course;

  // --- Calculate average rating ---
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const navigate = useNavigate();

  const slug = slugify(title);

  const handleGoToCoursePage = () => {
    navigate(`/trainee/course/${slug}`);
  };

  return (
    <div className="course-card">
      <div className="image">
        <img loading="lazy" src={thumbnail || assets.coursethumbnail} alt={title} />
        {isLive && <span className="live-badge">Live</span>}
      </div>

      <div className="card-body">
        <div className="card-reviews">
          <span className="stars">
            {[...Array(fullStars)].map((_, i) => (
              <LuStar key={`full-${i}`} fill="#f59e0b" />
            ))}
            {hasHalfStar && <LuStarHalf key="half-star" fill="#f59e0b" />}
            {[...Array(emptyStars)].map((_, i) => (
              <LuStarEmpty key={`empty-${i}`} stroke="#d1d5db" />
            ))}
          </span>
          <span>({reviews.length} Reviews)</span>
        </div>

        <h3 onClick={handleGoToCoursePage} className="title">
          {title}
        </h3>

        <div className="meta">
          <span>{chapters} Lessons</span>
          <span>{enrollments} Students</span>
        </div>

        <div className="progress-bar">
          <div className="progress-text">
            <span>Complete</span>
            <span>{progress}%</span>
          </div>
          <div className="bar">
            <div className="fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {hasCertificate && progress === 100 && (
          <div className="certificate-button">
            <button className="download-btn">Download Certificate</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCardComponent;
