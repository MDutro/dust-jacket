import express from "express";
import { getBooks, createBook } from "../controllers/book.js";

const router = express.Router();

router.get("/", getBooks);

router.post("/", createBook);

export default router;
