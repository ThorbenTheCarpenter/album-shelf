import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchObjects } from "../../Redux/actions/objectActions";

export default function Details(props) {
  const objects = useSelector(state => state.objects.listOfObjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchObjects());
  }, []);

  return (
    <div>
      {objects
        .filter(id => id.id === props.id)
        .map(album => (
          <div key={album.id}>
            <h1>{album.artist}</h1>
            <ul>
                {album.tracks.map(
                    track =>
                <li>{track}</li>
                )}
            </ul>
          </div>
        ))
        }
    </div>
  );
}
