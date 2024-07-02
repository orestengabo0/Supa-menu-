import React, { useRef } from "react";
import styles from "./Steps.module.css";

const Menu = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <form className="card p-3">
      <div>
        <button className="btn btn-warning mx-1">Drink</button>
        <button className="btn btn-outline-warning mx-1">Starter</button>
        <button className="btn btn-outline-warning mx-1">Appetizer</button>
        <button className="btn btn-outline-warning mx-1">Dessert</button>
        <button className="btn btn-outline-warning mx-1">Main</button>
      </div>
      <div className="mb-3 mt-5">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Menu Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          className="form-control"
          placeholder="RWF"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description">Menu description</label>
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Ingredients"
        />
      </div>
      <div>
        <p>Upload image</p>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <button
          className={`btn btn-light image ${styles["image"]}`}
          onClick={handleFileInputClick}
        >
          Choose images
        </button>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <button className="btn btn-outline-warning">Add more</button>
      </div>
    </form>
  );
};

export default Menu;
