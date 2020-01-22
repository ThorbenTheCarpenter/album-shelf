import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import SearchBar from "./searchBar";

export default function Header(props) {
  const history = useHistory();

  return (
    <div className="bottom">
      <h1>Your album shelf</h1>
      <div className="buttons">
      <div className='addDiv'>
        <button className="add" onClick={e => history.push("/addObj")}>
          +
        </button>
      </div>
        <div>
          {props.searchState ? (
            <FaSearch onClick={props.click} className="search" />
          ) : (
            <SearchBar handleInput={props.handleInput} />
          )}
        </div>
      </div>
    </div>
  );
}
