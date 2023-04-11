import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";
// Components
import { Link as ScrollLink } from "react-scroll";
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { Link } from "react-router-dom";

export default function TopNavbar(props) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter" id="navbar">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <LogoIcon />
          </Link>
          <NavTagsWrapper>
            <div className="d-flex gx-5">
              {props.aboutUs? <Link to="/" style={{color:'white'}}>About Us</Link>:
              <ScrollLink
                className="pointer flexNullCenter"
                to="AboutUs"
                offset={-100}
                smooth={true}
                style={{ color: "white" }}
              >
                About Us
              </ScrollLink>}
              <Link
                className="cursor-pointer flexNullCenter"
                to="/"
                smooth={true}
                style={{ marginLeft: "2rem", color: "white" }}
              >
                Pricing Details
              </Link>
              <ScrollLink
                className="pointer flexNullCenter"
                to="footer"
                smooth={true}
                style={{ marginLeft: "2rem", color: "white" }}
              >
                Contact Us
              </ScrollLink>
            </div>
          </NavTagsWrapper>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          {/* <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <Link
                to="/registration-form"
                className="radius8 lightBg nav-btn"
                style={{ padding: "10px 15px", backgroundColor: '#2C74B3', color: 'white',}}
              >
                Registration
              </Link>
            </li>
          </UlWrapperRight> */}
        </NavInner>
      </Wrapper>
    </>
  );
}
const NavTagsWrapper = styled.div`
  display: block;
  @media (max-width: 760px) {
    display: none;
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
