import Iphone_blue from "/assets/Iphone_blue.png";
import Iphone_midnight from "/assets/Iphone_meianoite.png";
import Iphone_red from "/assets/Iphone_red.png";
import Iphone_rose from "/assets/Iphone_rose.png";
import Iphone_stelar from "/assets/Iphone_stelar.png";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ErrorPage from "./404";
function ProductBase() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <ErrorPage />;
  }

  const [img, setImg] = useState<string>(product.image);
  const [animationKey, setAnimationKey] = useState(0);

  const handleColorChange = (newImg: string) => {
    setImg(newImg);
    setAnimationKey((prevKey) => prevKey + 1);
  };
  const imgStyle = {
    animation: `show 1s ease-in-out`,
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              key={animationKey}
              alt={"Iphone " + img}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded img_animation"
              src={img}
              style={imgStyle}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Apple
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      fill={index < product.rate ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="ml-3">{product.rate} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                  <a>
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                O iPhone 13 é uma revolução na tecnologia de smartphones. Com
                uma câmera dupla de 12MP, capaz de capturar imagens incríveis e
                vídeos em 4K a 60fps. Além disso, o iPhone 13 vem com uma
                bateria que dura o dia todo, e muito mais. Com o iOS 15, você
                terá acesso a todas as funcionalidades mais recentes do sistema
                operacional, como o modo escuro, o gerenciador de apps e muito
                mais.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button
                    className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"
                    onClick={() => handleColorChange(Iphone_midnight)}
                  ></button>
                  <button
                    className="border-2 border-gray-800 ml-1 bg-rose-300 rounded-full w-6 h-6 focus:outline-none"
                    onClick={() => handleColorChange(Iphone_rose)}
                  ></button>
                  <button
                    className="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
                    onClick={() => handleColorChange(Iphone_blue)}
                  ></button>
                  <button
                    className="border-2 border-gray-800 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"
                    onClick={() => handleColorChange(Iphone_red)}
                  ></button>
                  <button
                    className="border-2 border-gray-800 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"
                    onClick={() => handleColorChange(Iphone_stelar)}
                  ></button>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  {product.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Garanta agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductBase;
