"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers =
  exports.getProfile =
  exports.loginUser =
  exports.registerUser =
    void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("../models/User"));
dotenv_1.default.config();
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User_1.default.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const user = await User_1.default.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User_1.default.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    const isMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    const accessToken = jsonwebtoken_1.default.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
    );
    res.status(200).json({ success: true, data: { accessToken, user } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.loginUser = loginUser;
const getProfile = async (req, res) => {
  try {
    if (!req.user)
      return res.status(401).json({ success: false, message: "Unauthorized" });
    const user = await User_1.default.findById(req.user.id).select("-password");
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.getProfile = getProfile;
const getAllUsers = async (_req, res) => {
  try {
    const users = await User_1.default.find().select("-password");
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=userController.js.map
