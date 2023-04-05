import { Button } from "reactstrap";
import "./index.scss";

const PrevButton = (props) => {
  const { handleSteps, currentStep } = props;
  return (
      
        <Button
          type="button"
          // color="info"
          className="mb-2 ms-3 next-button"
          onClick={() => handleSteps("prev")}
          disabled={currentStep === 1}
        >
         Prev
        </Button>

  );
};
export default PrevButton;
