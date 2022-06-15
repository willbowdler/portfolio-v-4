import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useRef } from "react";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <Link className="a-nostyle" to="/">
          <h2 className="logo">{"<WB />"}</h2>
        </Link>
        <nav ref={navRef}>
          <Link onClick={showNavBar} className="link" to="/">
            Home
          </Link>
          <Link onClick={showNavBar} className="link" to="/aboutme">
            About Me
          </Link>
          <Link onClick={showNavBar} className="link" to="/myprojects">
            My Projects
          </Link>
          <Link onClick={showNavBar} className="link" to="/contactme">
            Contact Me
          </Link>
          <Link onClick={showNavBar} className="link" to="/gospel">
            The Gospel
          </Link>
          {/* This button will be shown on a larger screen */}
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>

        {/* This button will be shown on a smaller screen */}
        <button className="nav-btn nav-flex-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default NavBar;
