import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding-right: 1em;
  text-align: right;
`;

const StyledLink = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Header = () => (
  <StyledHeader>
    <StyledLink primary>
      <NavLink to="/main">main</NavLink>
    </StyledLink>
    <StyledLink>
      <NavLink to="/history">history</NavLink>
    </StyledLink>
  </StyledHeader>
);


export default Header;
