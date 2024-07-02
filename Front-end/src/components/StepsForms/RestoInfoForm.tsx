import React from "react";
import styles from "./Steps.module.css";

const RestoInfoForm = () => {
  return (
      <form className={`card p-4 resto-info ${styles["resto-info"]}`}>
        <div className="mb-3">
          <h6 className="text-black fw-semibold">Restaurant information</h6>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Restaurant Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Restaurant Complete Name"
            />
          </div>
        </div>
        <div className="mb-3">
          <h6 className="text-black fw-semibold">
            Contacts number @ Restaurant
          </h6>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              +250
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile number"
              aria-label="Mobile phone"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="mb-3">
          <h6 className="text-black fw-semibold">Restaurant owner details</h6>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              +250
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile number"
              aria-label="Mobile phone"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Owner Names"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Restaurant Owner Email"
            />
          </div>
        </div>
      </form>
  );
};

export default RestoInfoForm;
