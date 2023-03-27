import Iphone_blue from "../assets/Iphone_blue.png";
import Iphone_midnight from "../assets/Iphone_meianoite.png";
import Iphone_red from "../assets/Iphone_red.png";
import Iphone_rose from "../assets/Iphone_rose.png";
import Iphone_stelar from "../assets/Iphone_stelar.png";
import { useState } from "react";
function ChosenProduct() {
  let [img, setImg] = useState(Iphone_blue);
  let [animate, setAnimate] = useState("show");
  let [showScreen, setShowScreen] = useState("hidden");
  addEventListener("scroll", () => {
    const screen = window.pageYOffset;
    screen < 1000
      ? setShowScreen((showScreen = "hidden"))
      : setShowScreen((showScreen = "show"));
  });
  function handleChange(e: any) {
    //Função de trocar os produtos com animação
    const element = e.target;
    switch (element.id) {
      case "blue":
        setAnimate((animate = "hidden"));
        setTimeout(() => {
          setImg((img = Iphone_blue));
          setAnimate((animate = "show"));
        }, 200);
        break;
      case "red":
        setAnimate((animate = "hidden"));
        setTimeout(() => {
          setImg((img = Iphone_red));
          setAnimate((animate = "show"));
        }, 200);
        break;
      case "rose":
        setAnimate((animate = "hidden"));
        setTimeout(() => {
          setImg((img = Iphone_rose));
          setAnimate((animate = "show"));
        }, 200);
        break;
      case "stelar":
        setAnimate((animate = "hidden"));
        setTimeout(() => {
          setAnimate((animate = "show"));
          setImg((img = Iphone_stelar));
        }, 200);
        break;
      case "midnight":
        setAnimate((animate = "hidden"));
        setTimeout(() => {
          setImg((img = Iphone_midnight));
          setAnimate((animate = "show"));
        }, 200);
        break;
    }
  }
  return (
    <div className={`chosen ${showScreen}`}>
      <div className="product">
        <img src={img} width={250} id="teste" className={animate} />
      </div>
      <div className="products_chosen" onClick={(e) => handleChange(e)}>
        <div id="blue">B</div>
        <div id="midnight">M</div>
        <div id="red">R</div>
        <div id="rose">R</div>
        <div id="stelar">S</div>
      </div>
    </div>
  );
}

export default ChosenProduct;

//Fazer uma maneira de trocar os produtos
//Depois fazer a animação quando trocar

//fazer onclick e pegar os id para ir trocando
