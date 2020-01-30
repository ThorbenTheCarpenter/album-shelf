import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploaded, setUploaded] = useState(false);

  const onchangeUpload = e => {

    var fileName = e.target.files[0].name;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name.replace(/\s/g, ""));
      setUploaded(true);
      console.log(filename)
    } else {
      alert("Only jpg/jpeg and png files are allowed!");
    }
  };

  const onSubmitUpload = async e => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      const { filename, filePath } = res.data;

      setUploadedFile({ filename, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return {
    onSubmitUpload,
    onchangeUpload,
    file,
    filename,
    uploaded,
    uploadedFile
  };
};

export default FileUpload;
