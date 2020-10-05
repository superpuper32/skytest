import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as actions from "../redux/actions/index.js";

import Button from "../components/button";
import MainPicture from "../components/main-picture";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const WrapperImage = styled.div`
  text-align: center;
  min-height: 300px;
`;

function MainPage() {
  const dispatch = useDispatch();
  const handleNewApp = (e) => {
    e.preventDefault();
    dispatch(actions.fetchPicture());
  };
  
  return (
    <>
      <Title>Dynamic downloading images</Title>
      <WrapperImage>
        <MainPicture />
      </WrapperImage>
      <Button handleClick={handleNewApp}>download</Button>
    </>
  );
}

export default MainPage;
