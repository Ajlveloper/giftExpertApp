import React from "react";

const GiftGridItem = ({ title, url }) => {
  return (
    <>
      <div className="animate__animated animate__fadeInLeft card-content">
          <img className="card" src={url || 'Image not found'} alt={title} />
        <div className="text-item">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default GiftGridItem;
