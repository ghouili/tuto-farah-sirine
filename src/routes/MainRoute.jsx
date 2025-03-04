import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { About, Home, Users } from "../containers";


const MainRoute = () => {
  return (
    <div className="flex flex-row w-screen h-screen p-4">
      <div className="w-[15vw] ">
        <Sidebar />
      </div>

      <div className=" w-[85vw] pl-6">
        <Navbar />
        <div className=" mt-6 ">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainRoute;
