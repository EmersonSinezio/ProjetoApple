import cover from "../assets/Iphone_red_cover.png";
import { AiOutlineDownCircle } from "react-icons/ai";
function ShowItem() {
  return (
    <div className="itemPresentation">
      <div id="presentation_left">
        <img src={cover} alt="img_cover" width={250} id="i_cover" />
      </div>
      <div className="desc" id="presentation_right">
        <p>Iphone 13</p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eius
          pariatur magnam cum iusto fugiat molestiae necessitatibus aliquid
          expedita nam.
        </span>
      </div>
      <span className="showMore">
        <AiOutlineDownCircle />
      </span>
    </div>
  );
}

export default ShowItem;
