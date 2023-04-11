import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import "../../style/index.css";

export default function Services() {
  return (
    <Wrapper>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container" id="aboutUs">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg services" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1
              style={{ fontFamily: "Orbitron, sans-serif" }}
              className="font40 extraBold"
            >
              Our Recruitment Process:
            </h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="vacancy"
                title="Evaluation"
                subtitle="After the contest is over, the submissions will be monitored carefully based on the evaluation criteria established. Our team of technical experts in the specified technologies will be analyzing the submissions to ensure fairness and accuracy."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="top"
                title="Top Performers"
                subtitle="Based on the evaluation, top performers who demonstrated exceptional skills and creativity in using three.js, Next.js, and React Native will be invited for the technical+HR round to discuss their projects, their skills, and their interest in working for your organization."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="hire"
                title="Technical+HR Round"
                subtitle="During the interview, the technical skills of the candidates will be monitored by asking questions related to the technologies used in the contest along with other skills to evaluate the cultural fit of the candidates to ensure they align with your organization's values, vision, and work culture."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="offer"
                title="Job Offers"
                subtitle="Based on the evaluation, job offers will be extended to the candidates who meet our criteria and are a good fit for our organization."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg" style={{ paddingLeft: "5%" }}>
          <div className="container">
            <Advertising className="flexSpaceCenter flex-prizes ">
              <AddLeft
                className="up-on-hover"
                style={{
                  background: "#2c74b3",
                  margin: "0px 40px",
                  height: "480px",
                  padding: "15px 0px 0px 10px",
                  borderRadius: "15px",
                  boxShadow: "rgb(120, 120, 120) 0px 0px 16px",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    color: "rgb(243,243,243)",
                    fontFamily: "Orbitron, sans-serif",
                  }}
                  className="font40 extraBold align-prizes"
                >
                  Prizes:
                </h2>
                <p
                  className="font18 align-prizes"
                  style={{ marginTop: "20px", color: "rgb(243,243,243)" }}
                >
                  <ul>
                    <li style={{ paddingBottom: "10px" }}>
                      1st Place: Job Offer (Frontend Developer) + Certificate +
                      wireless keyboard and mouse.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      2nd Place: Internship (Frontend Developer) + Certificate +
                      wireless mouse.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      3rd Place: Internship ( Junior Frontend Developer) +
                      Certificate with goodies.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      4th place: 5000 Rs + Certificate with goodies.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      5th-10th Place: Certificate with goodies.
                    </li>
                    <li>
                      In addition to the cash prizes and goodies, winners will
                      receive recognition on our social media channels.
                    </li>
                  </ul>
                </p>
              </AddLeft>
              {/* <div style={{paddingTop: "10px"}}> */}
              <AddLeft
                className="up-on-hover"
                style={{
                  background: "#2c74b3",
                  margin: "0px 40px",
                  height: "480px",
                  padding: "15px 0px 0px 10px",
                  borderRadius: "15px",
                  boxShadow: "rgb(120, 120, 120) 0px 0px 16px",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    color: "rgb(243,243,243)",
                    fontFamily: "Orbitron, sans-serif",
                  }}
                  className="font40 extraBold align-prizes"
                >
                  Judging Criteria:
                </h2>
                <p
                  className="font18 align-prizes"
                  style={{ marginTop: "20px", color: "rgb(243,243,243)" }}
                >
                  <p>
                    Submissions will be evaluated based on the following
                    criteria:
                  </p>
                  <ul>
                    {/* <li style={{paddingBottom: '10px'}}></li> */}
                    <li style={{ paddingBottom: "10px" }}>
                      Innovation and creativity.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      Design and user experience.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      Functionality and performance.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      Code quality and organization.
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      Integration and effective use of the core technologies
                      (Three.js, Next.js, and React Native).
                    </li>
                    <li style={{ paddingBottom: "10px" }}>
                      Responsiveness and compatibility across different devices
                      and platforms.
                    </li>
                    <li>Thoroughness of the README file and documentation.</li>
                  </ul>
                </p>
              </AddLeft>
              {/* </div> */}
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  ${"" /* margin: 80px 0; */}
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 100%;
    order: 2;
    margin:0px !important;
    margin-top:30px !important;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
