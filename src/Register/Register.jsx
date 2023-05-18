import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero h-[85vh]">
      <div className="hero-content">
        <div className="card shadow-2xl bg-base-100 w-screen">
          <div className="card-body">
            <h1 className="text-5xl font-extrabold text-center">
              Please Register!
            </h1>
            <form>
              <div className="grid grid-cols-2 gap-8">
                <div className="form-control">
                  <label className="label">
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span>Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span>Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
                />
              </div>
            </form>
            <div className="text-center">
              <p>
                Already have an account? Please{" "}
                <Link to="/login" className="text-blue-700 underline">
                  login
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
