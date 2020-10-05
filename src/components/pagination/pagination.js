import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const StyledList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto 0;
  padding-left: 0;
`;

const StyledItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

const Button = styled.button`
  margin: 1em auto;
  padding: 0.25em 1em;
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

class Pagination extends Component {
  state = {
    totalPictures: "",
    pageLimit: "",
    totalPages: "",
    currentPage: "",
    pagesToShow: "",
  };

  componentDidMount() {
    this.setState({
      totalPictures: this.props.totalPictures,
      pageLimit: this.props.pageLimit || 5,
      totalPages: Math.ceil(this.props.totalPictures / this.props.pageLimit),
      pagesToShow: this.props.pagesToShow || 5,
      currentPage: this.props.initialPage || 1,
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      totalPictures: nextProps.totalPictures,
      pageLimit: nextProps.pageLimit || 5,
      totalPages: Math.ceil(nextProps.totalPictures / nextProps.pageLimit),
      pagesToShow: nextProps.pagesToShow || 5,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.totalPictures !== prevState.totalPictures ||
      this.state.pageLimit !== prevState.pageLimit
    ) {
      this.setPage(this.state.currentPage);
    }
  }

  setPage(page) {
    const { totalPictures, pageLimit, totalPages } = this.state;

    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    this.setState({
      currentPage: page,
    });

    const startIndex = (page - 1) * pageLimit;
    const endIndex = Math.min(startIndex + pageLimit - 1, totalPictures - 1);

    this.props.onChangePage({
      pageLimit,
      startIndex,
      endIndex,
    });
  }

  getPage() {
    const { currentPage, totalPages } = this.state;
    let { pagesToShow } = this.state;
    let pages = [],
      startFromNumber;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      pagesToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1;
      } else if (
        currentPage + Math.floor((pagesToShow - 1) / 2) >=
        totalPages
      ) {
        startFromNumber = totalPages - (pagesToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2);
      }
    }

    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      currentPage,
      totalPages,
      pages,
    };
  }

  render() {
    if (!this.state.totalPictures || this.state.totalPages === 1) return null;

    const paginator = this.getPage();

    return (
      <div>
        <StyledList>
          <StyledItem>
            <Button
              disabled={paginator.currentPage === 1 ? true : false}
              onClick={() => this.setPage(paginator.currentPage - 1)}
            >
              {"<<"}
            </Button>
          </StyledItem>

          {paginator.pages.map((page, index) => (
            <StyledItem key={index}>
              <Button
                className={paginator.currentPage === page ? "active" : ""}
                onClick={() => this.setPage(page)}
              >
                {page}
              </Button>
            </StyledItem>
          ))}

          <StyledItem>
            <Button
              disabled={
                paginator.currentPage === paginator.totalPages ? true : false
              }
              onClick={() => this.setPage(paginator.currentPage + 1)}
            >
              {">>"}
            </Button>
          </StyledItem>
        </StyledList>
      </div>
    );
  }
}

Pagination.propTypes = {
  totalPictures: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default Pagination;