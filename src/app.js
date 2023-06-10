const express = require("express");
const app = express();
const blogRouter = require("./routes/blog.route");
require("./config/server");
const port = 5000;

app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`);
});

module.exports = app;
