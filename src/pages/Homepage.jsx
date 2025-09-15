import {
  LuBriefcaseBusiness,
  LuEllipsisVertical,
  LuSearch,
  LuStar,
  LuStarHalf,
  LuStar as LuStarEmpty,
} from "react-icons/lu";

import { assets } from "../mock/asset";

import { useTranslation } from "react-i18next";

import "./../style/homepage.scss";
import { Link } from "react-router-dom";
import { courses } from "../mock/course";
import CourseCardComponent from "../components/CourseCard";
import BlogCardComponent from "../components/BlogCard";
import { useMemo } from "react";

// const data = {
//   whyUs: {
//     titles: {
//       sub: t("section_join"),
//       title: t("learn_from_anywhere"),
//       imgs: [
//         assets.learners.profile1,
//         assets.learners.profile2,
//         assets.learners.profile3,
//         assets.learners.profile2,
//       ],
//     },
//     contents: [
//       {
//         icon: LuBriefcaseBusiness,
//         title: t("flexible_schedule_title"),
//         text: t("flexible_schedule_body"),
//       },
//       {
//         icon: LuBriefcaseBusiness,
//         title: t("flexible_schedule_title"),
//         text: t("flexible_schedule_body"),
//       },
//       {
//         icon: LuBriefcaseBusiness,
//         title: t("flexible_schedule_title"),
//         text: t("flexible_schedule_body"),
//       },
//       {
//         icon: LuBriefcaseBusiness,
//         title: t("flexible_schedule_title"),
//         text: t("flexible_schedule_body"),
//       },
//     ],
//   },
//   courses: {
//     titles: {
//       sub: t("popular_courses_title"),
//       title: t("industry_expert_courses"),
//       button: t("all_courses"),
//       buttonLink: "/courses",
//     },
//   },
//   facts: {
//     titles: {
//       sub: t("some_facts_title"),
//       title: t("fact1"),
//     },
//     content: [
//       { num: 1, text: t("fact_year") },
//       { num: "13", plus: "+", text: t("fact_courses_added") },
//       { num: "2022", plus: "+", text: t("fact_active_users") },
//     ],
//   },
//   reviews: {
//     titles: {
//       sub: t("reviews_title"),
//       title: t("reviews_subheading"),
//     },
//     reviewsList: [
//       {
//         rating: 3.5,
//         name: t("reviewer1"),
//         role: t("role_student"),
//         pic: assets.learners.profile2,
//         message: t("review_text"),
//       },
//       {
//         rating: 5,
//         name: t("reviewer2"),
//         role: t("role_student"),
//         pic: assets.learners.profile1,
//         message: t("review_text"),
//       },
//       {
//         rating: 4.5,
//         name: t("reviewer3"),
//         role: t("role_chw"),
//         pic: assets.learners.profile3,
//         message: t("review_text"),
//       },
//     ],
//   },

//   cta: {
//     sub: t("dont_miss_out_title"),
//     title: t("dont_miss_out_body"),
//     buttons: {
//       btn1: t("get_started"),
//       btn1Link: "/courses",
//       btn2: t("learn_more"),
//       btn2Link: "/about",
//     },
//   },

