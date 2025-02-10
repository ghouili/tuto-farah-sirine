import InputField from "../InputFields/InputField";

/* eslint-disable react/prop-types */
const UserModel = ({ display, ToggleModel }) => {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 right-0 bottom-0 left-0 z-50 ${
        display ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="fixed inset-0 bg-gray-900 opacity-25 backdrop-filter backdrop-blur-sm " />
      {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
      <div className="relative p-4 w-full max-w-4xl max-h-full overflow-y-auto overflow-x-hidden">
        {/* Modal content */}
        <div className="relative bg-white  rounded-lg shadow p-5 ">
          {/* Modal header */}
          <div className="flex items-center justify-between pb-4  rounded-t ">
            <h3 className="text-xl font-bold text-gray-900 "> User</h3>
            <button
              onClick={ToggleModel}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className=" w-full border-b border-gray-300 " />
          {/* <!-- Modal body --> */}
          <div className="w-full grid grid-cols-3 gap-4 py-4 ">
            <InputField
              data={{
                Id: "FName",
                Label: "First Name",
                Type: "text",
                Placeholder: "First Name..",
              }}
            />
            <InputField
              data={{
                Id: "LName",
                Label: "Last Name",
                Type: "text",
                Placeholder: "Last Name..",
              }}
            />
            <InputField
              data={{
                Id: "Email",
                Label: "Email",
                Type: "email",
                Placeholder: "Email..",
              }}
            />
            <InputField
              data={{
                Id: "Adress",
                Label: "Adress",
                Type: "text",
                Placeholder: "Adress..",
              }}
            />
            <InputField
              data={{
                Id: "cin",
                Label: "CIN",
                Type: "number",
                Placeholder: "CIN..",
              }}
            />
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center justify-end gap-4 border-t pt-4 border-gray-200 rounded-b ">
            <button
              onClick={ToggleModel}
              data-modal-hide="default-modal"
              type="button"
              className="py-1 px-3 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
            >
              Decline
            </button>
            <button
              onClick={ToggleModel}
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModel;
