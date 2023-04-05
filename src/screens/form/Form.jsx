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
              <div className="card-contents card-front">
                <div className="card-depth">
                  <h2 className="fw-bold">Registration Form</h2>
                  <p className="step-number me-3 text-end">Step:1/2</p>
                  <BasicDetails />
                  <div className="d-flex justify-content-end">
                    <NextButton currentStep={currentStep} onSubmit={onSubmit} />
                  </div>
                </div>
              </div>
              <div className="card-contents card-back">
                <div className="card-depth">
                  <p className="step-number me-3 text-end ">Step:2/2</p>
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
