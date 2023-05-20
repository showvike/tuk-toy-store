import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const toy = useLoaderData();
  const { name, price, available_quantity, detail_description, _id } = toy;
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const available_quantity = form.available_quantity.value;
    const detail_description = form.detail_description.value;
    const updatedToy = {
      price,
      available_quantity,
      detail_description,
    };
    console.log(updatedToy);

    fetch(
      `https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/update/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`${name} is updated`);
          navigate("/user_toys");
        }
      });
  };

  return (
    <>
      <div className="divider mb-12"></div>
      <div className="hero">
        <div className="hero-content">
          <div className="card shadow-2xl bg-base-100 w-screen">
            <div className="card-body">
              <h1 className="text-5xl font-extrabold text-center">
                Update Toy Information of {name}
              </h1>
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-2 gap-8">
                  <div className="form-control">
                    <label className="label">
                      <span>Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="price"
                      className="input input-bordered"
                      required
                      name="price"
                      defaultValue={price}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span>Available Quantity</span>
                    </label>
                    <input
                      type="text"
                      placeholder="available quantity"
                      className="input input-bordered"
                      required
                      name="available_quantity"
                      defaultValue={available_quantity}
                    />
                  </div>
                  <div className="form-control col-span-4">
                    <label className="label">
                      <span>Detail Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="detail description"
                      className="input input-bordered"
                      required
                      name="detail_description"
                      defaultValue={detail_description}
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="divider mt-12"></div>
    </>
  );
};

export default Update;
