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
    <div className='popup'>
      {objects
        .filter(id => id.id === props.id)
        .map(album => (
          <div className='popup\_inner' key={album.id}>
          <p className='year_popup'>{album.year}</p>
            <h1 className='artist_popup'>{album.artist}</h1>
            <h2 className='title_popup'>{album.title}</h2>
              <img className='image_popup' src={album.image} alt='No image'/>
            <ol className="trackListPopup">
                {album.tracks.map(
                    track =>
                <li>{track}</li>
                )}
            </ol>
          </div>
        ))
        }
    </div>
  );
}
