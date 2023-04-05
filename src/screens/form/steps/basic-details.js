import { Fragment, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Row } from "reactstrap";
import "./index.scss";
import InputField from "../../../fields/input-field";
import SelectField from "../../../fields/select-field";

const BasicDetails = () => {
  const [marketingEmails, setMarketingEmails] = useState(false);
  const {
    formState: { errors },
    control
} = useFormContext();
  return (
    <Fragment>
      <p className="fs-2 fw-bolder ms-4 mb-4 text-center">Fill <span>all de</span>tails</p>  
      <Row>
        <Col lg={6}>
          <InputField
            control={control}
            name="name"
            errors={errors}
            placeholder="Enter your Full Name"
            label="Name"
         
          />
        </Col>
        <Col lg={6}>
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
        <Col lg={6}>
          <InputField
            control={control}
            name="email"
            errors={errors}
            placeholder="Enter your Email ID"
            label="Email ID"
          />
        </Col>
        <Col lg={6}>
          <InputField
            control={control}
            name="address"
            errors={errors}
            placeholder="Enter your Address"
            label="Address"
          />
        </Col>
        <Col lg={6}>
          <InputField
            control={control}
            name="dob"
            type="date"
            errors={errors}
            placeholder="Enter your Date of Birth"
            label="Date of Birth"
          />
        </Col>
      
        <Col lg={12}>
        <p className="fs-5 fw-bold text-left">
            Why Do you want to <span>Apply?</span>
          
          </p>
         
        <SelectField
            control={control}
            name="reason"
            options={[
              { value: "jobOffer", label: "Job Offer" },
              { value: "prizeMoney", label: "Price Money" },
              // { value: "others", label: "Others" },
            ]}
            errors={errors}
            placeholder="Reason to Apply"
          />
           <small className="text-danger text-left">If none of these please feel free to create your option by typing!</small>
        </Col>
        <Col lg={12}>
          <div className="d-flex align-items-center">
          <InputField
           control={control}
           name="termsAndConditions"
           type="checkbox"
           errors={errors}
          />
      <label htmlFor="termsAndConditions" className="ms-2 mb-3 mt-1 ">I accept the terms and conditions</label>
      </div>
        </Col>
        <Col lg={12}>
          <div className="d-flex align-items-center">
          <InputField
           control={control}
           name="marketingEmails"
           type="checkbox"
           checked={marketingEmails}
           errors={errors}
           onChange={(e) => setMarketingEmails(e.target.checked)}
          />
      <label htmlFor="marketingEmails" className="ms-2 mb-3 mt-1 ">I want to receive marketing emails</label>
      </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default BasicDetails;
