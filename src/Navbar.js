import "./styles/Navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  };
  const goToHome = () => {
    navigate("/");
  };

  const transitionNavbar = () => {
    if (window.scrollY > 10) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`navbar ${show && "scrolled"}`}>
      <div className="navbar_contents">
        <img
          onClick={goToHome}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix logo"
        />

        <img
          onClick={goToProfile}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
