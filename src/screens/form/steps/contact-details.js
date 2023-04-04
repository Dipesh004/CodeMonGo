import { Fragment, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Col, FormFeedback, Row } from "reactstrap";
import InputField from "../../../fields/input-field";
import SelectField from "../../../fields/select-field";
import RadioField from "../../../fields/radio-fields";
// import SelectField

const ContactDetails = () => {
  const {
    formState: { errors },
    control
} = useFormContext();
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: { accept: "application/json" },
  };

  useEffect(() => {
    fetch(
      "https://api.openaq.org/v2/cities?limit=100000&offset=0&sort=asc&country=IN&order_by=city",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCities(response.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
      // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Row>
        <p className="fs-2 fw-bolder ">
          <span>Fill al</span>l Block
        </p>
     
        <Col lg={12}>
          <InputField
            control={control}
            name="dob"
            type="date"
            errors={errors}
            placeholder="Enter your Date of Birth"
            label="Date of Birth"
          />
        </Col>
        {/* <Col lg={12}>
          <p className="fs-4 fw-bolder ">
            <span>City</span>
          </p>
          <SelectField
            control={control}
            name="city"
            options={cities.map((item) => ({
              value: item.city,
              label: item.city,
            }))}
            errors={errors}
            placeholder="Enter your City"
            isLoading={isLoading}
          />
        </Col>
        <Col lg={12}>
          <InputField
            control={control}
            name="pincode"
            errors={errors}
            placeholder="Enter your Pincode"
            label="Pincode"
            maxlength="6"
          />
        </Col>

        <p className="fs-4 fw-bolder ">
          <span>Gend</span>er
        </p>
        <Row>
          <Col lg={6} xs={6}>
            <RadioField
              control={control}
              name="gender"
              id="male"
              label="Male"
              errors={errors}
            />
          </Col>
          <Col lg={6} xs={6}s>
            <RadioField
              control={control}
              name="gender"
              id="female"
              label="Female"
              errors={errors}
            />
          </Col>
          {errors["gender"] && (
            <FormFeedback role="alert" className="d-block">
              {errors["gender"].message}
            </FormFeedback>
          )}
        </Row> */}
      </Row>
    </Fragment>
  );
};
export default ContactDetails;
