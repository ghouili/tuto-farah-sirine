/* eslint-disable react/prop-types */
import { IdCard, Mail, MapPinHouse, PenLine, Trash2 } from "lucide-react";

const UserCard = ({ data, ToggleModel }) => {
  let { pic, FName, LName, cin, Email, Adress } = data;
  //   console.log(data.FName);
  return (
    <div className=" p-4 bg-white rounded-md">
      <div className=" w-full flex justify-center pt-4">
        <img
          src={pic}
          className="w-20 h-20 object-cover rounded-full border border-black"
          alt=""
        />
      </div>
      <div className="font-medium text-lg text-gray-700 flex flex-row justify-center gap-2">
        <h1>
          {FName} {LName}
        </h1>
      </div>
      <div className=" w-full border-b border-gray-300 my-3" />
      <div className="text-sm text-gray-700 flex flex-col gap-1.5">
        <div className="flex flex-row gap-2">
          <IdCard size={22} />
          <h4>{cin}</h4>
        </div>
        <div className="flex flex-row gap-2">
          <Mail size={22} />
          <h4>{Email}</h4>
        </div>
        <div className="flex flex-row gap-2">
          <MapPinHouse size={22} />
          <h4>{Adress}</h4>
        </div>
      </div>
      <div className=" w-full border-b border-gray-300 mt-6 mb-3" />
      <div className="flex flex-row justify-between items-center">
        <button
          onClick={ToggleModel}
          className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 "
        >
          <span className="relative flex flex-row gap-1 px-3 py-1 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-transparent ">
            <PenLine size={17} />
            Update
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-pink-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
          <span className="relative flex flex-row gap-1  px-3 py-1 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-transparent ">
            <Trash2 size={17} />
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
