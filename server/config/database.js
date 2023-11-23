require("dotenv").config();
var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

const databaseData = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

// console.log("Database DAta: ", databaseData);

pool.getConnection(function (err, connection) {
  console.log("Database Connection established: ");
});

let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id)
)`;

let profile = `CREATE TABLE if not exists profile(
    user_profile_id int auto_increment,
    user_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;

let question = `CREATE TABLE if not exists question(
    question_id int auto_increment,
    question varchar(255) not null,
    question_description varchar(255),
    question_code_block varchar(255),
    tags varchar(255),
    post_id varchar(255) not null,
    user_id int not null,
    PRIMARY KEY (question_id),
    UNIQUE KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;

let answer = `CREATE TABLE if not exists answer(
    answer_id int auto_increment,
    answer varchar(255) not null,
    answer_code_block varchar(255),
    user_id int not null,
    question_id int not null,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    FOREIGN KEY (question_id) REFERENCES question(question_id)
)`;

pool.query(registration, (err, results) => {
  if (err) {
    console.log("Unable to create registration database table: ", err);
  } else {
    console.log("Registration table created! ");
  }
});

pool.query(profile, (err, results) => {
  if (err) {
    console.log("Unable to create profile database table: ", err);
  } else {
    console.log("Profile table created! ");
  }
});

pool.query(question, (err, results) => {
  if (err) {
    console.log("Unable to create question database table: ", err);
  } else {
    console.log("Question table created! ");
  }
});

pool.query(answer, (err, results) => {
  if (err) {
    console.log("Unable to create answer database table: ", err);
  } else {
    console.log("Answer table created! ");
  }
});

module.exports = pool;
