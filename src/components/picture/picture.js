import React from "react";
import styled from "styled-components";

const StyledPicture = styled.img`
  max-width: 240px;
`;

const Picture = ({src}) => <StyledPicture src={src} alt="UKTVGIFBANK" />;

export default Picture;
