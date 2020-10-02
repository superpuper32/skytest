import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as actions from "../redux/actions/index.js";

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

  return (
    <div className="App">
      <Title>Dynamic downloading images</Title>
      <Picture />
      <Button handleClick={handleNewApp}>download</Button>
    </div>
  );
}

export default MainPage;
