import Siswa from "../models/Siswamodel.js";
import User from "../models/Usermodel.js";

const baseUrl = `192.168.43.197`;

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (err) {
    console.log(err.message);
  }
};

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
  if (req.files === null) {
    fileName = Siswa.gambar;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid gambar" });
    if (fileSize > 1000000)
      return res.status(422).json({ msg: "gambar harus kurang dari 1mb" });

    const filepath = `./public/gambar/${siswa.gambar}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/gambar/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const { nama, tahun, instagram, quotes } = req.body;
  const url = `${req.protocol}://${baseUrl}:5000/gambar/${fileName}`;
  try {
    await Siswa.update(
      { nama, tahun, instagram, quotes, gambar: fileName, url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "data updated" });
  } catch (error) {
    console.log(error.message);
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
    const filepath = `./public/gambar/${siswa.gambar}`;
    fs.unlinkSync(filepath);
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
