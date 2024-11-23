import React from 'react';
import imageList from "../data/images.json";

const ImageTileGallery = ({ images }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "16px",
        padding: "20px",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={image.url}
            alt={image.alt || `Image ${index + 1}`}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
            }}
          />
          {image.caption && (
            <div
              style={{
                padding: "8px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                fontSize: "14px",
              }}
            >
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Utsava = () => {
  return <div className="content">
      <ImageTileGallery images={imageList} />
</div>;
};

export default Utsava;
