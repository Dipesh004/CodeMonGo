import { useState } from "react";
import "./Form.scss";
import TopNavbar from "../../components/Nav/TopNavbar";
import LoanForm from ".";


export default function Form() {
  const [rotate, setRotate] = useState(false);
  const rotateHandler = () => {
    setRotate(!rotate);
  }
  return (
    <>
      <TopNavbar />
      <div class="cards-wrapper">
        <div class="card-container">
          <div class={`card ${rotate ? "rotated" : ""} `}>
            <div class="card-contents card-front">
              <div class="card-depth">
                <h2>Registration Form</h2>
                
                <LoanForm rotateHandler={rotateHandler}/>
                {/* <input className="form-control"/> */}
{/* 
                <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-danger"
                  onClick={() => setRotate(!rotate)}
                >
                  Prev
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => setRotate(!rotate)}
                >
                  Next
                </button>
                </div> */}
              </div>
            </div>
            {/* <div class="card-contents card-back">
              <div class="card-depth">
                <h2>Click card again</h2>
                <hr />
                <p>To turn back</p>
             
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
