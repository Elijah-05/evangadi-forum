require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRouter = require("./server/api/user/user.router");
const app = express();
const port = process.env.port;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
