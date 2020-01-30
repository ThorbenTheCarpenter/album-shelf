import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteObject } from "../../Redux/actions/objectActions";
import { useHistory } from "react-router-dom";
import Details from "./helpers/details";
import {
  AiOutlineSetting,
  AiTwotoneDelete,
  AiTwotoneDiff
} from "react-icons/ai";
import ShowEdit from "./helpers/ShowEdit";

export default function Table(props) {
  const dispatch = useDispatch();
  const [ID, setID] = useState();
  const [isOpen, setIsOpen] = useState("closed")
  const [editMode, setEditMode] = useState(false);
  const [editPopUp, setEditPopUp] = useState("closed")

  const history = useHistory();

  // Edit Object

  const editObject = id => {
    history.push("/editObj/" + id);
  };

 // Escape listener
 const handleUserKeyPress = useCallback(event => {
  const { keyCode } = event;

  if (keyCode === 27) {
    setEditMode(false);
    setIsOpen('closed');
    setEditPopUp('closed');
  }
}, []);

useEffect(() => {
  window.addEventListener("keydown", handleUserKeyPress);
  return () => {
    window.removeEventListener("keydown", handleUserKeyPress);
  };
}, [handleUserKeyPress]);
  // Delete Object

  const removebject = (album, id) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${album}? There's no going back!`
      )
    ) {
      window.location.reload(true);
      dispatch(deleteObject(id));
    }
  };

  // handleClick

  const handleClick = (number) => {
    setID(number);
    setIsOpen('open');
  };

  return (
    <div>
      {/* Edit Button */}

      <AiOutlineSetting
        className="editModeButton"
        onClick={() => setEditMode(!editMode)}
      />

      {/* Mapping */}

      {props.data.map(row => (
        <div
          onClick={() => handleClick(row.id)}
          className="main_box"
          key={row.id}
        >
          <div className="vinyl">
            <div className="middle_circle"></div>
          </div>
          <div className="empty">
            <img className="album_image" alt="No cover" src={row.image} />
          </div>
          <div className="titles">
            {/* <Details /> */}
            <div className="artist">{row.artist}</div>
            <div className="title">{row.title}</div>
          </div>

          {/*  */}

          {editMode ? (
            <div className="buttondiv">
              <button
                className="delbutton"
                onClick={() => {
                  removebject(row.title, row.id);
                }}
              >
                <AiTwotoneDelete className="delIcon" />
              </button>


              <button
                className="editbutton"
                onClick={() => {
                  setEditPopUp('open')
                }}
              >
                <AiTwotoneDiff className="editIcon" />
              </button>
            </div>
          ) : null}

          {/* POPUP */}

          {editPopUp === "open" ? (
            <ShowEdit id={ID} />
          )
        : null
        }
          {isOpen === "open" && editMode === false ? (
              <Details id={ID} />
          ): null }
        </div>
      ))}
    </div>
  );
}
