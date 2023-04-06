import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import Lottie from 'react-lottie';
import analysis from '../../assets/svg/100779-file-analysis.json';
import topPerformer from '../../assets/svg/677-trophy.json';
import hr from '../../assets/svg/88714-interview.json';
import offer from '../../assets/svg/63261-phone-charts.json'

export default function ServiceBox({icon, title, subtitle}) {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: analysis,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: topPerformer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: hr,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: offer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  let getIcon;

  switch (icon) {
    case "vacancy":
      getIcon = <Lottie options={defaultOptions1} height={65} width={65}/>
      break;
    case "top":
      getIcon = <Lottie options={defaultOptions2} height={65} width={65}/>
      break;
    case "hire":
      getIcon = <Lottie options={defaultOptions3} height={65} width={65}/>
      break;
    case "offer":
      getIcon = <Lottie options={defaultOptions4} height={65} width={65}/>
      break;
    default:
      getIcon = <Lottie options={defaultOptions1} height={65} width={65}/>
      break;
  }


  return (
    <Wrapper className="flex flexColumn outline-border r-box" >
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 380px; padding:15px;
  border-radius:15px; 
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