import Characteristics from "./Characteristics";
import ChosenProduct from "./ChosenProduct";
import ShowItem from "./ShowItem";

function Body() {
  return (
    <div className="body">
      <ShowItem />
      <Characteristics />
      <ChosenProduct />
    </div>
  );
}

export default Body;
