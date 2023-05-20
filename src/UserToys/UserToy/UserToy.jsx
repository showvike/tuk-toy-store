import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserToy = ({ userToy, index, userToys, setUserToys }) => {
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/delete/${_id}`,
          { method: "DELETE" }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
            const remainingUserToys = userToys.filter(
              (userToy) => userToy._id !== _id
            );
            setUserToys(remainingUserToys);
          });
      }
    });
  };

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
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default UserToy;
