import styles from "./WelcomePage.module.css";
import { FaUserEdit } from "react-icons/fa";
import StepCards from "./StepCards/StepCards";
import { FaUtensils } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <div className="bg-black px-5 pt-5 pb-5">
        <div>
          <div>
            <h1>
              <span className="text-white fs-1 fw-semibold">Supa</span>
              <span className="text-warning fs-1 fw-semibold">Menu</span>
            </h1>
          </div>
          <div></div>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <div>
              <h3 className="text-white">
                Register your restaurant on SupaMenu
              </h3>
              <p className="text-white">for free and get more revenue!</p>
            </div>
            <div>
              <Link to={"/signup"} className=" text-white btn btn-warning">
                Register your Restaurant
              </Link>
              <Link
                to={"/signin"}
                className={`mx-3 text-white btn btn-dark signin ${styles.signin}`}
              >
                Restaurant already registered? Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`lower-part ${styles["lower-part"]} p-5`}>
        <h3 className="text-black text-center fw-bold">How it works</h3>
        <div className="d-flex justify-content-between">
          <StepCards
            icon={<FaUserEdit />}
            heading="Step 1"
            description="Register your restaurant"
          />
          <StepCards
            icon={<FaUtensils />}
            heading="Step 2"
            description="Create your restaurant profile and create menu items"
          />
          <StepCards
            icon={<BiSolidOffer />}
            heading="Step 3"
            description="Start receiving offers"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
