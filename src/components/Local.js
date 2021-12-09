import React, { useEffect, useState } from "react";

export default function Local({ local, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(local.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage, local]);

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
    </div>
  );
}
