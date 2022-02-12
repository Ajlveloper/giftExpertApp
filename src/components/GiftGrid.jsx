import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import GiftGridItem from "./GiftGridItem";

const GiftGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifts(category);

  console.log(images)

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        "Loading..."
      ) : (
        <div className="card-grid">
          {

            images.map((img) => (
            <GiftGridItem 
              key={img.id} 
              {...img}
              loading={loading}
              />
            ))
          
          }
        </div>
      )}
    </>
  );
};

export default GiftGrid;
