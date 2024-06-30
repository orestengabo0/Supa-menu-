import React from "react";
import styles from "./AddClientForm.module.css";
import SideBar from "../SideBar/SideBar";

const AddClientForm = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="bg-success-subtle flex-grow-1">
        <div className="bg-success-subtle d-flex justify-content-center mt-5 mb-5">
          <form
            className={`form-add-user rounded pt-4 p-3 ${styles["form-add-user"]}`}
          >
            <h4 className="text-center mb-3">Client</h4>
            <div className="mb-3">
              <label htmlFor="client" className="form-label">
                Client
              </label>
              <input
                type="text"
                id="client"
                className="form-control"
                placeholder="Client Names"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category">Category</label>
              <select id="category" className="form-select">
                <option value="">Choose category here</option>
                <option value="ceo">CEO</option>
                <option value="waiters">Waiters</option>
                <option value="ceo">CEO</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="representative" className="form-label">
                Representative
              </label>
              <input
                type="text"
                id="representatiev"
                className="form-control"
                placeholder="Names"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="creationDate" className="form-label">
                Date of Creation
              </label>
              <input type="date" id="creationDate" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Province, District, Sector, Cell"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Phone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bkaccount" className="form-label">
                Bank Account(IBAN)
              </label>
              <input
                type="text"
                id="bkaccount"
                className="form-control"
                placeholder="Phone"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-warning text-white fw-semibold">
                Add Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClientForm;
