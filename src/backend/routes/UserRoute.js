import express from "express";
import { getUser } from "../controller/SiswaController.js";

const router = express.Router();

router.get("/api/data/user", getUser);

export default router;
