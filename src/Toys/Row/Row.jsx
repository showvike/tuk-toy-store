import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Row = ({ row, index }) => {
  const { seller_name, name, sub_category, price, available_quantity } = row;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (!user) {
      navigate("/login");
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name || "Admin"}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>$ {price}</td>
      <td>{available_quantity}</td>
      <td>
        <button onClick={handleViewDetails} className="btn btn-primary">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default Row;
