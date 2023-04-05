import { Button } from "reactstrap";
import "./index.scss";

const NextButton = (props) => {
  const { currentStep, onSubmit } = props;
  return (
    <Button className="next-button" onClick={onSubmit}>
      {currentStep === 8 ? "Submit" : "Next"}
    </Button>
  );
};
export default NextButton;
