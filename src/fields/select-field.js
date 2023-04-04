import React from "react";

import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
// ** Reactstrap
import { FormFeedback, Label } from "reactstrap";

const SelectField = (props) => {
  const {
    errors,
    label = "",
    name = "",
    options = [],
    isDisabled = false,
    control,
    isLoading = false,
    isClearable = false,
    required = false,
  } = props;

  const renderError = () => {
    const message = errors && errors[name]?.message;
    return (
      message && (
        <FormFeedback className="d-block" data-cy={`error-${name}`}>
          {message}
        </FormFeedback>
      )
    );
  };
  return (
    <div className="mb-3">
      {label && (
        <Label className="form-label fw-bolder" htmlFor={name}>
          {label}
          {required && <span className="text-danger fw-bolder">*</span>}
        </Label>
      )}
      <Controller
        id={name}
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            className={`basic-single form-control ${
              errors[name] ? "is-invalid" : ""
            }`}
            onChange={(item) => onChange(item.value)}
            value={options.find((c) => c?.value === value)}
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isSearchable
            options={options}
          />
        )}
      />
      {renderError()}
    </div>
  );
};

export default SelectField;
