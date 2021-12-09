import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Organizations({ itemsPerPage, organizations }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(organizations.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(organizations.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, organizations]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % organizations.length;
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
        activeLinkClassName="activea"
        pageClassName="li--paginateNumber"
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