//   blogs: {
//     titles: {
//       sub: t("articles_title"),
//       title: t("latest_blogs"),
//       button: t("explore_more"),
//     },
//     blogList: [
//       {
//         id: "1",
//         img: assets.placeholderImg,
//         date: t("blog_date"),
//         category: t("blog_category"),
//         title: t("blog_heading"),
//         excert: t("blog_subheading"),
//       },
//       {
//         id: "article_2sZFHdS1UIIysJyDVzCpQhUhTIhw",
//         img: assets.placeholderImg,
//         date: 1738667236865,
//         category: "Education",
//         title:
//           "We are dedicated to transforming education through digital innovation.",
//         excert:
//           "We are dedicated to transforming education through digital innovation, making learning more engaging, and accessible.",
//       },
//       {
//         id: "article_2sZFHSaUIIysJyDVzCpQhUhTIhw",
//         img: assets.placeholderImg,
//         date: 1738667236865,
//         category: "Education",
//         title:
//           "We are dedicated to transforming education through digital innovation.",
//         excert:
//           "We are dedicated to transforming education through digital innovation, making learning more engaging, and accessible.",
//       },
//       {
//         id: "article_2sZFHSbUIIysJyDVzCpQhUhTIhw",
//         img: assets.placeholderImg,
//         date: 1738667236865,
//         category: "Education",
//         title:
//           "We are dedicated to transforming education through digital innovation.",
//         excert:
//           "We are dedicated to transforming education through digital innovation, making learning more engaging, and accessible.",
//       },
//       {
//         id: "article_2sZFHS1UIIysJyDVzCpQhUhTIhw",
//         img: assets.placeholderImg,
//         date: 1738667236865,
//         category: "Education",
//         title:
//           "We are dedicated to transforming education through digital innovation.",
//         excert:
//           "We are dedicated to transforming education through digital innovation, making learning more engaging, and accessible.",
//       },
//       {
//         id: "article_2sZFHS12UIIysJyDVzCpQhUhTIhw",
//         img: assets.placeholderImg,
//         date: 1738667236865,
//         category: "Education",
//         title:
//           "We are dedicated to transforming education through digital innovation.",
//         excert:
//           "We are dedicated to transforming education through digital innovation, making learning more engaging, and accessible.",
//       },
//     ],
//   },
//   partners: [
//     assets.placeholderImg,
//     assets.placeholderImg,
//     assets.placeholderImg,
//     assets.placeholderImg,
//   ],
// };

