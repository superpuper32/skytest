import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { picturesSelector } from "../redux/selectors";

import Pictures from "../components/pictures";
import Pagination from "../components/pagination";

const HistoryPage = () => {
  const pictures = useSelector(picturesSelector);
  const [pageLimit, setPageLimit] = useState("");
  const [startIndex, setStartIndex] = useState('');
  const [endIndex, setEndIndex] = useState('');

  const onChangePage = ({ pageLimit, startIndex, endIndex }) => {
    setPageLimit(() => pageLimit);
    setStartIndex(() => startIndex);
    setEndIndex(() => endIndex);
  };
  
  const picturesPerPage = pictures.slice(startIndex, endIndex + 1);

  return (
    <Fragment>
      <Pictures pictures={picturesPerPage} />
      <Pagination
        totalPictures={pictures.length}
        pageLimit={pageLimit || 5}
        initialPage={1}
        pagesToShow={5}
        onChangePage={onChangePage}
      />
    </Fragment>
  );
  
  };

export default HistoryPage;
