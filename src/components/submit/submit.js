import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CustomSearch, SubmitContent } from "./submit.styled";
const Submit = () => {
  const [serach_value, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <CustomSearch>
      {/* <FaSearch className="search_icon" /> */}
      <SubmitContent
        value={serach_value}
        onChange={(e) => handleChange(e)}
        placeholder="Enter your email here . . ."
      />
    </CustomSearch>
  );
};

export default Submit;
