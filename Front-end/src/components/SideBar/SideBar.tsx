import { RiQrScanFill } from "react-icons/ri";
import { MdIncompleteCircle } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoSettings, IoSearch, IoNotificationsSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={`bg-black right pt-5 pb-5 ${styles["right"]}`}>
      <h2 className="text-center mb-5">
        <span className="text-warning fw-semibold">Supa</span>
        <span className="text-white fw-semibold">Menu</span>
      </h2>
      <div className="mb-5 pb-3">
        <div className={`overview p-2 ${styles['overview']}`}>
          <Link to={'/clientTable'} className={`overview ${styles["overview"]}`}>
            <span className="mx-3">
              <RiQrScanFill className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">Overview</span>
          </Link>
        </div>
        <div className={`client p-2 ${styles["client"]}`}>
          <Link to={"/clientTable"} className={`clients ${styles["clients"]}`}>
            <span className="mx-3">
              <MdIncompleteCircle className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">Clients</span>
          </Link>
        </div>
        <div className={`user p-2 ${styles["user"]}`}>
          <Link to={"/clientTable"} className={`users ${styles["users"]}`}>
            <span className="mx-3">
              <FaUsers className="icon" color="white" size={25} />
            </span>
            <span className="mx-1 text-white">Users</span>
          </Link>
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
  );
};

export default SideBar;
