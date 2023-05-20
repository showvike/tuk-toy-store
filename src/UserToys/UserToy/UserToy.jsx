import { Link } from "react-router-dom";

const UserToy = ({ userToy, index }) => {
  const {
    picture_url,
    name,
    sub_category,
    price,
    rating,
    available_quantity,
    detail_description,
    _id,
  } = userToy;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-16 h-16 object-contain" src={picture_url} />
      </td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>$ {price}</td>
      <td>{rating}</td>
      <td>{available_quantity}</td>
      <td>{detail_description}</td>
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-warning">Update</button>
        </Link>
      </th>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-error">Delete</button>
        </Link>
      </th>
    </tr>
  );
};

export default UserToy;
