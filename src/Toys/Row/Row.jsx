import { Link } from "react-router-dom";

const Row = ({ row, index }) => {
  const { seller_name, name, sub_category, price, available_quantity, _id } =
    row;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>$ {price}</td>
      <td>{available_quantity}</td>
      <td>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default Row;
