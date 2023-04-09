import "./Form.scss";
import TopNavbar from "../../components/Nav/TopNavbar";
import { FormProvider } from "react-hook-form";
import useApplyForm from "./use-apply-form";

import BasicDetails from "./steps/basic-details";
import PaymentDetails from "./steps/payment-details";
import "./action-button/index.scss";
import NextButton from "./action-button/next-button";
import PrevButton from "./action-button/prev-button";

export default function Form() {
  const { handleSteps, currentStep, methods, onSubmit, rotateHandler, rotate } =
    useApplyForm();
  return (
    <>
      <TopNavbar />
      <FormProvider {...methods}>
        <div className="cards-wrapper">
          <div className="card-container">
            <div className={`card ${rotate ? "rotated" : ""} `}>
              <div
                style={{ boxShadow: "rgb(50,50,50) 0px 0px 20px" }}
                className="card-contents card-front"
              >
                <div className="card-depth">
                  <h2
                    style={{
                      fontFamily: "orbitron",
                      color: "#2c74b3",
                      transition: "transform 0.2s ease-in-out",
                    }}
                    className="fw-bold up-on-hover"
                  >
                    CodeMonGo
                  </h2>
                  {/* <p className="step-number me-3 text-end">Step:1/2</p> */}
                  <BasicDetails />
                  <div className="d-flex justify-content-end">
                    <NextButton currentStep={currentStep} onSubmit={onSubmit} />
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "rgb(50,50,50) 0px 0px 20px" }}
                className="card-contents card-back"
              >
                <div className="card-depth">
                  {/* <p className="step-number me-3 text-end ">Step:2/2</p> */}
                  <PaymentDetails onSubmit={onSubmit} />
                  <div className="d-flex justify-content-end ">
                    <PrevButton
                      handleSteps={handleSteps}
                      currentStep={currentStep}
                      rotateHandler={rotateHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
}
