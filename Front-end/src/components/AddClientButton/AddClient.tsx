import React from "react";
import { IoAdd } from "react-icons/io5";
import styles from '../Clients/Clients.module.css'

const AddClient = () => {
  return (
    <div>
      <h5>New Client</h5>
      <button className={`btn btn-secondary-subtle px-5 addClient ${styles['addClient']}`}>
        Add a new client
        <span className="mx-2 px-5">
          <IoAdd size={20} />
        </span>
      </button>
    </div>
  );
};

export default AddClient;
