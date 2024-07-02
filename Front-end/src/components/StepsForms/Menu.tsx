import React, { useState, useRef } from "react";
import styles from "./Steps.module.css";

type FormType = "Drink" | "Starter" | "Appetizer" | "Dessert" | "Main" | null;

const Menu: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleButtonClick = (formType: Exclude<FormType, null>) => {
    setActiveForm(formType);
    setSelectedImage(null); // Reset image when switching forms
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const renderForm = () => {
    if (!activeForm) return null;

    return (
      <form className="card mt-3 p-3">
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
            type="number"
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
            onChange={handleFileChange}
          />
          <button
            type="button"
            className={`btn btn-light image ${styles["image"]}`}
            onClick={handleFileInputClick}
          >
            Choose images
          </button>
        </div>
        {selectedImage && (
          <div className="mt-3 position-relative">
            <img
              src={selectedImage as string}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
            <button
              type="button"
              className="btn btn-outline-warning btn-sm position-absolute top-0 end-0"
              style={{ transform: "translate(50%, -50%)" }}
              onClick={handleRemoveImage}
            >
              &times;
            </button>
          </div>
        )}
        <div className="mt-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-warning">
            Add more
          </button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <div>
        <button
          className={`btn ${
            activeForm === "Drink" ? "btn-warning" : "btn-outline-warning"
          } mx-1`}
          onClick={() => handleButtonClick("Drink")}
        >
          Drink
        </button>
        <button
          className={`btn ${
            activeForm === "Starter" ? "btn-warning" : "btn-outline-warning"
          } mx-1`}
          onClick={() => handleButtonClick("Starter")}
        >
          Starter
        </button>
        <button
          className={`btn ${
            activeForm === "Appetizer" ? "btn-warning" : "btn-outline-warning"
          } mx-1`}
          onClick={() => handleButtonClick("Appetizer")}
        >
          Appetizer
        </button>
        <button
          className={`btn ${
            activeForm === "Dessert" ? "btn-warning" : "btn-outline-warning"
          } mx-1`}
          onClick={() => handleButtonClick("Dessert")}
        >
          Dessert
        </button>
        <button
          className={`btn ${
            activeForm === "Main" ? "btn-warning" : "btn-outline-warning"
          } mx-1`}
          onClick={() => handleButtonClick("Main")}
        >
          Main
        </button>
      </div>
      {renderForm()}
    </div>
  );
};

export default Menu;
