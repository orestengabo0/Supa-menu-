import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import styles from "./Overview.module.css";
import OverviewCard from "./OverviewCard";
import OverviewCategoriesInfo from "./OverviewCategoriesInfo";
import OverviewCreate from "./OverviewCreate";

const Overview = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch((prevState) => !prevState);
  };

  return (
    <div className="d-flex">
      <SideBar />
      <div className="bg-success-subtle flex-grow-1">
        <div className="p-3 d-flex justify-content-between align-items-center">
          <h4 className="text-black">Overview</h4>
          <div className="d-flex align-items-center">
            <div
              className="mx-3"
              onClick={handleSearchClick}
              style={{ cursor: "pointer" }}
            >
              <IoSearch color="gray" size={25} />
            </div>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="form-control mx-3"
                style={{ width: "200px" }}
              />
            )}
            <span>
              <IoNotificationsSharp color="gray" size={25} />
            </span>
            <div className="d-flex align-items-center ms-3">
              <p className="fw-semibold mx-3 mt-2 mb-0">NGABO Oreste</p>
              <div className={`bg-secondary box ${styles["box"]}`}></div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mx-3">
          <div className="col-md-2">
            <OverviewCard cardHeading="Clients" cardNumber={60} />
          </div>
          <div className="col-md-3">
            <OverviewCard cardHeading="Revenues(FRW)" cardNumber={38234000} />
          </div>
          <div className="col-md-2">
            <OverviewCard cardHeading="Orders" cardNumber={67567} />
          </div>
        </div>
        <div>
          <div className="row mb-5">
            <div className="row">
              <div>
                <div className="row mt-4 mx-2">
                  <div className="col-md-4">
                    <OverviewCategoriesInfo
                      category="Restaurant"
                      consumer="Sole luna"
                      consumerPrice={46000}
                    />
                  </div>
                  <div className="col-md-4">
                    <OverviewCategoriesInfo
                      category="Hotels"
                      consumer="Park Inn"
                      consumerPrice={46000}
                    />
                  </div>
                </div>
                <div className="row mt-4 mx-2">
                  <div className="col-md-4">
                    <OverviewCategoriesInfo
                      category="Pubs"
                      consumer="Sundowner"
                      consumerPrice={46000}
                    />
                  </div>
                  <div className="col-md-4">
                    <OverviewCategoriesInfo
                      category="Cafe"
                      consumer="Aroma"
                      consumerPrice={46000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
