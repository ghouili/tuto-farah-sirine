/* eslint-disable react/prop-types */
const InputField = ({ data }) => {
  let { Id, Label, Type, Placeholder } = data;
  return (
    <div className="relative border-2 w-full rounded-md border-gray-700 py-1.5 px-3">
      <label
        htmlFor={Id}
        className="absolute -top-2.5 left-1.5 px-1.5 text-xs bg-white"
      >
        {Label}
      </label>
      <input
        id={Id}
        className="outline-none"
        type={Type}
        placeholder={Placeholder}
      />
    </div>
  );
};

export default InputField;
