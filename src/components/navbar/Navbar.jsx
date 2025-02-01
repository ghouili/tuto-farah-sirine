import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-white rounded-md px-10 py-2 flex flex-row items-center justify-between">
     
      <div className="  text-lg font-semibold flex items-center gap-5">
        <Link
          to="/"
          className="hover:text-blue-600 transition ease-in-out duration-300 "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-600 transition ease-in-out duration-300 "
        >
          About us
        </Link>
        <Link
          to="/contact"
          className="hover:text-blue-600 transition ease-in-out duration-300 "
        >
          Contact us
        </Link>
        <Link
          to="/"
          className="hover:text-blue-600 transition ease-in-out duration-300 "
        >
          Blog
        </Link>
      </div>
      <div className=" ">
        <button
         className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75  ">
            Authenticate
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
