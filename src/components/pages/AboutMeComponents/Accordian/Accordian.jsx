import { useState } from "react";

import { AccData1 } from "./AccData";
import { BiMinus, BiPlus } from "react-icons/bi";

function Accordian() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div>
      <div className="acc-flex">
        <div className="acc-section-head">
          <h1>My Developement Skills</h1>
          <h4>
            <a href="../../images/placeholder.png" target="_blank">
              PDF Link to Technical Skills (url will be in FTP. copy link later)
            </a>
          </h4>
        </div>

        <div className="accordian-container">
          {AccData1.map((item, index) => {
            return (
              <div onClick={() => toggle(index)} className="acc-item">
                <div className="acc-tab">
                  <div className="acc-title">
                    <div className="acc-icon">{item.icon}</div>
                    <h3 className="acc-title-header">{item.language}</h3>
                  </div>
                  <div>{clicked === index ? <BiPlus /> : <BiMinus />}</div>
                </div>
                <div
                  className={
                    clicked === index ? "acc-content shown" : "acc-content"
                  }
                >
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="seperator-2"></div>
    </div>
  );
}

export default Accordian;