const Homepage = () => {
  const { t } = useTranslation();

  const data = useMemo(
    () => ({
      whyUs: {
        titles: {
          sub: t("section_join"),
          title: t("learn_from_anywhere"),
          imgs: [
            assets.learners.profile1,
            assets.learners.profile2,
            assets.learners.profile3,
            assets.learners.profile2,
          ],
        },
        contents: Array(4).fill({
          icon: LuBriefcaseBusiness,
          title: t("flexible_schedule_title"),
          text: t("flexible_schedule_body"),
        }),
      },
      courses: {
        titles: {
          sub: t("popular_courses_title"),
          title: t("industry_expert_courses"),
          button: t("all_courses"),
          buttonLink: "/courses",
        },
      },
      facts: {
        titles: {
          sub: t("some_facts_title"),
          title: t("fact1"),
        },
        content: [
          { num: 1, text: t("fact_year") },
          { num: "13", plus: "+", text: t("fact_courses_added") },
          { num: "2022", plus: "+", text: t("fact_active_users") },
        ],
      },
      reviews: {
        titles: {
          sub: t("reviews_title"),
          title: t("reviews_subheading"),
        },
        reviewsList: [
          {
            rating: 3.5,
            name: t("reviewer1"),
            role: t("role_student"),
            pic: assets.learners.profile2,
            message: t("review_text"),
          },
          {
            rating: 5,
            name: t("reviewer2"),
            role: t("role_student"),
            pic: assets.learners.profile1,
            message: t("review_text"),
          },
          {
            rating: 4.5,
            name: t("reviewer3"),
            role: t("role_chw"),
            pic: assets.learners.profile3,
            message: t("review_text"),
          },
        ],
      },
      cta: {
        sub: t("dont_miss_out_title"),
        title: t("dont_miss_out_body"),
        buttons: {
          btn1: t("get_started"),
          btn1Link: "/courses",
          btn2: t("learn_more"),
          btn2Link: "/about",
        },
      },
      blogs: {
        titles: {
          sub: t("articles_title"),
          title: t("latest_blogs"),
          button: t("explore_more"),
        },
        blogList: [
          {
            id: "1",
            img: assets.placeholderImg,
            date: t("blog_date"),
            category: t("blog_category"),
            title: t("blog_heading"),
            excert: t("blog_subheading"),
          },
          // Keep others as-is or translate more
        ],
      },
      partners: [
        assets.placeholderImg,
        assets.placeholderImg,
        assets.placeholderImg,
        assets.placeholderImg,
      ],
    }),
    [t]
  );

  const filterCourses = courses.filter((c) => c.progress < 100);

  return (
    <>
      <div className="homepage">
        <div className="hero">
          <div className="bg">
            <img src={assets.bg.homeHero} alt="" />
          </div>
          <div className="container">
            <div className="content">
              <p># Every Course Unlocks World of Possibilities</p>
              <h2>
                Learning <br />
                wherever <br />& <i>whenever</i>
              </h2>
              <div className="input">
                <input type="search" name="" id="" />
                <span className="icon">
                  <LuSearch />
                </span>
                <button>
                  <span>
                    <LuEllipsisVertical />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us">
          <div className="container">
            <div className="content">
              <div className="sec-title">
                <p>{data.whyUs.titles.sub}</p>
                <h1>{data.whyUs.titles.title}</h1>
                <div className="div">
                  <span className="imgs">
                    {data.whyUs.titles.imgs.map((img, i) => (
                      <span className="img" key={i}>
                        <img src={img} alt="" />
                      </span>
                    ))}
                  </span>
                  <span className="txt">
                    <h3>1.2k+ Learners</h3>
                    <p>Join us today</p>
                  </span>
                </div>
              </div>
              <ul className="contents-list">
                {data.whyUs.contents.map((item, i) => (
                  <li key={i}>
                    <span className="icon">
                      <item.icon />
                    </span>
                    <div className="txt">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="popular-courses">
          <div className="container">
            <div className="content">
              <div className="section-title">
                <div className="div">
                  <p>{data.courses.titles.sub}</p>
                  <h1>{data.courses.titles.title}</h1>
                </div>
                <div className="div">
                  <Link to={data.courses.titles.buttonLink}>
                    <span>{data.courses.titles.button}</span>
                  </Link>
                </div>
              </div>
              <div className="courses-list">
                {filterCourses.slice(0, 3).map((item, index) => (
                  <CourseCardComponent course={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="facts">
          <div className="container">
            <div className="content">
              <div className="sec-title">
                <p>{data.facts.titles.sub}</p>
                <h1>{data.facts.titles.title}</h1>
              </div>
              <div className="facts-list">
                {data.facts.content.map((item, i) => (
                  <div className="div" key={i}>
                    <h2>
                      {item.num}
                      {item.plus}
                    </h2>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="container">
            <div className="content">
              <div className="sec-title">
                <p>{data.reviews.titles.sub}</p>
                <h1>{data.reviews.titles.title}</h1>
              </div>
              <div className="review-list">
                {data.reviews.reviewsList.slice(0, 3).map((review, index) => {
                  const fullStars = Math.floor(review.rating);
                  const hasHalfStar = review.rating % 1 >= 0.5;
                  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                  return (
                    <div className="review-card" key={index}>
                      <div className="stars">
                        {[...Array(fullStars)].map((_, i) => (
                          <LuStar
                            key={`full-${i}`}
                            stroke="#f59e0b"
                            fill="#f59e0b"
                          />
                        ))}
                        {hasHalfStar && (
                          <LuStarHalf
                            key="half-star"
                            stroke="#f59e0b"
                            fill="#f59e0b"
                          />
                        )}
                        {[...Array(emptyStars)].map((_, i) => (
                          <LuStarEmpty key={`empty-${i}`} stroke="#f59e0b " />
                        ))}
                      </div>
                      <p>{review.message}</p>
                      <div className="user">
                        <div className="img">
                          <img src={review.pic} alt="" />
                        </div>
                        <div className="info">
                          <h3>{review.name}</h3>
                          <p>{review.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="cta">
          <div className="bg">
            <img src={assets.bg.ctaImg} alt="" />
          </div>
          <div className="container">
            <div className="content">
              <p>{data.cta.sub}</p>
              <h2>{data.cta.title}</h2>
              <div className="buttons">
                <Link to={data.cta.buttons.btn1Link} className="start">
                  <span>{data.cta.buttons.btn1}</span>
                </Link>
                <Link to={data.cta.buttons.btn2Link} className="learn">
                  <span>{data.cta.buttons.btn2}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="blogs">
          <div className="container">
            <div className="content">
              <div className="section-title">
                <div className="div">
                  <p>{data.blogs.titles.sub}</p>
                  <h1>{data.blogs.titles.title}</h1>
                </div>
                <div className="div">
                  <button>
                    <span>{data.blogs.titles.button}</span>
                  </button>
                </div>
              </div>
              <div className="blog-list">
                {data.blogs.blogList.slice(0, 3).map((blog, index) => (
                  <BlogCardComponent key={index} article={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <BrandPartners partners={data.partners} />
      </div>
    </>
  );
};

export default Homepage;

export const BrandPartners = ({ partners }) => {
  return (
    <>
      <div className="partners">
        <div className="container">
          <div className="content">
            <div className="sec-title">
              <h1>Partners</h1>
            </div>

            <div className="partner-list">
              {partners.map((item, i) => (
                <div className="img" key={i}>
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
