import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Row from "./Row/Row";

const Toys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setToys(loadedToys);
  }, [loadedToys]);

  const handleSearch = () => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/toys?name=${inputRef.current.value}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <>
      <div className="divider mb-12"></div>
      <div className="overflow-x-auto mt-12">
        <h2 className="text-3xl font-extrabold text-center mb-8">All Toys</h2>
        <div className="form-control mb-4">
          <div className="input-group justify-end">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              ref={inputRef}
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((row, index) => (
              <Row key={row._id} row={row} index={index} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>Total: {toys.length} Toys</th>
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

export default Toys;
