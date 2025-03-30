import {
  AiOutlineApple,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <AiOutlineApple className="w-8 h-8" />
          <span className="ml-3 text-xl">Apple</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">First Link</a>
          <a className="mr-5 hover:text-white">Second Link</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
