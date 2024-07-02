import StepsCard from "./StepsCard";
import RestoInfoForm from "../StepsForms/RestoInfoForm";
import RestaurantType from "../StepsForms/RestaurantType";
import Menu from "../StepsForms/Menu";

const Steps = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">
          <span className="text-black fs-2 fw-semibold">Supa</span>
          <span className="text-warning fs-2 fw-semibold">Menu</span>
        </h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-4">
          <StepsCard />
        </div>
        <div className="col-md-5">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Steps;
