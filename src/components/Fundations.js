import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Fundations({ fundations, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(fundations.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(fundations.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, fundations]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % fundations.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="element">
      {currentItems &&
        currentItems.map((el, index) => (
          <div key={index} className="element2">
            <div className="wrapper">
              <p>{el.title}</p>
              <p>{el.text}</p>
            </div>
            <p>{el.target}</p>
          </div>
        ))}
      <ReactPaginate
        pageClassName="li--paginateNumber"
        activeLinkClassName="activea"
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
