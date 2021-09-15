const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const uuid = require("uuid").v4;
const userControllers = {};

userControllers.getAllUsers = async (req, res) => {};
userControllers.addUser = async (req, res) => {};
userControllers.login = async (req, res) => {};
userControllers.getOne = async (req, res) => {};
userControllers.deleteOneById = async (req, res) => {};

module.exports = userControllers;
