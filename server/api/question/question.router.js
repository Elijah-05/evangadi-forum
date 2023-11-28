const auth = require("../middleware/auth");
const { createQuestion, getQuestions } = require("./question.controller");

const router = require("express").Router();

router.post("/ask", createQuestion);
router.get("/", auth, getQuestions);

module.exports = router;
