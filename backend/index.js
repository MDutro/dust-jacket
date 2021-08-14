import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/userBooks.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const db_url = process.env.DB_URL;

const options = {
  origin: process.env.ALLOWED_ORIGIN,
};

app.use(cors(options));
app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use("/api/v1/user-books", bookRoutes);

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`Connection is established and running on port ${port}`)
    )
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
