import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="flex justify-between items-center">
      <div>
        <ul className="flex gap-8 font-black text-xl items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-toys">All Toys</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li>
                <Link to="/add-a-toy">Add A Toy</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            {user ? (
              <div
                className="tooltip tooltip-right tooltip-info"
                data-tip={user.displayName}
              >
                <button onClick={handleLogout}>
                  <img className="w-12 rounded-full" src={user.photoURL} />
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-[#6800fa] text-white px-4 py-2 rounded">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
      {/* website logo and name starts */}
      <Link to="/">
        <div className="flex items-center gap-4">
          <h1 className="font-extrabold text-3xl">Tuk Toy Store</h1>
          <div>
            <img className="w-24" src={logo} />
          </div>
        </div>
      </Link>
      {/* website logo and name ends */}
    </nav>
  );
};

export default Nav;
