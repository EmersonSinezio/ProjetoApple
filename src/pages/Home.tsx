import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div className="itemPresentation">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 my-[10vh] items-center justify-center flex-col">
            <div className="perspective-3d lg:w-1/6 md:w-3/6 w-5/6 mb-10">
              <img
                className="object-cover object-center rounded-lg animate-3d-rotation"
                alt="iPhone na capa vermelha"
                src="./assets/Iphone_red_cover.png"
              />
            </div>
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                Sua Conexão <span className="text-blue-600">Apple</span>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-300 text-lg w-1/2 mx-auto">
                Bem-vindo à nova geração de lojas especializadas em iPhones!
                unimos a excelência Apple à experiência de compra premium.
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <Link
                  to={"/products"}
                  className="inline-flex text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Conheça Nossos Produtos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
