import User from "../models/Usermodel.js";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (err) {
    console.log(err.message);
  }
};
