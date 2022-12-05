const express = require("express")
const app = express();
const itemsRoutes = require("./routes/items")
const ErrorHandler = require("./errorHandler")

app.use(express.json());
app.use("/items", itemsRoutes);

// Error Handlers

app.use(function (req, res, next) {
  return new ErrorHandler("Not Found", 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app