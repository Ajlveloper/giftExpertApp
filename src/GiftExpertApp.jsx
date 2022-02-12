import React, { useState } from "react";
import AddCategorie from "./components/AddCategorie";
import GiftGrid from "./components/GiftGrid";

import "./GiftExpertApp.css";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Goku']);

  // const handleAddCategories = () => {
  //     setCategories([...categories, 'Goku'])
  // }

  return (
    <div>
      {/* <div className="content-header"> */}
        <header className="header">
          <h2 className="title">GiftExpertApp</h2>
        </header>
      {/* </div> */}
      <AddCategorie setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAddCategories}>Agrgar categories</button> */}
      <ol>
        {categories.map((category) => (
          <GiftGrid
            key={category} //Lo mando de una vez sin necesidad de que lo tome el componente como tal al desestructurar
            category={category}
          />
        ))}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
