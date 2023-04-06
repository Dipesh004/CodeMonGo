import { Controller } from "react-hook-form";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import "./index.scss";
const InputField = (props) => {
  const {
    label,
    name,
    control,
    type = "text",
    errors = {},
    placeholder,
    maxlength = 40,
  } = props;
  const exceptThisSymbols = ["e", "E", "+", "-"];
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <FormGroup className="form-floating mt-1 ">
            <Input
              type={type}
              invalid={Boolean(errors[name])}
              value={value || value === 0 ? value : ""}
              onChange={onChange}
              maxLength={maxlength}
              onKeyDown={(e) => {
                if (type === "number") {
                  if (exceptThisSymbols.includes(e.key)) e.preventDefault();
                }
              }}
              placeholder={placeholder}
            />
            <Label for="floatingInput">{label}</Label>
            {errors[name] && (
              <FormFeedback role="alert">{errors[name].message}</FormFeedback>
            )}
          </FormGroup>
        </>
      )}
    />
  );
};
export default InputField;
