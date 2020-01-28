import React, { useEffect } from "react";
import { Formik, FieldArray } from "formik";
import { validationSchema } from "./helpers/validation";
import { useHistory } from "react-router-dom";
import Error from "./helpers/Error";
import FileUpload from "./helpers/FileUpload";

export default function AddForm() {
  const history = useHistory();

  const {
    onSubmitUpload,
    onchangeUpload,
    file,
    filename,
    uploaded,
    uploadedFile
  } = FileUpload();

  return (
    <div>
      <Formik
        initialValues={{
          artist: "",
          title: "",
          description: "",
          year: "",
          image: "",
          track: "",
          tracks: []
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          fetch("http://localhost:3007/albums", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
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
            <div>
              <br />

              <label>Artist: </label>
              <input
                className="textinput"
                onBlur={handleBlur}
                type="text"
                id="artist"
                name="artist"
                value={values.artist}
                onChange={handleChange}
              />
              <Error touched={touched.artist} message={errors.artist} />

              <br />

              <label>Title: </label>
              <input
                className="textinput"
                onBlur={handleBlur}
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              <Error touched={touched.title} message={errors.title} />

              <br />

              <label>Description: </label>
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

              <label>Year: </label>
              <input
                className="textinput"
                id="year"
                name="year"
                type="text"
                value={values.quantity}
                onChange={handleChange}
              />
              <Error touched={touched.year} message={errors.year} />

              <label>Tracks: </label>
              <FieldArray
                className="textinput"
                id="tracks"
                name="tracks"
                type="text"
                value={values.tracks}
                onChange={handleChange}
              >
                {({ push }) => (
                  <div>
                    <button type="button" onClick={() => push(values.track)}>
                      Add
                    </button>
                    <input
                      type="text"
                      id="track"
                      name="track"
                      values={values.track}
                      onChange={handleChange}
                    />
                    <div>
                      <ol>
                        <li>{values.track}</li>
                      </ol>
                    </div>
                  </div>
                )}
              </FieldArray>
              <Error touched={touched.tracks} message={errors.tracks} />

              {/* PHOTO */}

                <div>
                  <input
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
              <br />

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
