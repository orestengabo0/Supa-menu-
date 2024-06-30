import { IoSearch, IoNotificationsSharp } from "react-icons/io5";
import styles from "./Clients.module.css";
import SideBar from "../SideBar/SideBar";
import AddClient from "../AddClientButton/AddClient";
import ClientTable from "../TableClients/ClientTable";

const Clients = () => {
  return (
    <div className="d-flex">
        <SideBar />
      {/*codes for the right side */}
      <div className="bg-success-subtle flex-grow-1">
        <div className="p-3 d-flex justify-content-between align-items-center">
          <h4 className="text-black">Clients</h4>
          <div className="d-flex align-items-center">
            <span className="mx-3">
              <IoSearch color="gray" size={25} />
            </span>
            <span>
              <IoNotificationsSharp color="gray" size={25} />
            </span>
            <div className="d-flex align-items-center ms-3">
              <p className="fw-semibold mx-3 mt-2 mb-0">NGABO Oreste</p>
              <div className={`bg-secondary box ${styles["box"]}`}></div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <AddClient />
        </div>
        <div>
          <ClientTable />
        </div>
      </div>
    </div>
  );
};

export default Clients;
