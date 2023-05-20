import Columns from "./Columns/Columns";

const Rows = () => {
  return (
    <div className="carousel carousel-center rounded-box flex-col md:flex-row">
      <Columns />
      <div className="hidden md:block">
        <Columns />
        <Columns />
        <Columns />
        <Columns />
      </div>
    </div>
  );
};

export default Rows;
