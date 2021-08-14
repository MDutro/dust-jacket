import Card from "../../components/Card";

const NewBookForm = ({ newBook, setNewBook, handleSubmit }) => {
  const form = (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          placeholder="Enter title"
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          placeholder="Enter author"
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="isbn">ISBN No.</label>
        <input
          type="text"
          name="isbn"
          value={newBook.isbn ?? ""}
          placeholder="Enter ISBN number"
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  return <Card title={"Add New Book"} body={form} />;
};

export default NewBookForm;
