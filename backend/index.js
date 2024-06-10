const express = require("express");
const cors = require("cors")
const listAuth = require("./routes/listAuth");
const dotenv = require("dotenv");
require("./config/dbConfig");
dotenv.config()

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/lists", listAuth)

app.listen(process.env.PORT, () => {
    console.log(`server is running on Port ${process.env.PORT}`)
})