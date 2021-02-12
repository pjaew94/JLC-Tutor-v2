import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { logout } from "../../../redux/actions/auth";

const Slider = ({ slide, setSlide }) => {

    const dispatch = useDispatch();
    
  return (
    <div
      className={`slider ${slide && 'slide-in'}`}
    >
      <div className="slider-links">
        <Link className="courses-link" to="/courses">
          Courses
        </Link>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
      <div
        className="slider-dead-space"
        onClick={() => setSlide(false)}
      ></div>
    </div>
  );
};

export default Slider;
