import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg" id="footer">
        <div className="container">
          <div>
            <InnerWrapper
              className="flexSpaceCenter"
              style={{ padding: "30px 0" }}
            >
              <ScrollLink
                className="flexCenter animate pointer"
                to="home"
                smooth={true}
                offset={-80}
                style={{marginTop:'-25px'}}
              >
                <LogoImg />
              </ScrollLink>
              <div style={{ color: "white" }}>
                <h5 style={{marginBottom:'10px'}}>Legal</h5>
                <Link to="/terms" style={{ color: "white", pointer: "cursor" }}>
                  <p>Terms and Conditions</p>
                </Link>
                <Link to="/privacy" style={{ color: "white", pointer: "cursor" }}>
                  <p>Privacy Policy</p>
                </Link>
              </div>
              <ScrollLink
                className="whiteColor animate pointer "
                to="home"
                smooth={true}
                offset={-80}
              >
                <p>Back to top</p>
              </ScrollLink>
            </InnerWrapper>
            <StyleP className="whiteColor ">
              <p>
                © {getCurrentYear()} -{" "}
                <span
                  className="purpleColor font13"
                  style={{ color: "white", fontWeight: "800" }}
                >
                  OCPL TECH
                </span>{" "}
                All Right Reserved
              </p>
            </StyleP>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  
  align-items: start;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
text-align: center;
 display: flex;
 height: 4rem;
 flex-direction: column;
 justify-content: space-between;
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;