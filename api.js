// Local modules
const routes = require("./controllers/routes");
// Downloaded modules
const express = require("express"),
  cors = require("cors"),
  path=require("path"),
  app = express();

// Server details
const PORT = process.env.PORT || 5500;
//Middlewaress
app.use(cors());
app.use(express.json());
app.use('/', express.static('./public/build/'));
app.use(routes);
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.use((req, res, next) => {
  next(404);
});
// API server
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
