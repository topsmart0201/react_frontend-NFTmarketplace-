import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CustomSearch, SearchContent } from "./search.styled";
const Search = () => {
  const [serach_value, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <CustomSearch>
      <FaSearch className="search_icon" />
      <SearchContent
        value={serach_value}
        onChange={(e) => handleChange(e)}
        placeholder="Search here . . ."
      />
    </CustomSearch>
  );
};

export default Search;
