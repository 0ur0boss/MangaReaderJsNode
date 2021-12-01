import React from "react";

const BtnFav = ({ isFaved, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: isFaved ? "green" : "white" }}
    >
      {isFaved ? "Enlever des favoris" : "Ajouter aux favoris"}
    </button>
  );
};

export default BtnFav;
