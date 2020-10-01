import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const MainButton = ({
  children,
}) => {
  return <Button>{children}</Button>;
};

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainButton;
