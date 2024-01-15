// this component is displaying all albums and handle button
const AlbumList = ({ albumName, handleDeleteAlbum, handleAlbumClick }) => {
  return (
    <>
      <div className="albumList">
        {albumName.map((album, index) => (
          <div key={index} className="albums">
            <div className="Name" onClick={() => handleAlbumClick(album.id)}>
              <img
                className="imgAlbum"
                src="https://t4.ftcdn.net/jpg/02/47/21/83/240_F_247218391_2C5KJXz0epqrygWzv41YMQJsATagNwBF.jpg"
                alt="Album image"
              />
              <h2 className="nameOfAlbum">{album.name}</h2>
            </div>
            <button
              onClick={() => handleDeleteAlbum(album.id)}
              className="delete"
            >
              <img
                className="deleteAlbum"
                src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                alt="Delete"
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumList;
