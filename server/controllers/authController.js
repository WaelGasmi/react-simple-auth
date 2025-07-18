import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userSchema } from "../validation/userValidation.js";

const users = [];

export const register = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    users.push({ username, password: hash });

    return res.status(200).json({ message: "registred" });
  } catch (error) {
    res.status(500).json({ message: "cant register" });
  }
};

export const login = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { username, password } = req.body;

    const user = users.find((x) => x.username === username);

    if (!user) return res.status(400).json({ message: "user not found" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "invalide credentials" });
    }

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .json({ message: "login succefully", username: user.username });
  } catch (error) {
    res.status(500).json({ message: "can't login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  res.status(200).json({ message: "logged out succesfully" });
};

export const checkUser = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  res.status(200).json({ user: req.user });
};
