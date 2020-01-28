import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, FieldArray } from "formik";
import { validationSchema } from "./helpers/validation";
import { useHistory, useParams } from "react-router-dom";
import Error from "./helpers/Error";
import FileUpload from "./helpers/FileUpload";
import MapList from "./helpers/MapList";

export default function EditForm() {
  const history = useHistory();
  const UserId = parseInt(useParams().id);
  const [results, setResults] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3007/albums/" + UserId);
      setResults(result.data);
    };
    fetchData();
  }, []);

  const { onSubmitUpload, onchangeUpload, filename, uploaded } = FileUpload();

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          artist: results.artist,
          title: results.title,
          description: results.description,
          year: results.date,
          image: results.image,
          track: results.track,
          tracks: results.tracks
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          fetch("http://localhost:3007/albums/" + UserId, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify({
              artist: values.artist,
              title: values.title,
              description: values.description,
              image: "/uploads/" + filename,
              year: values.year,
              tracks: values.tracks
            })
          });
          onSubmitUpload();
          history.push("/");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
              
              
              <img className='cover_photo' src={values.image} alt="No image" />
            <div className='forms'>
              <br />


              {/* Title */}


              <input
                className="title_form "
                onBlur={handleBlur}
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              <Error touched={touched.title} message={errors.title} />
              <br />

              {/* Artist name */}

              <div className='artist_name'>
              <input
                className="artist_name_form"
                onBlur={handleBlur}
                type="text"
                id="artist"
                name="artist"
                value={values.artist}
                onChange={handleChange}
              />
              <Error touched={touched.artist} message={errors.artist} />
              <br />
              
              </div>


              {/* Description */}

              <textarea
                name="description"
                id="description"
                onBlur={handleBlur}
                value={values.description}
                onChange={handleChange}
              />
              <Error
                touched={touched.description}
                message={errors.description}
              />
              <br />

              {/* Year of release */}

              <input
                className="date_of_release"
                placeholder="Date of album's release"
                id="year"
                name="year"
                type="text"
                value={values.quantity}
                onChange={handleChange}
              />
              <Error touched={touched.year} message={errors.year} />

              {/* Tracks */}

              <label className="tracks_label">Tracks: </label>
              <FieldArray
                id="tracks"
                name="tracks"
                type="text"
                value={values.tracks}
                onChange={handleChange}
              >
                {({ push }) => (
                  <div>
                    <button
                      className="addTrack_button"
                      type="button"
                      onClick={() => push(values.track)}
                    >
                      Add
                    </button>
                    <input
                      className='addTrack_form'
                      type="text"
                      id="track"
                      name="track"
                      values={values.track}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </FieldArray>
              <Error touched={touched.tracks} message={errors.tracks} />
              <MapList tracks={values.tracks} />

              {/* PHOTO */}

              <>
                <div>
                  <input
                    className="addPhoto_button"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={onchangeUpload}
                  />
                  {uploaded ? (
                    <div>Cover uploaded!</div>
                    ) : (
                      <div>Upload a Cover!</div>
                  )}
                </div>
              </>
              <br />

              {/* Submit button */}

              <button
                className="submitbutton"
                type="submit"
                disabled={isSubmitting}
              >
                Submit!
              </button>

              {/* <button className='submitbutton' onClick={<Redirect to='/' />}> Go back! </button> */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
