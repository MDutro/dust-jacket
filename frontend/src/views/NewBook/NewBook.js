import { useState } from "react";
import API from "../../api/api";
import axios from "axios";
import NewBookForm from "./NewBookForm";

const NewBook = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/user-books", {
        title: newBook.title,
        author_name: newBook.author,
        isbn: newBook.isbn,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <NewBookForm
      newBook={newBook}
      setNewBook={setNewBook}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewBook;
