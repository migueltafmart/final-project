// Local modules
const routes = require("./controllers/routes");
// Downloaded modules
const express = require("express"),
  app = express(),
  dotenv = require("dotenv");
dotenv.config();

// Server details
const PORT = process.env.PORT,
  HOST = process.env.HOST;
//Middlewares
app.use(express.json());
app.use(routes);
app.use((req, res, next) => {
  next(404);
});
app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status || 500).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Resource not found",
    });
  }
});

// API server
app.listen(PORT, () => console.log("Server running at http://localhost:5500"));
