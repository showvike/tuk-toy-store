import dc from "../../../assets/dc.webp";
import ironMan from "../../../assets/iron-man.webp";
import starWars from "../../../assets/star-wars.webp";

const Banner = () => {
  return (
    <section className="relative">
      <div className="carousel carousel-center rounded-box flex-col md:flex-row">
        <div className="carousel-item md:w-1/3">
          <img src={ironMan} />
        </div>
        <div className="carousel-item md:w-1/3">
          <img className="object-contain" src={dc} />
        </div>
        <div className="carousel-item md:w-1/3">
          <img className="object-cover" src={starWars} />
        </div>
        <div className="carousel-item hidden md:block md:w-1/3">
          <img src={ironMan} />
        </div>
        <div className="carousel-item hidden md:block md:w-1/3">
          <img className="object-contain" src={dc} />
        </div>
        <div className="carousel-item hidden md:block md:w-1/3">
          <img className="object-cover" src={starWars} />
        </div>
        <div className="carousel-item hidden md:block md:w-1/3">
          <img src={ironMan} />
        </div>
        <div className="carousel-item hidden md:block md:w-1/3">
          <img className="object-contain" src={dc} />
        </div>
        <div className="carousel-item hidden md:block md:w-1/3">
          <img className="object-cover" src={starWars} />
        </div>
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#0000007f] rounded-box p-16 md:p-24 text-white space-y-4 flex flex-col justify-center md:block">
        <h2 className="text-5xl md:text-7xl font-extrabold">Buy Lego Toys</h2>
        <p className="text-3xl md:text-5xl font-semibold">
          Play with them. Break them. Smash them. Build them. Do whatever you
          want!
        </p>
        <button className="bg-[#6800fa] px-8 py-4 font-semibold rounded text-xl text-white">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
