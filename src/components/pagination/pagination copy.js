import React, { useState, useEffect } from "react";
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

const Pagination = (props) => {
  const [totalPictures, setTotalPictures] = useState("");
  useEffect(() => {
    setTotalPictures(props.totalPictures);
  }, [props.totalPictures]);

  const [pageLimit, setPageLimit] = useState("");
  useEffect(() => {
    setPageLimit(props.pageLimit || 10);
  }, [props.pageLimit]);

  const [totalPages, setTotalPages] = useState("");
  useEffect(() => {
    setTotalPages(Math.ceil(props.totalPictures / props.pageLimit));
  }, [props.totalPictures, props.pageLimit]);

  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    setCurrentPage(props.initialPage | 1);
  }, []);

  // const [initialPage, setInitialPage] = useState("");

  const [pagesToShow, setPagesToShow] = useState("");
  useEffect(() => {
    setPagesToShow(props.pagesToShow || 5);
  }, [props.pagesToShow]);

  useEffect(() => {
    if (
      totalPictures !== props.totalPictures ||
      pageLimit !== props.pageLimit
    ) {
      setPage(currentPage);
    }
  });

  const setPage = (page) => {
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    setCurrentPage(page);
    const startIndex = (page - 1) * pageLimit;
    const endIndex = Math.min(startIndex + pageLimit - 1, totalPictures - 1);

    props.onChangePage({
      pageLimit,
      totalPages,
      page,
      startIndex,
      endIndex,
    });
  };

  const getPage = () => {
    const pages = [];
    let startFromNumber;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      setPagesToShow(totalPages);
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
  };

  if (!totalPictures || totalPages === 1) return null;

  const paginator = getPage();

  return (
    <div>
      <StyledList>
        <StyledItem>
          <button onClick={() => setPage(1)}>{"<<"}</button>
        </StyledItem>

        {paginator.pages.map((page, index) => (
          <StyledItem key={index}>
            <button
              className={paginator.currentPage === page ? "active" : ""}
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </StyledItem>
        ))}

        <StyledItem>
          <button onClick={() => setPage(1)}>{">>"}</button>
        </StyledItem>
      </StyledList>
    </div>
  );
};

Pagination.propTypes = {
  totalPictures: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default Pagination;