import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Nav = () => {
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
          <li>
            <Link to="/my-toys">My Toys</Link>
          </li>
          <li>
            <Link to="/add-a-toy">Add A Toy</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <button>
              <img />
            </button>
            <button className="bg-[#1f2937] text-white px-4 py-2 rounded">
              Login
            </button>
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
