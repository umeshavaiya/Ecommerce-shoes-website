import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
// import { deviceSize } from "../responsive";
// import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
  width: 100%;
  // height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  // position:fixed;


  // background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 100px;

`;

const AnchorLink = styled(Link)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar(props) {

  return (
    <NavbarContainer>
      <BrandLogo />
      <AccessibilityContainer>
        <AnchorLink>Home</AnchorLink>
        <Marginer direction="horizontal" margin={80} />
        <AnchorLink>Men</AnchorLink>
        <Marginer direction="horizontal" margin={80} />
        <AnchorLink>Women</AnchorLink>
        <Marginer direction="horizontal" margin={80} />
        <AnchorLink>Kids</AnchorLink>
        <Marginer direction="horizontal" margin={80} />
        <AnchorLink>Sale</AnchorLink>
        <Marginer direction="horizontal" margin={10} />
        <Seperator />
        <Marginer direction="horizontal" margin={8} />
        <Button size={18}>login</Button>

      </AccessibilityContainer>
    </NavbarContainer>
  );
}
