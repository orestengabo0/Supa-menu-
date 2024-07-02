import React from 'react'
import styles from "./Steps.module.css";

const StepsCard = () => {
  return (
    <div className="px-5 pt-3">
        <div className={`p-3 card steps ${styles["steps"]}`}>
          <h5 className="fw-semibold">1. Create your restaurant profile</h5>
          <div className="mb-2 mt-2 d-flex">
            <p className={` text-center numbers ${styles["numbers"]}`}>1</p>{" "}
            <p className="mx-1">Restaurant Information
                <p className={`text-secondary resto-info ${styles['resto-info']}`}>Restaurant name, address, Details, owner details</p>
            </p>
          </div>
          <div className="mb-2 mt-2 d-flex">
            <p className={` text-center numbers ${styles["numbers"]}`}>2</p>{" "}
            <p className="mx-1">Restaurant Type & Timings
                <p className={`text-secondary resto-info ${styles['resto-info']}`}>Establishment & cuisine type, opening hours</p>
            </p>
          </div>
          <div className="mb-2 mt-2 d-flex">
            <p className={` text-center numbers ${styles["numbers"]}`}>3</p>{" "}
            <p className="mx-1">Create your menu 
                <p className={`text-secondary resto-info ${styles['resto-info']}`}>Menu, restaurant, food images</p>
            </p>
          </div>
        </div>
      </div>
  )
}

export default StepsCard