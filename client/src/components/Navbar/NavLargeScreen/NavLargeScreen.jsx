import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/auth";

const NavLargeScreen = () => {

    const dispatch = useDispatch();

    return (
        <div className="navbar-right">
        <Link className="courses-link" to="/courses">
          Courses
        </Link>
        <a className='logout-button' href="/" onClick={() => dispatch(logout())}>Logout</a>
      </div>
    )
}

export default NavLargeScreen