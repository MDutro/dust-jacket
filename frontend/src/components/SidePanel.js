import React from "react";
import BookListItem from "./BookListItem";

const SidePanel = ({ userBookList }) => {
  return (
    <div className="side-panel">
      {userBookList &&
        userBookList.map((item) => <BookListItem bookInfo={item} />)}
    </div>
  );
};

export default SidePanel;
