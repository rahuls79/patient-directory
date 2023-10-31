import React, { useState } from "react";
import Form from "./Form";
import "./SearchPatient.css";

const SearchPatient = () => {
  const [searchKey, setSearchKey] = useState("");

  const searchButtonHandler = () => {};

  return (
    <div>
      <div className="search-section">
        <input
          id="search-input"
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        ></input>
        <button id="search-button" onClick={searchButtonHandler}>
          🔍
        </button>
      </div>
      <br /> <br />
      <Form />
    </div>
  );
};

export default SearchPatient;
