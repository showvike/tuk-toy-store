import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const Add = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useTitle("Add A Toy");

  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;
    const picture_url = form.picture_url.value;
    const name = form.name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const available_quantity = parseInt(form.available_quantity.value);
    const detail_description = form.detail_description.value;
    const toy = {
      picture_url,
      name,
      seller_name,
      seller_email,
      sub_category,
      price,
      rating,
      available_quantity,
      detail_description,
    };
    console.log(toy);

    fetch(
      "https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/add",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success(`${name} is added`);
          form.reset();
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
              <h1 className="text-5xl font-extrabold text-center">Add A Toy</h1>
              <form onSubmit={handleAdd}>
                <div className="grid grid-cols-4 gap-8">
                  <div className="form-control">
                    <label className="label">
                      <span>Picture URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="picture url"
                      className="input input-bordered"
                      required
                      name="picture_url"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span>Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                      name="name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span>Seller Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="seller name"
                      className="input input-bordered"
                      required
                      name="seller_name"
                      defaultValue={user.displayName}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span>Seller Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="seller email"
                      className="input input-bordered"
                      required
                      name="seller_email"
                      defaultValue={user.email}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span>Sub Category</span>
                    </label>
                    <input
                      type="text"
                      placeholder="sub category"
                      className="input input-bordered"
                      required
                      name="sub_category"
                    />
                  </div>
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
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span>Rating</span>
                    </label>
                    <input
                      type="text"
                      placeholder="rating"
                      className="input input-bordered"
                      required
                      name="rating"
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
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add"
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

export default Add;
