import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="Footer">
      <p>Obrigado por visitar esse projeto, espero que goste!</p>
      <div className="footer_icons">
        <a href="https://github.com/EmersonSinezio">
          <AiOutlineGithub className="icons_footer" />
        </a>
        <a href="https://www.linkedin.com/in/emerson-sineziio/">
          <AiOutlineLinkedin className="icons_footer" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
