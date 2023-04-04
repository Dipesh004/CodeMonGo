import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  basicDetailSchema,
  contactDetailsSchema,
} from "./utils/schema";
import { useNavigate } from "react-router-dom";
const defaultValues = {
  name: "",
  mobileNumber: null,
  email: "",
  dob: "",
};
const useApplyForm = () => {
  const navigate = useNavigate();
  const validationSchema = {
    1: basicDetailSchema,
    2: contactDetailsSchema,
  };
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema[currentStep]),
    mode: "onSubmit",
  });
  const { watch, setValue } = methods;

  const handleSteps = (action = "") => {
    if (action === "prev") setCurrentStep(currentStep - 1);
    else if (action === "next") setCurrentStep(currentStep + 1);
  };


  const onSubmit = () => {
    methods.handleSubmit((data) => {
      console.log(data);
      localStorage.clear();
      handleSteps("next");
      if (currentStep === 8) {
        alert("Form Submitted");
      }
    })();
  };

  return {
    handleSteps,
    methods,
    currentStep,
    onSubmit,
  };
};
export default useApplyForm;
