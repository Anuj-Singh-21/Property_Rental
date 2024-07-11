import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = { name, email, phone, password: hashedPassword };

    await User.create(user);

    res.status(200).send(user);
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Something went Wrong");
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send("User not found please register first");
    }

    const verifyPassword = bcrypt.compareSync(password, user.password);

    if (!verifyPassword) {
      res.status(401).send("Invalid Credentials");
    }

    const token = jwt.sign(email, process.env.SECRET_KEY);

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true, secure: true })
      .send("User LoggedIn Successfully");
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Something went Wrong");
  }
};



