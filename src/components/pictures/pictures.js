import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import * as actions from "../../redux/actions/index.js";

import Picture from "../picture";
import Button from "../button";

const WrapperPictures = styled.div`
  display: flex;
  justify-content: space-around;
  height: 400px;
`;

const WrapperPicture = styled.div`
  padding: 1em;
  max-height: 100px;
  max-width: 240px;
`;

const Pictures = ({ pictures }) => {
  const dispatch = useDispatch();
  const handleRemovePicture = (id) => () => {
    dispatch(actions.removePicture({ id }));
  };

    return (
      <WrapperPictures>
        {pictures.map(({ id, title, url, time }) => (
          <WrapperPicture key={'key_' + id}>
            {title}
            <Picture src={url} alt={title} />
            <span>Downloaded: {time}</span>
            <Button handleClick={handleRemovePicture(id)}>remove</Button>
          </WrapperPicture>
        ))}
      </WrapperPictures>
    );
};

export default Pictures;