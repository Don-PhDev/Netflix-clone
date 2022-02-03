import { useState } from "react";
import { PlansData } from "../data/plans";
import "../styles/PlansScreen.css";

function PlansScreen() {
  const [isCurrentPlan, setIsCurrentPlan] = useState(false);

  const data = PlansData;

  return (
    <div className="plans-screen">
      {data.map((plan, index) => {
        return (
          <div className="plans-screen-plan" key={index}>
            <div className="plans-screen-info">
              <h5>{plan.name}</h5>
              <h6>{plan.description}</h6>
            </div>
            <button onClick={() => setIsCurrentPlan(!isCurrentPlan)}>
              {isCurrentPlan ? "Current Plan" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
