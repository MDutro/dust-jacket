import React from "react";

const BookListItem = ({ bookInfo }) => {
  return (
    <div className="book-list-item">
      <p>{bookInfo.author_name}</p>
      <p>{bookInfo.title}</p>
      {/* <image src={image} /> */}
    </div>
  );
};

export default BookListItem;
