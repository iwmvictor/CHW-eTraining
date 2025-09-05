import React, { useState } from "react";
import {
  LuArrowUpDown,
  LuCirclePlus,
  LuEllipsis,
  LuSearch,
  LuSettings2,
} from "react-icons/lu";

import "./../style/trainer.scss";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Malaria Treatment & First Aid Protocol",
    category: "Communicable Diseases",
    enrolled: 152,
    status: "Published",
    reviews: 5,
    rating: 4.6,
    createdAt: "2025-06-12",
    updatedAt: "2025-08-15",
    duration: "4h 30m",
    author: "Dr. Alice Mensah",
    language: "English",
    level: "Intermediate",
    description:
      "A comprehensive guide to treating malaria and providing first aid in emergencies related to communicable diseases.",
    tags: ["malaria", "first aid", "treatment", "healthcare"],
    thumbnail: "/images/courses/malaria.jpg",
  },
  {
    id: 2,
    title: "Nutrition & Immune System Boosting",
    category: "Health & Wellness",
    enrolled: 98,
    status: "Published",
    reviews: 8,
    rating: 4.8,
    createdAt: "2025-04-20",
    updatedAt: "2025-07-01",
    duration: "3h 15m",
    author: "Dr. Lina Kwame",
    language: "English",
    level: "Beginner",
    description:
      "Learn how proper nutrition can help strengthen the immune system, especially during outbreaks.",
    tags: ["nutrition", "immunity", "wellness", "diet"],
    thumbnail: "/images/courses/nutrition.jpg",
  },
  {
    id: 3,
    title: "Basic Life Support (BLS) Training",
    category: "Emergency Care",
    enrolled: 187,
    status: "Published",
    reviews: 12,
    rating: 4.9,
    createdAt: "2025-05-10",
    updatedAt: "2025-08-12",
    duration: "5h 00m",
    author: "Prof. Samuel Okoro",
    language: "English",
    level: "Advanced",
    description:
      "Hands-on emergency response training including CPR, AED usage, and airway management.",
    tags: ["bls", "emergency", "cpr", "training"],
    thumbnail: "/images/courses/bls.jpg",
  },
  {
    id: 4,
    title: "Vaccination Protocols for Children",
    category: "Pediatrics",
    enrolled: 130,
    status: "Draft",
    reviews: 0,
    rating: null,
    createdAt: "2025-07-05",
    updatedAt: null,
    duration: "2h 40m",
    author: "Dr. Grace Nyarko",
    language: "English",
    level: "Intermediate",
    description:
      "Understand the recommended vaccination timelines and safety protocols for children under 10.",
    tags: ["vaccines", "children", "pediatrics"],
    thumbnail: "/images/courses/vaccines.jpg",
  },
  {
    id: 5,
    title: "Mental Health First Response",
    category: "Psychology",
    enrolled: 63,
    status: "Published",
    reviews: 6,
    rating: 4.7,
    createdAt: "2025-02-15",
    updatedAt: "2025-08-10",
    duration: "3h 45m",
    author: "Dr. Tumi Adeyemi",
    language: "English",
    level: "Intermediate",
    description:
      "An introduction to handling mental health crises and providing first-level psychological support.",
    tags: ["mental health", "psychology", "first aid"],
    thumbnail: "/images/courses/mental-health.jpg",
  },
  {
    id: 6,
    title: "Managing Chronic Illnesses",
    category: "General Medicine",
    enrolled: 76,
    status: "Published",
    reviews: 3,
    rating: 4.3,
    createdAt: "2025-01-08",
    updatedAt: "2025-06-22",
    duration: "4h 10m",
    author: "Dr. Benson Agyapong",
    language: "English",
    level: "Advanced",
    description:
      "Explore best practices for managing diabetes, hypertension, and other chronic diseases.",
    tags: ["chronic", "diabetes", "hypertension", "long-term care"],
    thumbnail: "/images/courses/chronic.jpg",
  },
  {
    id: 7,
    title: "COVID-19 Vaccine Education",
    category: "Public Health",
    enrolled: 204,
    status: "Published",
    reviews: 10,
    rating: 4.9,
    createdAt: "2024-12-01",
    updatedAt: "2025-07-30",
    duration: "2h 30m",
    author: "Dr. Joy Mbatha",
    language: "English",
    level: "Beginner",
    description:
      "Educating patients and communities about COVID-19 vaccines, benefits, and addressing hesitancy.",
    tags: ["covid-19", "vaccine", "public health"],
    thumbnail: "/images/courses/covid.jpg",
  },
  {
    id: 8,
    title: "Post-Surgery Home Care Guide",
    category: "Nursing",
    enrolled: 89,
    status: "Draft",
    reviews: 0,
    rating: null,
    createdAt: "2025-07-12",
    updatedAt: null,
    duration: "2h 20m",
    author: "Nurse Jane Wambui",
    language: "English",
    level: "Beginner",
    description:
      "Essential training for caregivers and nurses on how to provide proper post-surgery care at home.",
    tags: ["nursing", "post-surgery", "home care"],
    thumbnail: "/images/courses/post-surgery.jpg",
  },
  {
    id: 9,
    title: "Waterborne Disease Prevention",
    category: "Communicable Diseases",
    enrolled: 110,
    status: "Published",
    reviews: 4,
    rating: 4.4,
    createdAt: "2025-05-03",
    updatedAt: "2025-08-01",
    duration: "3h 00m",
    author: "Dr. Peter Kamau",
    language: "English",
    level: "Intermediate",
    description:
      "Preventing cholera, typhoid, and other waterborne illnesses through sanitation and public health awareness.",
    tags: ["water", "sanitation", "cholera", "prevention"],
    thumbnail: "/images/courses/waterborne.jpg",
  },
  {
    id: 10,
    title: "Introduction to Pharmacology",
    category: "Pharmacology",
    enrolled: 145,
    status: "Published",
    reviews: 9,
    rating: 4.5,
    createdAt: "2025-03-18",
    updatedAt: "2025-07-25",
    duration: "5h 15m",
    author: "Dr. Linda Owusu",
    language: "English",
    level: "Beginner",
    description:
      "Foundational understanding of drug classifications, mechanisms, and patient safety.",
    tags: ["pharmacology", "drugs", "dosage", "treatment"],
    thumbnail: "/images/courses/pharmacology.jpg",
  },
  {
    id: 11,
    title: "HIV & AIDS Counseling Skills",
    category: "Public Health",
    enrolled: 72,
    status: "Published",
    reviews: 4,
    rating: 4.2,
    createdAt: "2025-04-02",
    updatedAt: "2025-08-18",
    duration: "2h 50m",
    author: "Dr. Nelly Mwangi",
    language: "English",
    level: "Intermediate",
    description:
      "Equipping health workers with counseling skills for supporting patients living with HIV/AIDS.",
    tags: ["hiv", "aids", "counseling", "support"],
    thumbnail: "/images/courses/hiv-counseling.jpg",
  },
  {
    id: 12,
    title: "Infection Control for Healthcare Workers",
    category: "Infection Prevention",
    enrolled: 190,
    status: "Published",
    reviews: 11,
    rating: 4.8,
    createdAt: "2025-01-30",
    updatedAt: "2025-07-20",
    duration: "4h 00m",
    author: "Dr. Jacob Osei",
    language: "English",
    level: "Advanced",
    description:
      "Best practices in infection prevention and control (IPC) for clinics and hospitals.",
    tags: ["infection", "safety", "hospital", "PPE"],
    thumbnail: "/images/courses/infection-control.jpg",
  },
  {
    id: 13,
    title: "Emergency Obstetric Care",
    category: "Maternal Health",
    enrolled: 82,
    status: "Draft",
    reviews: 0,
    rating: null,
    createdAt: "2025-06-01",
    updatedAt: null,
    duration: "3h 40m",
    author: "Dr. Rachael Achieng",
    language: "English",
    level: "Advanced",
    description:
      "Step-by-step handling of obstetric emergencies such as hemorrhage, eclampsia, and obstructed labor.",
    tags: ["obstetric", "maternal", "emergency", "birth"],
    thumbnail: "/images/courses/obstetric.jpg",
  },
  {
    id: 14,
    title: "Telemedicine: Remote Care Essentials",
    category: "Digital Health",
    enrolled: 134,
    status: "Published",
    reviews: 7,
    rating: 4.6,
    createdAt: "2025-03-25",
    updatedAt: "2025-07-10",
    duration: "2h 45m",
    author: "Dr. Isaac Owolabi",
    language: "English",
    level: "Intermediate",
    description:
      "Leverage telemedicine platforms to provide care and monitor patients remotely.",
    tags: ["telemedicine", "remote", "technology", "digital health"],
    thumbnail: "/images/courses/telemedicine.jpg",
  },
];

