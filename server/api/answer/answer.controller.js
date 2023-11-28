const pool = require("../../config/database");
const { answer, answerByQuestionId, allAnswer } = require("./answer.service");

module.exports = {
  createAnswer: (req, res) => {
    console.log("Answer req body: ", req.body);
    answer(req.body, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "unable to create answer, database connection error!",
        });
      }
      return res.status(200).json(result);
    });
  },

  getAnswerById: (req, res) => {
    answerByQuestionId(req.id, (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Unable to get answers, database connection err" });
      return res.status(200).json(result);
    });
  },

  getAllAnswers: (req, res) => {
    allAnswer((err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Unable to get answers, database connection err" });
      return res.status(200).json(result);
    });
  },
};
