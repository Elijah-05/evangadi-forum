const {
  createUser,
  getAllUser,
  login,
  getUserById,
} = require("./user.controller");
const auth = require("../middleware/auth");
const router = require("express").Router();

router.post("/", createUser);
router.get("/all", getAllUser);
router.get("/", auth, getUserById);
router.post("/login", login);

module.exports = router;
