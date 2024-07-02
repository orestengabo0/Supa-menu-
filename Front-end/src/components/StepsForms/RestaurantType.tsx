import React, { useRef } from "react";
import styles from './Steps.module.css'

const RestaurantType = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = () => {
    fileInputRef.current?.click(); 
  };

  return (
    <form className="card p-4">
      <div className="mb-3">
        <label htmlFor="resto-type">
          Restaurant Type (restaurant, pub, hotel, coffeeshop, other)
        </label>
        <select id="resto-type" className="form-select">
          <option value="Choose restaurant type">Choose restaurant type</option>
          <option value="restaurant">Restaurant</option>
          <option value="PUB">PUB</option>
          <option value="Hotel">Hotel</option>
          <option value="Coffee shop">Coffee shop</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <select id="resto-type" className="form-select">
          <option value="Choose restaurant type">African</option>
          <option value="restaurant">European</option>
          <option value="PUB">Asian</option>
          <option value="Hotel">North America</option>
          <option value="Coffee shop">Latin America</option>
          <option value="other">Australia</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="hours">Opening hours</label>
        <div className="d-flex">
          <div className={`input-group mb-3 from ${styles['from']}`}>
            <span className="input-group-text" id="basic-addon1">
              From
            </span>
            <input
              type="time"
              className="form-control"
              placeholder="14:00"
              aria-label="14:00"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className={`input-group mb-3 from ${styles['to']}`}>
            <span className="input-group-text" id="basic-addon1">
              To
            </span>
            <input
              type="time"
              className="form-control"
              placeholder="2:00"
              aria-label="2:00"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <p>Upload images (pictures or logos)</p>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button className={`btn btn-light image ${styles['image']}`} onClick={handleFileInputClick}>
          Choose images
        </button>
      </div>
    </form>
  );
};

export default RestaurantType;
