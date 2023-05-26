import Siswa from "../models/Siswamodel.js";

const baseUrl = `192.168.100.118`;

export const getSiswa = async (req, res) => {
  try {
    const response = await Siswa.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getSiswaById = async (req, res) => {
  try {
    const response = await Siswa.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveSiswa = async (req, res) => {
  const { nama, tahun, instagram, quotes } = req.body;

  const image = req.file.path.replace(/\\/g, "/");
  const url = `http://${baseUrl}:5000/${image}`;

  if (!req.file) {
    res.status(422).json({ msg: "masukkan gambar" });
  } else {
    try {
      await Siswa.create({
        nama: nama,
        tahun: tahun,
        instagram: instagram,
        quotes: quotes,
        gambar: image,
        url: url,
      });
      res.status(201).json({ msg: "data is inserted" });
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const updateSiswa = async (req, res) => {
  const siswa = await Siswa.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!siswa) return res.status(404).json({ msg: "not found" });
  let fileName = "";
  if (req.file == null) {
    fileName = Siswa.gambar;
  } else {
  }
};

export const deleteSiswa = async (req, res) => {
  const siswa = await Siswa.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!siswa) return res.status(404).json({ msg: "not found" });
  try {
    // const filepath = `./public/gambar/${siswa.gambar}`;
    // FileSystem.deleteAsync(filepath);
    await Siswa.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "data deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
