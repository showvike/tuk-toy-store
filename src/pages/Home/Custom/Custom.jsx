import custom from "../../../assets/custom.webp";

const Custom = () => {
  return (
    <section
      className="hero min-h-screen mt-12 rounded-3xl"
      style={{
        backgroundImage: `url(${custom})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="mb-5 text-7xl font-extrabold">Make Your Custom Toy</h2>
          <p className="mb-5 font-semibold text-xl">
            You can make your custom toy with LEGO. Contact with us. Click the
            button below. Lets Build Together!
          </p>
          <button className="btn-primary px-8 py-4 text-lg rounded-lg font-semibold">
            Lets Build
          </button>
        </div>
      </div>
    </section>
  );
};

export default Custom;
