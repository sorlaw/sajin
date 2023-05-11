import express from "express";
import cors from "cors";
import SiswaRoute from "./routes/SiswaRoute.js";
import UserRoute from "./routes/UserRoute.js";
import { fileURLToPath } from "url";
import path from "path";
import multer from "multer";

const app = express();

app.use(cors());

const __fileName = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__fileName);

//init multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/gambar");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("file")
);
app.use("public/gambar", express.static(path.join(__dirname, "public/gambar")));
// app.use(express.static("public"));

app.use(express.json());

// app.use(express.static("public"));
app.use(UserRoute);
app.use(SiswaRoute);

app.listen(5000, () => console.log("hello world"));
