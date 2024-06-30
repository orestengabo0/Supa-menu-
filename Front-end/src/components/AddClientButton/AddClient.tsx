import React from "react";
import { IoAdd } from "react-icons/io5";
import styles from '../Clients/Clients.module.css'
import { Link } from 'react-router-dom'

const AddClient = () => {
  return (
    <div>
      <h5>New Client</h5>
      <Link to={'/addClientForm'} className={`btn btn-secondary-subtle px-5 addClient ${styles['addClient']}`}>
        Add a new client
        <span className="mx-2 px-5">
          <IoAdd size={20} />
        </span>
      </Link>
    </div>
  );
};

export default AddClient;
