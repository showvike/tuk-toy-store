import { useContext } from "react";
import { Link } from "react-router-dom";
import defImg from "../../assets/default-image.avif";
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
      {/* main nav stars */}
      <div>
        <ul className="flex gap-8 font-black text-xl items-center">
          {/* default nav starts */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toys">All Toys</Link>
          </li>
          {/* default nav ends */}
          {/* private nav starts */}
          {user && (
            <>
              <li>
                <Link to="/user_toys">My Toys</Link>
              </li>
              <li>
                <Link to="/add">Add A Toy</Link>
              </li>
            </>
          )}
          {/* private nav ends */}
          {/* default nav starts */}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          {/* default nav ends */}
          {/* conditional nav starts */}
          <li>
            {user ? (
              <div
                className="tooltip tooltip-right tooltip-info"
                data-tip={user.displayName ? user.displayName : null}
              >
                <button onClick={handleLogout}>
                  <img
                    className="w-12 rounded-full"
                    src={user.photoURL ? user.photoURL : defImg}
                  />
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
          {/* conditional nav starts */}
        </ul>
      </div>
      {/* main nav ends */}
      {/* website logo and name starts */}
      <Link to="/">
        <div className="flex items-center gap-4">
          <h1 className="font-extrabold text-3xl">Tuk Toy Store</h1>
          <div>
            <img className="w-24 rounded-full" src={logo} />
          </div>
        </div>
      </Link>
      {/* website logo and name ends */}
    </nav>
  );
};

export default Nav;
