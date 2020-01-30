import React, { useState, useCallback, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import SearchBar from "./searchBar";
import ShowAdd from "./showAddForm";

export default function Header(props) {
  const history = useHistory();
  const [showAdd, setShowAdd] = useState(false)

   // Escape listener
 const handleUserKeyPress = useCallback(event => {
  const { keyCode } = event;

  if (keyCode === 27) {
    setShowAdd(false);
  }
}, []);

useEffect(() => {
  window.addEventListener("keydown", handleUserKeyPress);
  return () => {
    window.removeEventListener("keydown", handleUserKeyPress);
  };
}, [handleUserKeyPress]);

  return (
    <div className="bottom">
      <h1>Your album shelf</h1>
      <div className="buttons">
        <div className="addDiv">
          <button className="add" onClick={() => setShowAdd(true)}>
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
        {showAdd ? <ShowAdd /> : null}
      </div>
    </div>
  );
}
