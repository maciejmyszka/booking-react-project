import React from "react";
import SearchingMainColumn from "./SearchingMainColumn";
import Result from "../components/Result";
import SearchingSecondColumn from "../components/SearchingSecondColumn";

const SearchAndResult = () => {
  return (
    <div className="main-content-wrapper">
      <div className="search-column-wrapper">
        <SearchingMainColumn />
        <SearchingSecondColumn />
      </div>
      <div className="result-wrapper">
        <Result />
      </div>
    </div>
  );
};

export default SearchAndResult;
