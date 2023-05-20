import Card from "../Card/Card";

const Cards = ({ toys }) => {
  return (
    <div className="mt-8 grid grid-cols-3 justify-items-center">
      {toys.map((toy) => (
        <Card key={toy._id} toy={toy} />
      ))}
    </div>
  );
};

export default Cards;
