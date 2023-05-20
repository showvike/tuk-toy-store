import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import UserToy from "./UserToy/UserToy";

const UserToys = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/toys?seller_email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserToys(data));
  }, [user]);

  return (
    <>
      <div className="divider mb-12"></div>
      <div className="overflow-x-auto mt-12">
        <h2 className="text-3xl font-extrabold text-center mb-8">My Toys</h2>
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Picture</th>
              <th>Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Detail Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userToys.map((userToy, index) => (
              <UserToy
                key={userToy._id}
                userToy={userToy}
                index={index}
                userToys={userToys}
                setUserToys={setUserToys}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Total: {userToys.length} Toys</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="divider mt-12"></div>
    </>
  );
};

export default UserToys;
