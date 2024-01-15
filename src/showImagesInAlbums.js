// this component help us to show all images inside  particular Album
const ShowImagesInAlbums = ({ images, handleDeleteImages, handleEdit }) => {
  //  return List of images with JSX
  return (
    <>
      <div className="albumImages">
        {images.length > 0 ? (
          images.map((image) => (
            <div className="img" key={image.id}>
              <img src={image.imageUrl} alt={image.caption} />
              <h2>{image.caption}</h2>
              <div className="btns">
                <button onClick={() => handleDeleteImages(image.id)}>
                  <img
                    className="btnImg"
                    src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                    alt="delete"
                  />
                </button>
                <button onClick={() => handleEdit(image)}>
                  <img
                    className="btnImg"
                    src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
                    alt="Edit"
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="NoImgText">No Images Here</h2>
        )}
      </div>
    </>
  );
};

export default ShowImagesInAlbums;
