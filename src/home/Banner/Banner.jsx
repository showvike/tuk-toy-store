import dc from "../../assets/dc.webp";
import ironMan from "../../assets/iron-man.webp";
import starWars from "../../assets/star-wars.webp";

const Banner = () => {
  return (
    <section className="relative">
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item w-1/3">
          <img src={ironMan} />
        </div>
        <div className="carousel-item w-1/3">
          <img className="object-contain" src={dc} />
        </div>
        <div className="carousel-item w-1/3">
          <img className="object-cover" src={starWars} />
        </div>
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#0000007f] rounded-box p-24 text-white space-y-4">
        <h2 className="text-7xl font-extrabold">Buy Lego Toys</h2>
        <p className="text-5xl font-semibold text-white">
          Play with them. Break them. Smash them. Build them. Do whatever you
          want!
        </p>
        <button className="bg-[#6800fa] px-8 py-4 font-semibold rounded text-xl">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
