import Book from "../models/book.js";

export const getBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();

    res.status(200).json(allBooks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createBook = async (req, res) => {
  const newBook = req.body;

  const bookToAdd = new Book(newBook);

  try {
    await bookToAdd.save();

    res.status(201).json(bookToAdd);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
