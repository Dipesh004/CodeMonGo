import { Controller } from "react-hook-form";
import { FormFeedback, Input, Label } from "reactstrap";
import "./index.scss";
const CheckboxField = (props) => {
  const { label, name, control, id, errors } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <div className="checkbox-field ">
            <div
              className={`checkbox-button ${value !== id ? "not-active" : ""}`}
              onClick={() => onChange(id)}
            >
              <Input
                id={id}
                name={name}
                type="checkbox"
                onChange={(e) => {
                  onChange(e);
                }}
                value={value}
                // checked={value === id}
              />
              <Label htmlFor={name} for="floatingInput" className="mx-2">
                {label}
              </Label>
              {errors[name] && (
                <small className="text-danger">{errors[name]?.message}</small>
              )}
            </div>
          </div>
          {/* {errors[name] && (
             
            )} */}
        </>
      )}
    />
  );
};
export default CheckboxField;
