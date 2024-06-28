import React from "react";
import styles from './SignIn.module.css';

const SignUp = () => {
  return (
    <div
      className={`bg-warning p-5 d-flex justify-content-between contain ${styles["contain"]}`}
    >
      <h1 className={`p-5 right ${styles['right']}`}>
        <span className="text-black fw-bold">Supa</span>
        <span className="text-white fw-bold">Menu</span>
      </h1>
      <form className={`bg-white mx-5 p-4 pt-5 rounded ${styles["rounded"]}`}>
        <h5 className="text-secondary text-center fs-4">Welcome</h5>
        <h5 className="text-center fs-3 fw-bold">Login to SupaMenu</h5>
        <p className="text-center text-secondary">Enter your email and password here.</p>
        <div className="mb-3">
          <label htmlFor="email" className="text-secondary fw-semibold">
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <label htmlFor="password" className="text-secondary fw-semibold">
              PASSWORD
            </label>
            <label className={`text-secondary forgot-password ${styles['forgot-password']}`}>Forgot password?</label>
          </div>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button
          className={`btn btn-warning fw-semibold text-white mt-3 login ${styles["login"]}`}
        >
          Login
        </button>
        <div className="lh-sm">
          <p className="text-center mt-5 text-secondary">
            Don't have account? <span className={`text-primary signup ${styles['signup']}`}>Sign Up</span>
          </p>
          <p className="text-center mt-5 text-secondary">
            Forgot your password? <span className={`text-primary reset ${styles['reset']}`}>Reset</span> 
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;