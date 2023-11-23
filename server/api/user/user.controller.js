const bcrypt = require("bcryptjs/dist/bcrypt");
const pool = require("../../config/database");
const {
  register,
  profile,
  getAllUsers,
  getUserByEmail,
  userById,
} = require("./user.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  createUser: (req, res) => {
    const { userName, firstName, lastName, email, password } = req.body;

    if (!userName || !firstName || !lastName || !email || !password)
      return res.status(400).json({ msg: "All fields should be filled!" });
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters!" });
    }
    pool.query(
      `SELECT * FROM registration WHERE user_email = ?`,
      [email],
      (err, results) => {
        if (err) {
          return res.status(err).json({ msg: "database connection err" });
        }
        if (results.length > 0) {
          return res.status(400).json({ msg: "email already exists!" });
        } else {
          const salt = bcrypt.genSaltSync();
          req.body.password = bcrypt.hashSync(password, salt);

          register(req.body, (err, results) => {
            if (err) {
              console.log("error: ", err);
              return res.status(500).json({ msg: "database connection err" });
            }
            pool.query(
              `SELECT * FROM registration WHERE user_email = ?`,
              [email],
              (err, results) => {
                console.log("Select from registration user_email: ", results);
                if (err) {
                  return res
                    .status(err)
                    .json({ msg: "database connection err" });
                }
                console.log("Registerd!: ", email, req.body);
                req.body.userId = results[0].user_id;
                console.log("req body: ", req.body);

                profile(req.body, (err, results) => {
                  if (err) {
                    console.log("error message: ", err);
                    return res
                      .status(500)
                      .json({ msg: "databse connection err" });
                  }
                  return res.status(200).json({
                    msg: "New user added successfully",
                    data: results,
                  });
                });
              }
            );
          });
        }
      }
    );
  },

  getAllUser: (req, res) => {
    pool.query(`SELECT * FROM registration`, [], (err, result) => {
      return res.status(200).json(result);
    });
  },

  getUserById: (req, res) => {
    // console.log("Second parameter Started! with request: ", req);
    userById(req.id, (err, results) => {
      if (err) {
        console.log("Error while getting user by id: ", err);
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },

  login: (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "email and password are required!" });
    }

    console.log("Login request body: ", req.body);

    getUserByEmail(email, (err, results) => {
      console.log("GetUserByEmail Results: ", results);
      if (err) {
        console.log("Error while geting user by email: ", err);
        return res.status(500).json({ msg: "database connection error" });
      }
      if (!results) {
        return res
          .status(404)
          .json({ msg: "no account is registered by this email address!" });
      }

      const isMatch = bcrypt.compareSync(password, results.user_password);
      console.log("isMatch: ", isMatch);
      if (!isMatch) {
        return res.status(404).json({ msg: "Invalid user credential!" });
      }

      const token = jwt.sign({ id: results.user_id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        token,
        user: {
          id: results.user_id,
          display_name: results.user_name,
        },
      });
    });
  },
};
