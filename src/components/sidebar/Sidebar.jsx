import { House, Info, Send, Users } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  // if (farah == happy) {
  //     sirine = smile
  // } else {
  //     sirine = notsmile
  // }

  // {farah == happy ? sirine = smile : sirine = notsmile}

  return (
    <div className=" h-full bg-white rounded-md p-4">
      <div className="w-full h-32  flex items-center justify-center">
        <span className="text-4xl font-bold">LOGO</span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900">
        <Link
          to="/"
          className={`  flex flex-row items-center text-sm font-semibold gap-2 p-1.5 rounded-md cursor-pointer transition-all ease-in-out duration-100 ${
            location.pathname === "/"
              ? "border-0 shadow  -translate-y-1 hover:border hover:shadow-none hover:translate-0   hover:text-gray-900 text-blue-500"
              : "border hover:border-0 hover:shadow hover:-translate-y-1 hover:text-blue-500  "
          }   `}
        >
          <House size={18} />
          <span>Home</span>
        </Link>

        <Link
          to="/users"
          className={`  flex flex-row items-center text-sm font-semibold gap-2 p-1.5 rounded-md cursor-pointer transition-all ease-in-out duration-100 ${
            location.pathname === "/users"
              ? "border-0 shadow  -translate-y-1 hover:border hover:shadow-none hover:translate-0   hover:text-gray-900 text-blue-500"
              : "border hover:border-0 hover:shadow hover:-translate-y-1 hover:text-blue-500  "
          }   `}
        >
          <Users size={18} />
          <span>Users</span>
        </Link>

        <div
          className={`  flex flex-row items-center text-sm font-semibold gap-2 p-1.5 rounded-md cursor-pointer transition-all ease-in-out duration-100 ${
            location.pathname === "/about"
              ? "border-0 shadow  -translate-y-1 hover:border hover:shadow-none hover:translate-0   hover:text-gray-900 text-blue-500"
              : "border hover:border-0 hover:shadow hover:-translate-y-1 hover:text-blue-500  "
          }   `}
        >
          <Info size={18} />
          <span>About</span>
        </div>

        <div
          className={`  flex flex-row items-center text-sm font-semibold gap-2 p-1.5 rounded-md cursor-pointer transition-all ease-in-out duration-100 ${
            location.pathname === "/contact"
              ? "border-0 shadow  -translate-y-1 hover:border hover:shadow-none hover:translate-0   hover:text-gray-900 text-blue-500"
              : "border hover:border-0 hover:shadow hover:-translate-y-1 hover:text-blue-500  "
          }   `}
        >
          <Send size={18} />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
