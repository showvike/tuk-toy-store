import Rows from "./Rows/Rows";

const Gallery = () => {
  return (
    <section className="mt-12">
      <h2 className="my-8 text-5xl font-extrabold text-center">
        Some of Our Lego Toys
      </h2>
      <div className="relative">
        <Rows />
        <Rows />
        <Rows />
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#0000007f] rounded-box flex flex-col items-center justify-center text-white space-y-4">
          <h2 className="text-7xl font-extrabold">Explore Them!</h2>
          <button className="bg-[#6800fa] px-8 py-4 font-semibold rounded text-xl">
            Click Here
          </button>
          <p className="text-5xl font-semibold text-white">
            Click the button to explore!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
