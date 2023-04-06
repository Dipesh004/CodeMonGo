import { Controller } from "react-hook-form";
import {  Input, Label } from "reactstrap";
import "./index.scss";
const RadioField = (props) => {
  const { label, name, control, id } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <div className="radio-field ">
            <div
              className={`radio-button ${value !== id ? "not-active" : ""}`}
              onClick={() => onChange(id)}
            >
              <Input
                type="radio"
                id={`${id}-${name}`}
                onChange={(e) => {
                  onChange(e);
                }}
                value={id}
                checked={value === id}
              />

              <Label
                for="floatingInput"
                className="radio-label"
                htmlFor={`${id}-${name}`}
              >
                {label}
              </Label>
            </div>
          </div>
            {/* {errors[name] && (
              <FormFeedback role="alert" className="d-block">
                {errors[name].message}
              </FormFeedback>
            )} */}
        </>
      )}
    />
  );
};
export default RadioField;
