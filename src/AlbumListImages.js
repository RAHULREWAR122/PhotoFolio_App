// importing firebasedocs to store data and show data
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
// use react hooks
import { useState, useEffect } from "react";
// import components
import ShowImagesInAlbums from "./showImagesInAlbums";
import AddImagesForm from "./addImagesForm";
// use noty for show notifications
import NotyUse from "./Noty";

// make  component AlbumListImages and inside it handle functions and JSX
const AlbumListImages = ({ selectedAlbum, goBack }) => {
  // make some constants using react hooks
  const [showForm, setShowForm] = useState("show");
  const [images, setImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editImg, setEditImg] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  // use useEffect hook for show our data that present in firebase DB
  useEffect(() => {
    // use onSnapshot for real time data base and save images inside photoFolio collection
    const unSub = onSnapshot(
      collection(db, "PhotoFolio", selectedAlbum, "Images"),
      (snapShot) => {
        const photos = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(photos);
        setFilteredImages(photos);
      }
    );
    return () => unSub();
  }, [selectedAlbum]);

  //handleAddImages function handle add images button
  async function handleAddImages(newImageData) {
    try {
      // save images inside photoFolio collection
      const imagesCollection = collection(
        db,
        "PhotoFolio",
        selectedAlbum,
        "Images"
      );
      // check condation is editMode and editImage , image will edit only if edidMode is present
      // if editMode is present then do this
      if (editMode && editImg) {
        const docRef = doc(
          db,
          "PhotoFolio",
          selectedAlbum,
          "Images",
          editImg.id
        );
        await updateDoc(docRef, {
          imageUrl: newImageData.imageUrl,
          caption: newImageData.caption,
        });
        setEditMode(false);
        setEditImg(null);
        // else take this Condation
      } else {
        await addDoc(imagesCollection, {
          imageUrl: newImageData.imageUrl,
          caption: newImageData.caption,
        });
        NotyUse("add");
      }
    } catch (error) {
      console.error("Error adding/updating image to Firestore:", error);
    }
  }

  // it handle delete image in list also database
  async function handleDeleteImages(id) {
    const docRef = doc(db, "PhotoFolio", selectedAlbum, "Images", id);
    await deleteDoc(docRef);
    NotyUse("delete");
  }

  // this will help us to filter images
  useEffect(() => {
    const filtered = images.filter((image) =>
      image.caption.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm, images]);

  // this will handle to go back button ,  and send to Ablum silde
  const handleGoBack = () => {
    goBack();
  };

  // this will handle the Edit button to set editing mode
  const handleEdit = (index) => {
    setEditMode(true);
    setEditImg(index);
    //  setShowEditForm(true)
  };

  // return JSX
  return (
    <>
      <button className="backBtn" onClick={handleGoBack}>
        <img
          className="goBack"
          src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"
          alt="Go to Back"
        />{" "}
      </button>

      {showForm !== "show" && (
        <AddImagesForm
          handleAddImages={handleAddImages}
          selectedAlbum={selectedAlbum}
          editMode={editMode}
          editImg={editImg}
        />
      )}

      <div className="mainBtn">
        <div className="filterImg">
          <input
            type="text"
            placeholder="Search Image...."
            id=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className={showForm === "show" ? "added" : "cancle"}
            onClick={() => setShowForm(showForm === "show" ? "Cancel" : "show")}
          >
            {showForm === "show" ? "Add Image" : "Cancel"}
          </button>
        </div>
      </div>
      <ShowImagesInAlbums
        images={filteredImages}
        handleDeleteImages={handleDeleteImages}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default AlbumListImages;
