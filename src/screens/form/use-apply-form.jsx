import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { basicDetailSchema, contactDetailsSchema } from "./utils/schema";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  name: "",
  mobileNumber: null,
  email: "",
  dob: "",
  address: "",
  termsAndConditions:false,
  marketingEmails:false,
};
const useApplyForm = () => {
  const navigate = useNavigate();
  const [rotate, setRotate] = useState(false);

  // eslint-disable-next-line
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(basicDetailSchema),
    mode: "onSubmit",
  });

  const rotateHandler = () => {
    setRotate(!rotate);
  };

  const onSubmit = ({ paymentId, isLastStep }) => {
    methods.handleSubmit((data) => {
      rotateHandler();
      console.log({ ...data, paymentId });
      if (isLastStep) {
        navigate("/");
      }
      // localStorage.clear();
      // // handleSteps("next");
      // if (currentStep === 8) {
      //   alert("Form Submitted");
      // }
    })();
  };

  return {
    methods,
    onSubmit,
    rotate,
    rotateHandler,
  };
};
export default useApplyForm;
