import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Toy = () => {
  const toy = useLoaderData();
  const {
    picture_url,
    name,
    seller_name,
    seller_email,
    sub_category,
    price,
    rating,
    available_quantity,
    detail_description,
  } = toy;

  useTitle(name);

  return (
    <>
      <div className="divider mb-12"></div>
      <h2 className="font-extrabold text-3xl text-center mb-8">Toy Details</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img src={picture_url} />
        </figure>
        <div className="card-body items-center justify-center gap-4">
          <h3 className="card-title text-3xl font-extrabold">{name}</h3>
          <div className="text-xl font-semibold">
            {seller_name && seller_email && (
              <>
                <p>Seller Name: {seller_name}</p>
                <p>Seller Email: {seller_email}</p>
              </>
            )}
            <p>Sub Category: {sub_category}</p>
            <p>Price: $ {price}</p>
            <p>Rating: {rating}</p>
            <p>Available Quantity: {available_quantity}</p>
            <p>Detail Description: {detail_description}</p>
          </div>
        </div>
      </div>
      <div className="divider mt-12"></div>
    </>
  );
};

export default Toy;
