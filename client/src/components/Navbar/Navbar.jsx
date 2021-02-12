import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import NavLargeScreen from "./NavLargeScreen/NavLargeScreen";
import Hamburger from "./Hamburger/Hamburger";
import Slider from "./Slider/Slider";

const Navbar = () => {
  const [slide, setSlide] = useState(false);

  const navbarTriggerQuery = useMediaQuery({
    query: "(max-width: 768px)",
  });


  return (
    <div className="navbar">
      <Link className="logo-link" to="/courses">
        JLC<span>.</span>
      </Link>
      {navbarTriggerQuery ? <Hamburger slide={slide} setSlide={setSlide} /> : <NavLargeScreen />}
      {navbarTriggerQuery && <Slider slide={slide} setSlide={setSlide} />}
    </div>
  );
};

export default Navbar;
