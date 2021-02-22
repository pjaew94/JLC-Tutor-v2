import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/auth";

import { useMediaQuery } from "react-responsive";

const Slider = ({ slide, setSlide }) => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div className={`slider ${slide && "slide-in"}`}>
      <div className="slider-links">
      <div className='directory-links'>
        <Link className="courses-link slider-link" to="/courses">
          Courses
        </Link>
        {isMobile && (
          <Link className="pomodoro-link slider-link" to="/pomodoro">
            Pomodoro
          </Link>
        )}
        </div>
        <button className='logout-button' onClick={() => dispatch(logout())}>Logout</button>
      </div>
      <div className="slider-dead-space" onClick={() => setSlide(false)}></div>
    </div>
  );
};

export default Slider;
