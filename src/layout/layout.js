import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./header";

const Wrapper = styled.section`
  padding: 4em;
  height: 70vh;
  text-align: center;
  background: papayawhip;
`;

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
