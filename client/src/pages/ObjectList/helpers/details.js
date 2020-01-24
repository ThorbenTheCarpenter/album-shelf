import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchObjects } from "../../../Redux/actions/objectActions";

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
            <h2>{album.title}</h2>
        <p>{album.description}</p>
            <ol>
                {album.tracks.map(
                    track =>
                <li>{track}</li>
                )}
            </ol>
            <img src={album.image} alt='No image'/>
          </div>
        ))
        }
    </div>
  );
}
