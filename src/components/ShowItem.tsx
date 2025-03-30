import { Link } from "react-router-dom";
import cover from "../assets/Iphone_red_cover.png";
import { AiOutlineDownCircle } from "react-icons/ai";
function ShowItem() {
  return (
    <div className="itemPresentation">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 my-[10vh] items-center justify-center flex-col">
          <img
            className="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={cover}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <Link
                to={"/product"}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <button>Veja mais</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowItem;
