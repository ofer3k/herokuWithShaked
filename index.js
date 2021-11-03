const express = require("express");
const app = express();
const port = process.env.PORT || 8080; //explain later
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
