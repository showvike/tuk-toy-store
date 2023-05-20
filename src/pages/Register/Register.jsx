import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { register, update } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    if (password.length < 6) {
      setError("Error: Password is less than six characters.");
      return;
    }

    register(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        update(name, photoUrl)
          .then(() => {
            setError("");
            navigate("/");
            navigate(0);
          })
          .catch((error) => {
            const message = error.message;
            setError(message);
          });
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
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
                Please Register!
              </h1>
              <form onSubmit={handleRegister}>
                <div className="grid grid-cols-2 gap-8">
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
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                      name="email"
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
                      required
                      name="password"
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
                      required
                      name="photoUrl"
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
              {error && (
                <p className="text-error font-semibold text-center">{error}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="divider mt-12"></div>
    </>
  );
};

export default Register;
