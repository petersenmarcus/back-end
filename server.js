const express = require("express");
const connectDB = require("./config/db")

const app = express();

connectDB();

// app.use(express.json());



app.get("/" , (req,res) => {
  res.send("api running")
})

app.use("/api/movie", require("./routes/api/movies"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})
