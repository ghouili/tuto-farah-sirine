import { Link } from "react-router-dom";
import { UserCard, UserModel } from "../../components";
import { useState } from "react";

const Users = () => {
  let users = [
    {
      pic: "https://i.pinimg.com/736x/80/5d/e5/805de523a5a6c5f5e25afe5f3b2a137c.jpg",
      FName: "Bourdgena",
      LName: "Lahmer",
      cin: "14656511",
      Email: "Bourgdena@innoviaburst.com",
      Adress: "Ouardia 5, Tunis, Tunisie",
    },
    {
      pic: "https://i.pinimg.com/736x/4f/29/48/4f2948858a5c162d6111ac3b58d31953.jpg",
      FName: "Rzouga",
      LName: "Sghayer",
      cin: "14656511",
      Email: "Rzouga@innoviaburst.com",
      Adress: "Ouardia 5, Tunis, Tunisie",
    },
    {
      pic: "https://i.pinimg.com/736x/57/b8/21/57b8211168f6f665783cdc557c1145c0.jpg",
      FName: "Lamine",
      LName: "Lkefi",
      cin: "14656511",
      Email: "Lamine@innoviaburst.com",
      Adress: "Ouardia 5, Tunis, Tunisie",
    },
  ];

  const [display, setDisplay] = useState(false);

  const ToggleModel = () => setDisplay(!display);


  return (
    <div className=" w-full">
      <div className="bg-white w-full py-1.5 px-4 flex flex-row justify-between items-center rounded-md">
        <div className="flex flex-row gap-1">
          <Link to="/" className="text-blue-500">
            Home
          </Link>{" "}
          / <p className="font-medium">Users</p>
        </div>
        <button
          onClick={ToggleModel}
          className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 "
        >
          <span className="relative px-3 py-1 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-transparent ">
            Add User
          </span>
        </button>
      </div>

      <div className="w-full pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {users.map(({ pic, FName, LName, cin, Email, Adress }, index) => {
          return (
            <UserCard
              key={index}
              data={{ pic, FName, LName, cin, Email, Adress }}
              ToggleModel={ToggleModel}
            />
          );
        })}
      </div>
      <UserModel display={display} ToggleModel={ToggleModel} />
    </div>
  );
};

export default Users;
