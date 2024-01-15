import React, { useEffect, useState } from "react";

// this is component , in this we handle functions , JSX etc.
// use some data which is pass by props : handleAddImages , editImage , EditMode
const AddImagesForm = ({ handleAddImages, editMode, editImg }) => {
  // for edit image url or caption so first we keep new data a null string
  const [newImageData, setNewImageData] = useState({
    imageUrl: "",
    caption: "",
  });

  // we are using here useEffect hook to check that Edit button is clcik or not so take help of editMode is true or false if true then form input field keep new data else add new data

  useEffect(() => {
    if (editMode) {
      setNewImageData({
        imageUrl: editImg.imageUrl,
        caption: editImg.caption,
      });
    } else {
      setNewImageData({
        imageUrl: "",
        caption: "",
      });
    }
  }, [editMode, editImg]);

  // handle submit button to add or update image
  const handleSubmit = async (e) => {
    e.preventDefault();
    // it's check first that what is the data means new data or wnat to updat old data
    handleAddImages(newImageData);
    // after add input field null
    setNewImageData({
      imageUrl: "",
      caption: "",
    });
  };

  // handle cancle to update image url or caption
  const CancleEdit = () => {
    if (!editMode) {
      setNewImageData({
        imageUrl: "",
        caption: "",
      });
    }
  };

  // Display this JSX
  return (
    <div className="albumForm">
      <div className="albumShow">
        <div className="S1">
          <h1>Create Images</h1>
        </div>
        <div className="S3">
          <form style={{ width: "80%" }} onSubmit={handleSubmit} action="">
            <input
              type="text"
              placeholder="Image URL"
              value={newImageData.imageUrl}
              onChange={(e) =>
                setNewImageData({ ...newImageData, imageUrl: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Caption"
              value={newImageData.caption}
              onChange={(e) =>
                setNewImageData({ ...newImageData, caption: e.target.value })
              }
              required
            />
            <button type="submit">{editMode ? "Update" : "Add"}</button>
            <button
              style={{ background: "red", color: "white" }}
              onClick={CancleEdit}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddImagesForm;
