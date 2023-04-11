import React from "react";
import styled from "styled-components";
import "./index.scss";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import Lottie from "lottie-react";
import analysis from "../../assets/svg/100779-file-analysis.json";
import topPerformer from "../../assets/svg/677-trophy.json";
import hr from "../../assets/svg/88714-interview.json";
import offer from "../../assets/svg/63261-phone-charts.json";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "vacancy":
      getIcon = <Lottie className="abc"animationData={analysis} loop={true} autoplay={true}/>;
      break;
    case "top":
      getIcon = <Lottie animationData={topPerformer} loop={true} autoplay={true} />;
      break;
    case "hire":
      getIcon = <Lottie animationData={hr} loop={true} autoplay={true} />;
      break;
    case "offer":
      getIcon = <Lottie animationData={offer} loop={true} autoplay={true} />;
      break;
    default:
      getIcon = <Lottie animationData={analysis} loop={true} autoplay={true} />;
      break;
  }

  return (
    <Wrapper
      className="flex flexColumn outline-border r-box up-on-hover"
      style={{
        boxShadow: "rgb(120, 120, 120) 0px 0px 16px",
        transition: "transform 0.2s ease-in-out",
        background:
          "linear-gradient(45deg, rgb(255,255,255), rgb(220,220,220))",
      }}
    >
      <IconStyle>{getIcon}</IconStyle>

      <TitleStyle
        className="font20 extraBold"
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </TitleStyle>
      <SubtitleStyle
        style={{
          textAlign: "center",
        }}
        className="font13"
      >
        {subtitle}
      </SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 380px;
  padding: 15px;
  border-radius: 15px;
  @media (max-width: 391px) {
    height: 250px;
  }
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
