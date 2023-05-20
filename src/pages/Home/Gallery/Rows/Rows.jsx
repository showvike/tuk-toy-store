import Columns from "./Columns/Columns";

const Rows = () => {
  return (
    <div className="carousel carousel-center rounded-box flex-col md:flex-row">
      <Columns />
      <Columns />
      <Columns />
      <Columns />
      <Columns />
    </div>
  );
};

export default Rows;
