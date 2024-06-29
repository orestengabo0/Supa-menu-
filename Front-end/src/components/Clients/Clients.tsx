import { RiQrScanFill } from "react-icons/ri";
import { MdIncompleteCircle } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoSettings, IoSearch, IoNotificationsSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <div className="d-flex">
      <div className={`bg-black right pt-5 pb-5 ${styles["right"]}`}>
        <h2 className="text-center mb-5">
          <span className="text-warning">Supa</span>
          <span className="text-white">Menu</span>
        </h2>
        <div className="mb-5 pb-3">
          <div className={`mb-3 me-1 mt-1 p-2 overview ${styles["overview"]}`}>
            <span className="mx-3">
              <RiQrScanFill className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">Overview</span>
          </div>
          <div className={`mb-3 me-1 mt-1 p-2 client ${styles["client"]}`}>
            <span className="mx-3">
              <MdIncompleteCircle className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">Clients</span>
          </div>
          <div className={`mb-3 me-1 mt-1 p-2 users ${styles["users"]}`}>
            <span className="mx-3">
              <FaUsers className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">Users</span>
          </div>
        </div>
        <div className="pt-5">
          <div className={`mb-3 me-1 mt-1 p-2 overview ${styles["overview"]}`}>
            <span className="mx-3">
              <IoSettings className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">Settings</span>
          </div>
          <div className={`mb-3 me-1 mt-1 p-2 overview ${styles["overview"]}`}>
            <span className="mx-3">
              <RiAccountCircleFill className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">My Account</span>
          </div>
        </div>
      </div>
      {/*codes for the right side */}
      <div className="flex-grow-1">
        <div className="p-3 d-flex justify-content-between align-items-center">
          <h4 className="text-black">Overview</h4>
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
      </div>
    </div>
  );
};

export default Clients;
