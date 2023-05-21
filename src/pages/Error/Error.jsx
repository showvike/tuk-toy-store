import { Link } from "react-router-dom";
import error from "../../assets/error.png";
import useTitle from "../../hooks/useTitle";

const Error = () => {
  useTitle("Error");

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-error">Back To Home</button>
        </Link>
      </div>
      <div>
        <img className="w-screen rounded-lg" src={error} />
      </div>
    </div>
  );
};

export default Error;
