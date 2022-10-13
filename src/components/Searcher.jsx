import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Searcher = (props) => {
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState("");
  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };
  const handleSubmit = () => {
    setInputUser(valueInput);
  };
  return (
    <div className="flex justify-center py-4 mb-8">
      <div className="w-60 xl:w-96 sm:w-80 bg-cardbody h-8 flex flex-row space-x-2 px-3 rounded-2xl md:ml-6 md:w-96 lg:-ml-20 lg:w-72 lg:mt-6 ">
        <input
          className="w-80 bg-cardbody outline-none md:w-96  text-black"
          placeholder="Octocat"
          type="text"
          value={valueInput}
          onChange={onSearchValueChange}
        />

        <button onClick={handleSubmit}>
          <BsSearch className=" text-lg font-bold hover:text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default Searcher;
