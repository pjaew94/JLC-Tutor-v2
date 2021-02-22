import "./Courses.scss";
import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";


import Navbar from "../../components/Navbar/Navbar";
import Pomodoro from "../../components/Pomodoro/Pomodoro";
import CoursesList from '../../components/CoursesList/CoursesList';
import Posts from '../../components/Posts/Posts';


import { useMediaQuery } from "react-responsive";

const Courses = () => {
  const { auth } = useSelector((state) => state);

  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });;
  const isPhone = useMediaQuery({
    query: "(max-width: 768px)"
  })



  if (!auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="courses">
      <div className="inner">
        <Navbar />
        <div className="content">
          <div className="courses-posts">
              <CoursesList />
              {!isPhone && <Posts />}
          </div>
          {!isMobile && <Pomodoro />}
        </div>
      </div>
    </div>
  );
};

export default Courses;
