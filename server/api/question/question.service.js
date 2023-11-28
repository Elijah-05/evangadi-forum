const pool = require("../../config/database");

module.exports = {
  ask: (data, callback) => {
    pool.query(
      `INSERT INTO question(question, question_description, user_id)VALUES(?,?,?)`,
      [data.questionTitle, data.questionDescription, data.userId],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },

  getAllQuestions: (callback) => {
    pool.query(
      `SELECT * FROM question LEFT JOIN profile`,
      [],
      (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
      }
    );
  },
};
