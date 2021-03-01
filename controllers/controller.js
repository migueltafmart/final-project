const sql = require("../models/sql"),
  regExp = require("../utils/regExp");
// GET a Home
exports.getUser = async (req, res) => {
  let user = await sql.getUser(req.query.apiKey);
  //Si el usuario existe en la base de datos
  if (user && user.role === "admin") {
    return res.status(200).json({
      status: true,
      response: await sql.getUser(req.query.apiKey),
    });
    // Si no existe en la base de datos
  } else if (req.query.apiKey || user) {
    return res.status(403).json({
      status: false,
      response: "Wrong API Key",
    });
    // Si no ha introducido query
  } else {
    return res.status(403).json({
      status: false,
      response: "No API Key provided",
    });
  }
};

exports.signUp = async (req, res) => {
  console.log("hola");
  let { role, displayName, urlToImg, email, pw } = req.body;
  if (
    regExp.role.test(role) &&
    regExp.displayName.test(displayName) &&
    regExp.url.test(urlToImg) &&
    regExp.email.test(email) &&
    regExp.pw.test(pw)
  ) {
    console.log("que tal");
    let newUser = await sql.signUp({ role, displayName, urlToImg, email, pw });
    if (typeof newUser == "string") {
      return res.status(400).json({
        status: false,
        response: newUser,
      });
    } else {
      return res.status(200).json({
        status: true,
        response: newUser,
      });
    }
  } else {
    console.log("adios");
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
