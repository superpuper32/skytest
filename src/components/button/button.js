import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  margin: 1em auto;
  padding: 0.25em 1em;
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const MainButton = ({
  handleClick,
  children,
}) => {
  return <Button onClick={handleClick}>{children}</Button>;
};

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainButton;
