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
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    )
}

export default NavLargeScreen