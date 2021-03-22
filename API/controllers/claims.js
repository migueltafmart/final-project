const db = require("../models/db");

exports.claims = async (req, res, next) => {
  if (req.query.apiKey && (await db.checkApiKey(req.query.apiKey))) {
    next();
  } else if (req.query.apiKey) {
    res.status(403).json({
      status: false,
      response: "Forbidden",
    });
  } else {
    res.status(403).json({
      status: false,
      response: "No API key provided",
    });
  }
};

exports.caretaker = async (req, res, next) => {
  console.log(req.query.apiKey)
  let caretaker = req.query.apiKey
    ? await db.getRole(req.query.apiKey)
    : { role: null };
  if (caretaker.role === "caretaker") {
    next();
  } else if (req.query.apiKey) {
    res.status(403).json({
      status: false,
      response: "Wrong API key provided",
    });
  } else {
    res.status(403).json({
      status: false,
      response: "Forbidden",
    });
  }
};

exports.admin = async (req, res, next) => {
  let admin = req.query.apiKey
    ? await db.getRole(req.query.apiKey)
    : { role: null };
  if (admin.role === "admin") {
    next();
  } else if (req.query.apiKey) {
    res.status(403).json({
      status: false,
      response: "Wrong API key provided",
    });
  } else {
    res.status(403).json({
      status: false,
      response: "Forbidden",
    });
  }
};

exports.company = async (req, res, next) => {
  let company =req.query.apiKey ?  await db.getRole(req.query.apiKey): {role:null};
  if (company.role === "company") {
    next();
  } else if (req.query.apiKey) {
    res.status(403).json({
      status: false,
      response: "Forbidden",
    });
  } else {
    res.status(403).json({
      status: false,
      response: "No API key provided",
    });
  }
};
