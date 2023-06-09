import express from "express";
import {
  getSiswa,
  getSiswaById,
  saveSiswa,
  updateSiswa,
  deleteSiswa,
  getSiswaByName,
} from "../controller/SiswaController.js";

const router = express.Router();

router.get("/siswa", getSiswa);
router.get("/siswa/:id", getSiswaById);
router.get("/siswa/api/:name", getSiswaByName);
router.post("/siswa", saveSiswa);
router.patch("/siswa/:id", updateSiswa);
router.delete("/siswa/:id", deleteSiswa);

export default router;
