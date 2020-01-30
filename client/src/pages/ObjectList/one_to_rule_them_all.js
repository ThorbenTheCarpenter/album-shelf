import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchObjects } from "../../Redux/actions/objectActions";
import Table from "./singleObject";
import Header from "../Header/header";



export default function ObjectList() {
  const [search, setSearch] = useState("");
  const [searchState, setsearchState] = useState(true);

  const objects = useSelector(state => state.objects.listOfObjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchObjects());
  }, []);

  // Escape listener
  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event;

    if (keyCode === 27) {
      setsearchState(true);
      setSearch("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  // Search bar

  const searchedObjects = objects.filter(object => {
    return object.title.toLowerCase().includes(search);
  });

  const handleInput = e => setSearch(e.target.value);

  return (
    <div>
      <Header
        searchState={searchState}
        handleInput={handleInput}
        click={() => setsearchState(!searchState)}
      />
      <Table data={searchedObjects} />
    </div>
  );
}
