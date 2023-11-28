const ansAuth = require("../middleware/ansAuth");
const auth = require("../middleware/auth");
const {
  createAnswer,
  getAnswerById,
  getAllAnswers,
} = require("./answer.controller");

const router = require("express").Router();

router.post("/", createAnswer);
router.get("/", ansAuth, getAnswerById);
router.get("/all", auth, getAllAnswers);

module.exports = router;
