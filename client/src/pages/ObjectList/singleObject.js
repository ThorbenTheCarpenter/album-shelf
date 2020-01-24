import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteObject } from "../../Redux/actions/objectActions";
import { useHistory } from "react-router-dom";
import Details from "./helpers/details";
import useModal from "use-react-modal";
import {
  AiOutlineSetting,
  AiTwotoneDelete,
  AiTwotoneDiff
} from "react-icons/ai";



export default function Table(props) {
  const [limit, setLimit] = useState(100);
  const dispatch = useDispatch();
  const [ID, setID] = useState();
  const { isOpen, openModal, closeModal, Modal } = useModal();
  const [editMode, setEditMode] = useState(false);

  const history = useHistory();

  // Escape listener
  const handleUserKeyPress = useCallback(event => {
    const { key, keyCode } = event;

    if (keyCode === 27) {
      setEditMode(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  // Edit Object

  const editObject = id => {
    history.push("/editObj/" + id);
  };

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

  const handleClick = (e, number) => {
    setID(number);
    openModal(e);
  };

  // handling number of shown products

  const chooseAmount = e => {
    setLimit(e.target.value);
  };

  return (
    <div>
      {/* Edit Button */}

      <AiOutlineSetting
        className="editModeButton"
        onClick={() => setEditMode(!editMode)}
      />

      {/* Mapping */}

      {props.data.slice(0, limit).map(row => (
        <div
          onClick={e => handleClick(e, row.id)}
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
                  editObject(row.id);
                }}
              >
                <AiTwotoneDiff className="editIcon" />
              </button>
            </div>
          ) : null}

          {/* MODAL */}

          {isOpen && (
            <Modal>
              <button onClick={e => closeModal(e)}>close</button>
              <Details id={ID} />
            </Modal>
          )}
        </div>
      ))}
      {/* Show on the page: <Select chooseAmount={chooseAmount} /> */}
    </div>
  );
}
