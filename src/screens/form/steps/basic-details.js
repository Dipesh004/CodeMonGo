import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Row } from "reactstrap";
import "./index.scss";
import InputField from "../../../fields/input-field";

const BasicDetails = () => {
  const {
    formState: { errors },
    control
} = useFormContext();
  return (
    <Fragment>
      <p className="fs-2 fw-bolder ms-4 mb-4">Fill <span>all de</span>tails</p>  
      <Row>
        <Col lg={12}>
          <InputField
            control={control}
            name="name"
            errors={errors}
            placeholder="Enter your Full Name"
            label="Name"
         
          />
        </Col>
        <Col lg={12}>
          <InputField
            control={control}
            name="mobileNumber"
            id="mobileNumber"
            errors={errors}
            placeholder="Enter your mobile Number"
            label="Mobile Number"
            maxlength="10"
          />
        </Col>
        {/* <Col lg={12}>
          <InputField
            control={control}
            name="email"
            errors={errors}
            placeholder="Enter your Email ID"
            label="Email ID"
          />
        </Col> */}
      </Row>
    </Fragment>
  );
};
export default BasicDetails;
