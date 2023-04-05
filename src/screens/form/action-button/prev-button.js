import { Button } from "reactstrap";
import "./index.scss";

const PrevButton = (props) => {
  const {  rotateHandler } = props;
  return (
      
        <Button
          type="button"
          // color="info"
          className="next-button "
          onClick={() => rotateHandler()}
          // disabled={currentStep === 1}
        >
         Prev
        </Button>

  );
};
export default PrevButton;
