import { Button } from "reactstrap";
import "./index.scss";

const NextButton = (props) => {
  const { currentStep, onSubmit, errors } = props;
  return (
    <Button
      className="next-button w-100"
      onClick={() => {
        if (!errors) {
          onSubmit();
          props.rotateHandler();
        } else {
          onSubmit();
        }
      }}
    >
      {currentStep === 8 ? "Submit" : "Next"}
    </Button>
  );
};
export default NextButton;
