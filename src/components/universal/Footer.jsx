import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer>
      <Link className="a-nostyle" to="/">
        <div className="foot-logo">
          <h2 className="logo">{"<WB />"}</h2>
        </div>
      </Link>
      <div className="foot-contact">
        <a href="https://github.com/willbowdler" target="_blank">
          <Icon
            icon="akar-icons:github-fill"
            width="30"
            color="#fff"
            className="foot-gh"
          />
        </a>
        <div className="foot-text">
          <p>Phone: 601.519.7970</p>
          <p>Email: calbprogramming@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
