import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { loginWithEmail, loginWithGoogle } = useContext(AuthContext);

  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero h-[85vh]">
      <div className="hero-content grid grid-cols-2 justify-items-center">
        <div>
          <h1 className="text-5xl font-extrabold">Login now!</h1>
          <p className="py-6">
            Login with your account for getting extra features like add toys to
            sell them in a reasonable price or made a request for a custom toy!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleEmailLogin}>
              <div className="form-control">
                <label className="label">
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
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
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center">
              <p>
                New to this site? Please{" "}
                <Link to="/register" className="text-blue-700 underline">
                  register
                </Link>
                .
              </p>
            </div>
            <div className="divider">OR</div>
            <div className="grid grid-cols-2 justify-items-center items-center">
              <p className="font-semibold">Login with Google</p>
              <button
                onClick={handleGoogleLogin}
                className="bg-[#6800fa] text-white p-2 rounded-full"
              >
                <FaGoogle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
