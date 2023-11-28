require("dotenv").config();
const jwt = require("jsonwebtoken");

const ansAuth = (req, res, next) => {
  try {
    const questionId = req.header("question-id");
    const token = req.header("x-auth-token");

    console.log("Question: ", questionId);
    console.log("Token: ", token);

    if (!questionId) {
      return res.status(401).json({
        message: "no question-id is provided in header, please include!",
      });
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "No authentication token, autorization denied!" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      req.id = questionId;
      next();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = ansAuth;
