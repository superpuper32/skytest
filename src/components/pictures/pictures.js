import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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

const mapStateToProps = (state) => {
  const {
    pictures: { byId, allIds },
  } = state;
  const pictures = allIds.map((id) => byId[id]);
  return { pictures };
};

const actionCreators = {
  removePicture: actions.removePicture,
};

class Pictures extends Component {
  handleRemovePicture = (id) => () => {
    const { removePicture } = this.props;
    removePicture({ id });
  };

  render() {
    const { pictures } = this.props;

    return (
      <WrapperPictures>
        {pictures.map(({ id, title, url, time }) => (
          <WrapperPicture key={id}>
            {title}
            <Picture src={url} />
            <span>Downloaded: {time}</span>
            <Button handleClick={this.handleRemovePicture(id)}>remove</Button>
          </WrapperPicture>
        ))}
      </WrapperPictures>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Pictures);
