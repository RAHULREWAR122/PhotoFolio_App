// this is component for AddAlbumForm and it take some data using props handle clicking button

const AddAlbumForm = ({ handleAddAlbum, name, setName }) => {
  return (
    <>
      <div className="albumForm">
        <div className="albumShow">
          <div className="S1">
            <h1>Create Album</h1>
          </div>
          <div className="S2">
            <form style={{ width: "80%" }} onSubmit={handleAddAlbum} action="">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbumForm;
