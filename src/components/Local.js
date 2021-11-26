import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Local({ local, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(local.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(local.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % local.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  return (
    <div className="element">
      {currentItems &&
        currentItems.map((el) => (
          <div className="element2">
            <div className="wrapper">
              <p>{el.title}</p>
              <p>{el.text}</p>
            </div>
            <p>{el.target}</p>
          </div>
        ))}
    </div>
  );
}
