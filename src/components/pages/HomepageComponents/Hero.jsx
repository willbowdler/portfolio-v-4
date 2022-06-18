import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="hero">
      <div className="header-sep"></div>
      <div className="hero-flex">
        <div className="hero-container">
          <div className="hero-title">
            <h1 className="hero-header">Will Bowdler</h1>
            <h3>Junior Developer</h3>
            <p>
              I am a junior developer who began self-teaching in July of 2021. I
              am a JavaScript and React Developer with an g to be a full stack
              developer
            </p>
          </div>
          <div className="hero-image">
            <img src="../images/placeholder.jpg" alt="" />
          </div>
        </div>
        <Link to="/aboutme">
          <button className="hero-btn">About me</button>
        </Link>
      </div>
      <div className="header-sep"></div>
    </main>
  );
}

export default Hero;
