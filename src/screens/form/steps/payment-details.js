import { Fragment, useCallback } from "react";
// import {logo} from "../assets/img/logo.png";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

import useRazorpay from "react-razorpay";
// import SelectField

const PaymentDetails = (props) => {
  const { onSubmit } = props;
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
    // const estimated_budget = Number(row.estimated_budget)
    // const order =  createOrder(params);

    const options = {
      key: "rzp_live_iPRVnmksbVHEaY",
      // key: "rzp_test_u1Rc5nug9j7roz",
      amount: 1 * 100,
      name: "CODEMONGO - OCPL TECH",
      description: "Frontend Contest",
      image: "https://ocpl.tech/static/media/logo.e52fb4076e30019582f8.png", // COMPANY LOGO
      handler: function (response) {
        console.log("Returning now");
        Swal.fire({
          title:
            "Payment ID" + response.razorpay_payment_id + "Payment Successful",
          icon: "success",
          confirmButtonText: "Okay",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            onSubmit({
              paymentId: response.razorpay_payment_id,
              isLastStep: true,
            });
          }
        });
      },
      theme: {
        color: "#15b8f3",
      },
    };

    const rzpay = new Razorpay(options);

    rzpay.open();
    // eslint-disable-next-line
  }, [Razorpay]);

  return (
    <Fragment>
      <img
        src="https://cdn-icons-png.flaticon.com/512/686/686308.png"
        alt="Thumbs-up"
        className="img-fluid mb-3"
        width={100}
      />
      <h3 className="fw-bold">Thank You for Submitting the Form</h3>
      <h3>Pay the Fees to get registered for the contest</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/592/592015.png"
        alt="RupeesIcon"
        className="img-fluid mt-3"
        width={100}
      />
      <p className="fs-2 fw-bolder mt-2">Registration Fees Amount: Rs. 176</p>
      <div className="d-flex text-left align-items-center flex-column">
        <p>Click on the Button below to pay:</p>
        <button
          className="btn btn-success my-2 px-5 py-2 fs-5"
          onClick={() => handlePayment()}
        >
          Pay Now
        </button>
      </div>
      <br />
    </Fragment>
  );
};
export default PaymentDetails;
