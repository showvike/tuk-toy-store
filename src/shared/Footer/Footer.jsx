import {
  FaAddressBook,
  FaBusinessTime,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-12 space-y-4">
      <div className="grid grid-cols-4 justify-items-center">
        {/* div 1 starts */}
        <div className="space-y-8">
          <Link to="/">
            <div className="flex items-center gap-4">
              <div>
                <img className="w-24 rounded-full" src={logo} />
              </div>
              <h1 className="font-extrabold text-3xl">Tuk Toy Store</h1>
            </div>
          </Link>
          <div className="space-y-4">
            <p className="flex items-center gap-4">
              <FaPhoneAlt size={24} />
              <a href="#">Telephone: +01-234-567-890</a>
            </p>
            <p className="flex items-center gap-4">
              <FaMailBulk size={24} />
              <a href="#">Email: tuktoy@store.com</a>
            </p>
            <p className="flex items-center gap-4">
              <FaBusinessTime size={32} />
              14:00 - 22:00, Monday - Saturday, Sunday - closed
            </p>
            <p className="flex items-center gap-4">
              <FaAddressBook size={32} />
              000/0, Road No 0, Somewhere, Somewhere, Somewhere
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#">
              <FaFacebook size={32} />
            </a>
            <a href="#">
              <FaInstagram size={32} />
            </a>
            <a href="#">
              <FaTwitterSquare size={32} />
            </a>
          </div>
        </div>
        {/* div 1  ends */}
        {/* div 2 starts */}
        <div className="space-y-8">
          <h1 className="font-extrabold text-3xl">Information</h1>
          <div className="flex flex-col gap-4">
            <a href="#">About Us</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Conditions of Use</a>
            <a href="#">RSS</a>
          </div>
        </div>
        {/* div 2 ends */}
        {/* div 3 starts */}
        <div className="space-y-8">
          <h1 className="font-extrabold text-3xl">Service</h1>
          <div className="flex flex-col gap-4">
            <a href="#">Online Support</a>
            <a href="#">Help & FAQ</a>
            <a href="#">Call Center</a>
            <a href="#">Contact Us</a>
            <a href="#">Custom Toy</a>
          </div>
        </div>
        {/* div 3 ends */}
        {/* div 4 Stars */}
        <div className="space-y-8">
          <h1 className="font-extrabold text-3xl">Newsletter</h1>
          <div className="form-control space-y-4">
            <label className="label">
              <p>Enter your email address</p>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* div 4 ends */}
      </div>
      <div className="text-center text-sm font-semibold">
        <p>Copyright © 2023 - Made with love 💜 - by showvike</p>
      </div>
    </footer>
  );
};

export default Footer;