const TrainerCoursesPage = () => {
  const [activeTab, isActiveTab] = useState(false);

  const [selectedTab, setSelectedTab] = useState("All");

  const filteredCourses =
    selectedTab === "All"
      ? courses
      : courses.filter((course) =>
          selectedTab === "Published"
            ? course.status === "Published"
            : course.status === "Draft"
        );

  return (
    <div>
      <div className="dashboard">
        <div className="trainer-courses">
          <div className="container">
            <div className="content">
              <div className="titles">
                <div className="">
                  <h2>My Courses</h2>
                </div>
                <div className="action">
                  <div className="search">
                    <span className="icon search-icon">
                      <LuSearch />
                    </span>
                    <input type="search" />
                    <span className="icon filter">
                      <LuSettings2 />
                    </span>
                  </div>
                  <button className="export">
                    <span>Export Courses</span>
                  </button>
                  <Link to={"/trainer/courses/new"} className="new">
                    <span className="icon">
                      <LuCirclePlus />
                    </span>
                    <span>New Course</span>
                  </Link>
                </div>
              </div>
              <div className="tabs">
                <li
                  className={selectedTab === "All" ? "active" : ""}
                  onClick={() => setSelectedTab("All")}
                >
                  <span>All</span>
                </li>
                <li
                  className={selectedTab === "Published" ? "active" : ""}
                  onClick={() => setSelectedTab("Published")}
                >
                  <span>Published</span>
                </li>
                <li
                  className={selectedTab === "Draft" ? "active" : ""}
                  onClick={() => setSelectedTab("Draft")}
                >
                  <span>Draft</span>
                </li>
              </div>
              <div className="table">
                <div className="tr th">
                  <div className="c-title">
                    <span>Course Name</span>
                    <span className="icon">
                      <LuArrowUpDown />
                    </span>
                  </div>
                  <div className="c-category">
                    <span>Category</span>
                    <span className="icon">
                      <LuArrowUpDown />
                    </span>
                  </div>
                  <div className="c-enrolled">
                    <span>Enrolled</span>
                    <span className="icon">
                      <LuArrowUpDown />
                    </span>
                  </div>
                  <div className="c-status">
                    <span>Status</span>
                    <span className="icon">
                      <LuArrowUpDown />
                    </span>
                  </div>
                  <div className="c-review">
                    <span>Reviews</span>
                    <span className="icon">
                      <LuArrowUpDown />
                    </span>
                  </div>
                  <div className="c-action"></div>
                </div>

                {filteredCourses.map((item, index) => (
                  <div className="tr td">
                    <div className="c-title">
                      <span>{item.title}</span>
                    </div>
                    <div className="c-category">
                      <span>{item.category}</span>
                    </div>
                    <div className="c-enrolled">
                      <span>{item.enrolled}</span>
                    </div>
                    <div className="c-status">
                      <span>{item.status}</span>
                    </div>
                    <div className="c-review">
                      <span>{item.reviews}</span>
                    </div>
                    <div className="c-action">
                      <span className="action">
                        <LuEllipsis />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCoursesPage;
