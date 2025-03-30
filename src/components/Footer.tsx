import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineApple,
} from "react-icons/ai";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <AiOutlineApple className="w-8 h-8" />
            <span className="ml-3 text-xl">Apple</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2025 Emerson Mesquita Sinézio —
            <a
              href="https://linkedin.com/in/emerson-sineziio"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @EmersonSinezio
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* //github //linkedin //email */}
            <a
              href="https://github.com/EmersonSinezio"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/emerson-sineziio"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:emerson.sineziio@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
            >
              <CiMail className="w-8 h-8 " />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
