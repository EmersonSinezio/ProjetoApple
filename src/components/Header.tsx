import {
  AiOutlineApple,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
function Header() {
  return (
    <div className="Header">
      <h3>
        <AiOutlineApple className="logo" />
      </h3>
      <ul className="menu">
        <li>
          <a href="https://github.com/EmersonSinezio">
            <AiOutlineGithub className="icons" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/emerson-sineziio/">
            <AiOutlineLinkedin className="icons" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
