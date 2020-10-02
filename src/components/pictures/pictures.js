import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { picturesSelector } from "../../redux/selectors";
import * as actions from "../../redux/actions/index.js";

import Picture from "../picture";
import Button from "../button";

const WrapperPictures = styled.section`
  display: flex;
  justify-content: space-around;
`;

const WrapperPicture = styled.section`
  padding: 1em;
  max-height: 100px;
  max-width: 240px;
`;

const Pictures = () => {
  const pictures = useSelector(picturesSelector);

  const dispatch = useDispatch();
  const handleRemovePicture = (id) => () => {
    dispatch(actions.removePicture({ id }));
  };

    return (
      <WrapperPictures>
        {pictures.map(({ id, title, url, time }) => (
          <WrapperPicture key={id}>
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