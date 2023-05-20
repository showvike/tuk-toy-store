import Card from "../Card/Card";

const Cards = ({ toys }) => {
  return (
    <div className="mt-8 grid md:grid-cols-3 justify-items-center gap-4">
      {toys.map((toy) => (
        <Card key={toy._id} toy={toy} />
      ))}
    </div>
  );
};

export default Cards;
