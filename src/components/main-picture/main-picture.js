import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { pictureSelector } from "../../redux/selectors";

const StyledMainPicture = styled.img`
  max-width: 240px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function MainPicture() {
  const fetchingState = useSelector((state) => state.pictureFetchingState);
  const picture = useSelector(pictureSelector);

  if (fetchingState === "requested") {
    return (
      <Rotate>
        <span role="img" aria-label="sheep">
          &lt; 🐑 &gt;
        </span>
      </Rotate>
    );
  }

  if (fetchingState === "failed") {
    return <span>Please, reload page!</span>;
  }

  if (!picture) {
    return <span>Nothing to show</span>;
  }
  const { url } = picture;

  return (
    <div>
      <StyledMainPicture src={url} />
    </div>
  );
}

export default MainPicture;
