import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author_name: [String],
  first_publish_year: Number,
  key: String,
  author_key: String,
  isbn: Number,
});

const Book = mongoose.model("book", bookSchema);

export default Book;
