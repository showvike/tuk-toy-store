import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Card = ({ toy }) => {
  const { picture_url, name, price, rating, _id } = toy;
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user) {
      toast.error("You have to log in first to view details.");
    }
  };

  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={picture_url} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-extrabold">{name}</h2>
        <p className="text-xl font-semibold">
          Price: $ {price}
          <br />
          Rating: {rating}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/toy/${_id}`}>
            <button onClick={handleViewDetails} className="btn btn-info">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
