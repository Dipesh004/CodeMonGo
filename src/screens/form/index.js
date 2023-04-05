import { Form } from "reactstrap";
import "./action-button/index.scss";
import NextButton from "./action-button/next-button";
import PrevButton from "./action-button/prev-button";
import BasicDetails from "./steps/basic-details";
import ContactDetails from "./steps/contact-details";
import useApplyForm from "./use-apply-form";
import { FormProvider } from "react-hook-form";
// import { Link } from "react-router-dom";

const LoanForm = (props) => {
  const {rotateHandler} = props;
  const {
    handleSteps,
    currentStep,
    methods,
    onSubmit,
    errors
  } = useApplyForm();
  const handleStepComponents = () => {
    // eslint-disable-next-line
    switch (currentStep) {
      case 1:
        return <BasicDetails />;
      case 2:
        return <ContactDetails />;    }
  };
  return (
    <>
  
    <Form className="form">
      
      {currentStep < 3 ? (
        <div className="d-flex justify-content-between mb-2 align-items-center">
          <PrevButton
            handleSteps={handleSteps}
            currentStep={currentStep}
            onSubmit={onSubmit}
          />
          <p className="step-number me-3">Step:{currentStep}/3</p>
        </div>
      ) : null}
      <FormProvider {...methods}>
        <div className={`form-steps mb-3 ${currentStep !== 3 ? "" : ""}`}>
          {handleStepComponents()}
        </div>

      </FormProvider>
      {/* <ActionButtons
        handleSteps={handleSteps} 
        currentStep={currentStep}
        onSubmit={onSubmit}
      /> */}
      {currentStep < 9 ? (
        <NextButton
          handleSteps={handleSteps}
          currentStep={currentStep}
          onSubmit={onSubmit}
          rotateHandler={rotateHandler}
          errors={errors}
        />
    
      ) : null}
    </Form>
    </>
  );
};

export default LoanForm;
