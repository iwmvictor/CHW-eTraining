import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LandingLayout from "./components/Layout";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";
import CourseDetailPage from "./pages/CourseDetail";
import RegisterPage from "./auth/Register";
import LoginPage from "./auth/Login";
import ResetPassword from "./auth/Reset";
import RecoverPassowrd from "./auth/Recover";
import TrainerLayout from "./trainer/component/Layout";
import TrainerOverview from "./trainer/Overview";
import TrainerCoursesPage from "./trainer/Courses";
import CreateNewCourse from "./trainer/NewCourse";
import NewCoursePage from "./trainer/NewCoursePage";
import NewCourseChapter from "./trainer/NewCourseChapter";
import TrainerStudentsList from "./trainer/Students";
import TrainerSettings from "./trainer/Settings";
import TrainerAnalyticsPage from "./trainer/Analytics";
import TrainerMessage from "./trainer/Message";
import StudentOverview from "./student/Overview";
import StudentLayout from "./student/component/Layout";
import StudentCoursePage from "./student/Course";
import StudentLiveSession from "./student/LiveSession";
import StudentQuizzes from "./student/Quizzes";
import StudentQuizPage from "./student/Quiz";
import StudentCertificatePage from "./student/Certificate";
import StudentLearningComplete from "./student/LearningComplete";
import StudentCalendarPage from "./student/Calendar";
import CourseLearningLayout from "./student/CourseLearning";
import StudentChatMessage from "./student/Message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./admin/component/Layout";
import AdminAnalytics from "./admin/Analytics";
import CourseLearningPage from "./student/CourseLearningPage";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:path" element={<CourseDetailPage />} />
            <Route path="contact" element={<CourseDetailPage />} />
            <Route path="*" element={<CourseDetailPage />} />
          </Route>

          {/* auth */}
          <Route path="auth/register" element={<RegisterPage />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/recover-password" element={<RecoverPassowrd />} />
          <Route path="auth/reset-password" element={<ResetPassword />} />
          <Route path="auth/*" element={<LoginPage />} />

          {/* TRAINER  */}
          <Route path="trainer" element={<TrainerLayout />}>
            <Route index element={<TrainerOverview />} />
            <Route path="courses" element={<TrainerCoursesPage />} />
            <Route path="courses/new" element={<CreateNewCourse />} />
            <Route path="course/create" element={<NewCoursePage />} />
            <Route
              path="course/create/chapter"
              element={<NewCourseChapter />}
            />
            <Route path="analytics" element={<TrainerAnalyticsPage />} />
            <Route path="students" element={<TrainerStudentsList />} />
            <Route path="calendar" element={<StudentCalendarPage />} />
            <Route path="messages" element={<StudentChatMessage />} />
            <Route path="settings" element={<TrainerSettings />} />
            <Route path="inbox" element={<TrainerMessage />} />
          </Route>

          {/* trainee  */}
          <Route path="trainee" element={<StudentLayout />}>
            <Route index element={<StudentOverview />} />
            <Route path="course/:path" element={<StudentCoursePage />} />
            <Route
              path="course/:path/learning"
              element={<CourseLearningPage />}
            />
            <Route path="learning" element={<CourseLearningLayout />} />
            <Route
              path="course/:path/learning/completed"
              element={<StudentLearningComplete />}
            />
            <Route path="live/:path" element={<StudentLiveSession />} />
            <Route path="calendar" element={<StudentCalendarPage />} />
            <Route path="assessments" element={<StudentQuizzes />} />
            <Route path="settings" element={<TrainerSettings />} />
            <Route path="assessment/:path" element={<StudentQuizPage />} />
            <Route path="messages" element={<StudentChatMessage />} />
            <Route
              path="course/certificate/:path"
              element={<StudentCertificatePage />}
            />
          </Route>

          {/* ADMIN */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminAnalytics />} />
            <Route path="calendar" element={<StudentCalendarPage />} />
            <Route path="messages" element={<StudentChatMessage />} />
            <Route path="settings" element={<TrainerSettings />} />
          </Route>

          {/* COURSES */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
