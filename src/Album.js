// import firebase docs for sending our data / save data on firebase databse
import {
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
// import NotyUse , we make a other file for showing notifications and use anyWhwre
import NotyUse from "./Noty";

// import react hooks , navbar , AlbumForm ,AlbumList , albumListImages and db
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AddAlbumForm from "./addAlbumForm";
import AlbumList from "./AlbumList";
import AlbumListImages from "./AlbumListImages";
import { db } from "./firebase";

// we make a component album and keep inside all function , logics and JSX
function Album() {
  const [addAlbum, setAddAlbum] = useState("Add");
  const [name, setName] = useState("");
  const [albumName, setAlbumName] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  //  we are using useEffect to show our data which is store on firebase
  useEffect(() => {
    // useing onSnapshot hook to get realtime data
    const unSub = onSnapshot(collection(db, "PhotoFolio"), (snapShot) => {
      const photos = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // send data on list to display data
      setAlbumName(photos);
    });
  }, []);

  // handle Add button which is in AlbumForm , we sent it with props
  async function handleAddAlbum(e) {
    e.preventDefault();
    // use noty to show notification
    NotyUse("add");

    try {
      // send data on firebase using input form
      const docRef = await addDoc(collection(db, "PhotoFolio"), {
        name: name,
        cretedAt: new Date(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // after clcik add button input field is null
    setName("");
  }

  // handle delete button
  async function handleDeleteAlbum(id) {
    // delete also on database
    const docRef = doc(db, "PhotoFolio", id);
    await deleteDoc(docRef);
    // show notification after clicking delete 
    NotyUse("delete");
  }

  // handle album clcik to go inside the particular album 
  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albumId);
  };

  // this is the handling go back page when we are inside album , then it help us to come back on Album page
  const handleGoBack = () => {
    setSelectedAlbum(null);
  };

  // this is the JSX
  return (
    // using condition rendring like how default page display and how render other slide when we clcik a perticular Album 
    // and send data with props
    <>
          <Navbar />
         {selectedAlbum ? (
        <AlbumListImages selectedAlbum={selectedAlbum} goBack={handleGoBack} />
      ) : (
        <>
          {addAlbum !== "Add" && (
            <AddAlbumForm
              name={name}
              setName={setName}
              handleAddAlbum={handleAddAlbum}
            />
          )}
          <div className="mainBtn">
            <button
              className={addAlbum === "Add" ? "added" : "cancle"}
              onClick={() => setAddAlbum(addAlbum === "Add" ? "Cancle" : "Add")}
            >
              {addAlbum === "Add" ? "Add Album" : "Cancle"}
            </button>
          </div>

          <AlbumList
            albumName={albumName}
            handleDeleteAlbum={handleDeleteAlbum}
            handleAlbumClick={handleAlbumClick}
          />
        </>
      )}
    </>
  );
}

export default Album;
