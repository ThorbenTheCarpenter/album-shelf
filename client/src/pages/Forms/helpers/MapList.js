import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchObjects } from "../../../Redux/actions/objectActions";

export default function MapList(props) {
  const objects = useSelector(state => state.objects.listOfObjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchObjects());
  }, [dispatch]);

  return (
    <div>
      {objects
        .filter(id => id.id === props.id)
        .map(album => (
          <div key={album.id}>
            <ol>
              {album.tracks.map(track => (
                <li>{track}</li>
              ))}
            </ol>
          </div>
        ))}
        {props.tracks}
    </div>
  );
}
