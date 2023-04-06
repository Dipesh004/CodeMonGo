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
      // console.log({ ...data, paymentId });
      let obj={
        ...data,paymentId
      }
      if (isLastStep) {
        fetch("http://91.203.132.23/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          navigate("/");
        })
        .catch(error => {
          console.error("Error:", error);
        });
      }
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
