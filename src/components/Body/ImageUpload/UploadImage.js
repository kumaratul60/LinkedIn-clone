import React, { useState } from "react";
import { storage, db } from "../../../firebase";
import firebase from "firebase";
import { Button } from "@material-ui/core";

function UploadImage({ username }) {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]); // if select multiple file then it would be select only first file
    }
  };
  const handleUpload = () => {
    // storage => defined in firebase to store upladed data
    // images => creating a new folder with name images
    // image.name =>  file name that we selected from PC
    // put => putting that image into the storage

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        // Error Function...
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post image inside the database
            db.collection("posts").add({
              // timestamp is based on the server where code is living it allows us to show all the post by the correct timing
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),

              imageUrl: url,
              username: username,
            });
            setImage(null);
          });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <Button className="imageUpload__button" onClick={handleUpload}>
        {/* Upload */}
      </Button>
    </div>
  );
}

export default UploadImage;
