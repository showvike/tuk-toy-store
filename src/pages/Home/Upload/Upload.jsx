import upload from "../../../assets/upload.webp";

const Upload = () => {
  return (
    <section className="card lg:card-side bg-base-100 shadow-xl mt-12">
      <figure>
        <img src={upload} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-7xl font-extrabold">
          Upload Your Design!
        </h2>
        <p className="text-xl font-semibold">
          Click the button to upload your design for make your custom toy and
          enjoy. Select the design and forget. We will contact with you when
          finished!
        </p>
        <div className="card-actions justify-end">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default Upload;
