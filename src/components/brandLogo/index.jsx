import React from "react";
import styled from "styled-components";


const LogoTitle = styled.h2`
  font-size: ${({ size }) => (size ? size + "px" : "50px")};
  color: ${({ color }) => (color ? color : "#fff")};
  margin-left: 174px;
  font-weight: 500;
`;



export function BrandLogo(props) {

  return (
      <LogoTitle >Shoes</LogoTitle>
  );
}
