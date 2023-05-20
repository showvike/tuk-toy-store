import captainAmerica from "../../../../../assets/captain-america.webp";
import dc from "../../../../../assets/dc.webp";
import ironMan from "../../../../../assets/iron-man.webp";
import spiderMan from "../../../../../assets/spider-man.webp";
import starWars from "../../../../../assets/star-wars.webp";

const Columns = () => {
  return (
    <>
      <div className="carousel-item md:w-1/5 hidden md:block">
        <img src={ironMan} />
      </div>
      <div className="carousel-item md:w-1/5 hidden md:block">
        <img className="object-contain" src={dc} />
      </div>
      <div className="carousel-item md:w-1/5">
        <img className="object-cover" src={starWars} />
      </div>
      <div className="carousel-item md:w-1/5 hidden md:block">
        <img className="object-cover" src={spiderMan} />
      </div>
      <div className="carousel-item md:w-1/5 hidden md:block">
        <img className="object-cover" src={captainAmerica} />
      </div>
    </>
  );
};

export default Columns;
