const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/config.js");
const cors = require("cors");
const studentsRouter = require("./routes/studentsRouter");
const userRouter = require("./routes/userRouter");
const classRouter = require("./routes/classRouter");

dotenv.config();
const app = express();

// app.get("/", (req, res) => {
//   res.send("working...");
// });

app.use(cors());

app.use(
  cors({
    origin: ["http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/student", studentsRouter);
app.use("/user", userRouter);
app.use("/class", classRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
