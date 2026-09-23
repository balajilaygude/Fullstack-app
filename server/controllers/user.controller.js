const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userM = require("../models/user.model");
const logger = require("../utils/logger");

async function signUp(req, res) {
  try {
    const { name, nickname, email, password } = req.body;
    if (!name || !nickname || !email || !password) {
      return res.json({
        error: "Plase Enter all Details",
      });
    }
    const findUser = await userM.findOne({ email });
    if (findUser) {
      return res.json({
        error: "User Exist Plase Log in",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userM.create({
      name,
      nickname,
      email,
      password: hashPassword,
    });
    const token = await jwt.sign({ email: newUser.email }, process.env.SECRET);

    res.json({
      message: "User Created Successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    logger.error("Sign up :-", error);
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        error: "Plase Enter all Credentials",
      });
    }
    const findUser = await userM.findOne({ email });
    if (!findUser) {
      return res.json({
        error: "User Not Found",
      });
    }
    const hashPassword = await bcrypt.compare(password, findUser.password);
    if (!hashPassword) {
      return res.json({
        error: "Wrong credentials",
      });
    }
    const token = await jwt.sign(
      { role: findUser.role, email: findUser.email },
      process.env.SECRET,
    );

    res.json({
      message: "User Sign In Successfully",
      user: findUser,
      token,
    });
  } catch (error) {
    logger.error("Sign up :-", error);
  }
}

async function changePassword(req, res) {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const findUser = await userM.findById(id);
    if (!findUser) {
      return res.json({
        error: "User Not Found",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userM
      .findByIdAndUpdate(
        id,
        { password: hashPassword },
        { returnDocument: true },
      )
      .select("-password");
    return res.json({
      message: "Password Updated",
      user,
    });
  } catch (error) {
    logger.error("Sign up :-", error);
  }
}

module.exports = { signUp, signIn, changePassword };
