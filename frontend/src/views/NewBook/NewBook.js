import { useState } from "react";
import API from "../../api/api";
import NewBookForm from "./NewBookForm";

const NewBook = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    API({
      method: "POST",
      data: {
        title: newBook.title,
        author_name: newBook.author,
        isbn: newBook.isbn,
      },
    })
      .then((response) => console.log(response))
      .then(() => {
        setNewBook({
          title: "",
          author: "",
          isbn: null,
        });
      })
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
