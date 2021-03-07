const sql = require("../models/sql"),
  regExp = require("../utils/regExp");
const crypto = require("crypto");
// GET a Home
exports.getUser = async (req, res) => {
  //Si la API Key existe en BBDD
  if (req.query.apiKey && (await sql.checkApiKey(req.query.apiKey))) {
    let user = await sql.getUser(req.params.id);
    return res.status(200).json({
      view: user.role,
      status: true,
      response: user,
    });
    // Si no existe en la base de datos
  } else if (req.query.apiKey) {
    return res.status(403).json({
      status: false,
      response: "Wrong API key provided",
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
  let { role, displayName, urlToImg, email, pwd } = req.body;
  if (await sql.checkEmail(email)) {
    return res.status(400).json({
      status: false,
      response: "Account already exists",
    });
  } else if (
    regExp.role.test(role) &&
    regExp.displayName.test(displayName) &&
    regExp.url.test(urlToImg) &&
    regExp.email.test(email) &&
    regExp.pwd.test(pwd)
  ) {
    let response = await sql.signUp(role, displayName, urlToImg, email, pwd);
    if (typeof response == "string") {
      return res.status(400).json({
        status: false,
        response: response,
      });
    } else {
      return res.status(200).json({
        status: true,
        response: response,
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};

exports.logIn = async (req, res) => {
  let { email, pwd } = req.body;
  if (regExp.email.test(email) && regExp.pwd.test(pwd)) {
    let response = await sql.logIn(email);
    if (typeof response == "string") {
      return res.status(400).json({
        status: false,
        response: response,
      });
    } else {
      if (
        response.hashPw === crypto.createHash("md5").update(pwd).digest("hex")
      ) {
        return res.status(200).json({
          status: true,
          response: response,
        });
      }
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getOffers = async (req, res) => {
  if (req.params.companyId) {
    //* Checkear la API key y la identidad de compañia
    if (await sql.checkCompany(req.params.companyId)) {
      return res.status(200).json({
        status: true,
        response: await sql.getOffers(req.params.companyId),
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getOffer = async (req, res) => {
  if (req.params.offerId) {
    //* Checkear la API key y la identidad de compañia
    if (await sql.checkCompany(req.params.offerId)) {
      return res.status(200).json({
        status: true,
        response: await sql.getOffer(req.params.offerId),
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.postOffer = async (req, res) => {
  const { jobTitle, category, hoursADay, jobDesc } = req.body;
  let company = await sql.getCompany(req.params.companyId);
  if (req.query.apiKey === company.apiKey) {
    if (
      jobTitle.length > 0 &&
      category.length > 0 &&
      hoursADay > 0 &&
      jobDesc.length > 0 &&
      jobDesc.length < 500
    ) {
      let response = await sql.postOffer({
        jobTitle,
        category,
        hoursADay,
        jobDesc,
        companyId: req.params.companyId,
      });
      if (typeof response == "string") {
        return res.status(400).json({
          status: false,
          response: response,
        });
      } else {
        return res.status(200).json({
          status: true,
          response: await sql.getOffer(response.insertId),
        });
      }
    } else {
      return res.status(400).json({
        status: false,
        response: "Fill out all the fields",
      });
    }
  } else if (req.query.apiKey) {
    return res.status(403).json({
      status: false,
      response: "Wrong API key provided",
    });
  } else if (req.params.companyId) {
    return res.status(403).json({
      status: false,
      response: "Not allowed",
    });
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
//* PUT an offer
exports.putOffer = async (req, res) => {
  let set = req.body;
  if (req.params.offerId && req.query.apiKey) {
    let offer = await sql.getOffer(req.params.offerId);
    let company = await sql.getCompany(offer.companyId);
    if (req.query.apiKey === company.apiKey) {
      return res.status(200).json({
        status: true,
        response: await sql.putOffer(req.params.offerId, set),
      });
    }
  } else if (req.params.offerId) {
    return res.status(403).json({
      status: false,
      response: "Not allowed",
    });
  } else if (req.query.apiKey) {
    return res.status(403).json({
      status: false,
      response: "Not allowed",
    });
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.deleteOffer = async (req, res) => {
  if (req.params.offerId && req.query.apiKey) {
    let offer = await sql.getOffer(req.params.offerId);
    let company = await sql.getCompany(offer.companyId);
    if (req.query.apiKey === company.apiKey) {
      return res.status(200).json({
        status: true,
        response: await sql.deleteOffer(req.params.offerId),
      });
    }
  } else if (req.params.offerId) {
    return res.status(403).json({
      status: false,
      response: "Not allowed",
    });
  } else if (req.query.apiKey) {
    return res.status(403).json({
      status: false,
      response: "Not allowed",
    });
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};