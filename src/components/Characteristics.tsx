import { IoLeafOutline } from "react-icons/io5";
import { GiBattery100 } from "react-icons/gi";
import { RiWirelessChargingFill } from "react-icons/ri";
import { TbFaceId } from "react-icons/tb";
import image from "../assets/Iphone_blue.png";
import { useState } from "react";
function Characteristics() {
  let [hidden, setHidden] = useState("hidden");
  addEventListener("scroll", () => {
    window.pageYOffset < 450
      ? setHidden((hidden = "hidden"))
      : setHidden((hidden = "show"));
  });
  return (
    <div className={`info ${hidden}`}>
      <div>
        <img src={image} width={500} id="image_info" />
      </div>
      <div className="info_desc">
        <div className="description">
          <p>
            <IoLeafOutline className="icon" />
          </p>{" "}
          <span>Lorem, ipsum dolor.</span>
        </div>
        <div className="description">
          <p>
            <GiBattery100 className="icon" />
          </p>{" "}
          <span>Lorem, ipsum dolor.</span>
        </div>
        <div className="description">
          <p>
            <RiWirelessChargingFill className="icon" />
          </p>{" "}
          <span>Lorem, ipsum dolor.</span>
        </div>
        <div className="description">
          <p>
            <TbFaceId className="icon" />
          </p>{" "}
          <span>Lorem, ipsum dolor.</span>
        </div>
      </div>
    </div>
  );
}

export default Characteristics;
