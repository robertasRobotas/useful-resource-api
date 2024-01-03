import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";

const SIGN_UP = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    const response = await user.save();

    return res
      .status(201)
      .json({ message: "User was created", user: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ resources: "something wnt wrong" });
  }
};

const LOGIN = async (req, res) => {
  try {
    //
  } catch (err) {
    console.log(err);
    return res.status(500).json({ resources: "something wnt wrong" });
  }
};

export { SIGN_UP, LOGIN };
