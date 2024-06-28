import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className={`bg-warning p-5 d-flex justify-content-between contain ${styles["contain"]}`}
    >
      <h1 className={`p-5 right ${styles["right"]}`}>
        <span className="text-black fw-bold">Supa</span>
        <span className="text-white fw-bold">Menu</span>
      </h1>
      <form className={`bg-white mx-5 p-4 pt-5 rounded ${styles["rounded"]}`}>
        <h5 className="text-center fs-3 fw-bold">Sign Up</h5>
        <div className="mb-3">
          <label htmlFor="first-name" className="text-secondary fw-semibold">
            FIRST NAME
          </label>
          <input
            type="text"
            id="first-name"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="text-secondary fw-semibold">
            LAST NAME
          </label>
          <input
            type="text"
            id="last-name"
            className="form-control"
            placeholder="Last name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="text-secondary fw-semibold">
            PHONE
          </label>
          <input
            type="tel"
            id="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="form-control"
            placeholder="0788-087-890"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-secondary fw-semibold">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-secondary fw-semibold">
            PASSWORD
          </label>
          <div className="input-group">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className={`form-control password ${styles['password']}`}
              placeholder="Password"
            />
            <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button
          className={`btn btn-warning fw-semibold text-white mt-3 signup ${styles["signup"]}`}
        >
          Sign Up
        </button>
        <div className="lh-sm">
          <p className="text-center mt-5 text-secondary">
            Already have an account?{" "}
            <span className={`text-primary signin ${styles["signin"]}`}>
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
