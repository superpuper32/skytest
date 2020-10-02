import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as actions from "../redux/actions/index.js";
import { selectPicture } from "../redux/selectors";

import Button from "../components/button";
import Picture from "../components/picture";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function MainPage() {
  const dispatch = useDispatch();
  const handleNewApp = (e) => {
    e.preventDefault();
    dispatch(actions.fetchPicture());
  };

  const fetchingState = useSelector((state) => state.pictureFetchingState);
  const picture = useSelector(selectPicture);
    
  if (fetchingState === 'requested') {
    return <span>loading</span>;
  }
  
  if (fetchingState === "failed") {
    return <span>Please, reload page!</span>;
  }

  if (!picture) {
    return null;
  }
  const { url } = picture;
  
  return (
    <div className="App">
      <Title>Dynamic downloading images</Title>
      <div>
        <Picture src={url} />
      </div>
      <Button handleClick={handleNewApp}>download</Button>
    </div>
  );
}

export default MainPage;
