import React from "react";

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div id="ms-overlay">
      <div className="ms-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
