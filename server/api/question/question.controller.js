const pool = require("../../config/database");
const { ask, getAllQuestions } = require("./question.service");

module.exports = {
  createQuestion: (req, res) => {
    const { questionTitle, questionDescription, userId } = req.body;

    if (!questionTitle || !questionDescription || userId == null) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    ask(req.body, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Unable to Ask, Database connection error", err });
      }
      return res
        .status(200)
        .json({ message: "Question Successfully Created!!!" });
    });
  },

  getQuestions: (req, res) => {
    pool.query(
      `SELECT question.user_id, question_id, first_name, last_name, question, question_description FROM question LEFT JOIN profile ON question.user_id = profile.user_id`,
      [],
      (err, result) => {
        if (err) return callback(err);
        res.status(200).json(result);
      }
    );
  },
};
