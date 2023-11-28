const pool = require("../../config/database");

module.exports = {
  answer: (data, callback) => {
    pool.query(
      `INSERT INTO answer(answer, user_id, question_id)VALUES(?,?,?)`,
      [data.answer, data.userId, data.questionId],
      (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
      }
    );
  },

  answerByQuestionId: (id, callback) => {
    pool.query(
      `SELECT 
      answer.answer, 
      answer.answer_id, 
      answer.user_id, 
      answer.question_id, 
      registration.user_name
      FROM answer LEFT JOIN registration ON 
      answer.user_id = registration.user_id 
      WHERE answer.question_id = ?`,
      [id],
      (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
      }
    );
  },

  allAnswer: (callback) => {
    pool.query(`SELECT * FROM answer`, [], (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
};
