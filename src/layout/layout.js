import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./header";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
