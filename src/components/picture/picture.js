import React from "react";
import styled from "styled-components";

const StyledPicture = styled.img`
  max-width: 240px;
`;

const Picture = ({src, alt}) => <StyledPicture src={src} alt={alt} />;

export default Picture;
