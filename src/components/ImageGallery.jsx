import "./../style/component.scss";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <div key={index} className="image-item">
          <img src={img.src} alt={img.alt || `Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
