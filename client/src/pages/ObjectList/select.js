import React from "react";

const Select = props => {
  return (
    <select onChange={props.chooseAmount}>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>
  );
};

export default Select;
