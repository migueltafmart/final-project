const db = require("../models/db"),
  regExp = require("../utils/regExp");
const crypto = require("crypto");
// GET a Home
exports.getUser = async (req, res) => {
  //Si la API Key existe en BBDD
  if (req.query.apiKey && (await db.checkApiKey(req.query.apiKey))) {
    let user = await db.getUser(req.params.id);
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
  let { role, displayName, urlToImg, email, pwd, disp } = req.body;
  if (await db.checkEmail(email)) {
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
    let response = await db.signUp(
      role,
      displayName,
      urlToImg,
      email,
      pwd,
      disp || 0
    );
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
    let response = await db.logIn(email);
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
          response: await db.getUser(response.userId),
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
  if (req.params.id) {
    //* Checkear la API key y la identidad de compañia
    if (await db.checkCompany(req.params.id)) {
      return res.status(200).json({
        status: true,
        response: await db.getOffers(req.params.id),
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
    if (await db.checkCompany(req.params.offerId)) {
      return res.status(200).json({
        status: true,
        response: await db.getOffer(req.params.offerId),
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
  let company = await db.getCompany(req.params.id);
  if (req.query.apiKey === company.apiKey) {
    if (
      jobTitle.length > 0 &&
      regExp.category.test(category) &&
      hoursADay > 0 &&
      jobDesc.length > 0 &&
      jobDesc.length < 500
    ) {
      let response = await db.postOffer({
        jobTitle,
        category,
        hoursADay,
        jobDesc,
        userId: req.params.id,
      });
      if (typeof response == "string") {
        return res.status(400).json({
          status: false,
          response: response,
        });
      } else {
        return res.status(200).json({
          status: true,
          response: await db.getOffer(response.insertId),
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
  } else if (req.params.id) {
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
  let set,
    { jobTitle, jobDesc, category, hoursADay, resolved } = req.body;
  if (
    jobTitle.length > 0 &&
    regExp.category.test(category) &&
    hoursADay > 0 &&
    jobDesc.length > 0 &&
    jobDesc.length < 500
  ) {
    if (req.params.offerId && req.query.apiKey) {
      let offer = await db.getOffer(req.params.offerId);
      let company = await db.getUser(offer.userId);
      if (req.query.apiKey === company.apiKey) {
        return res.status(200).json({
          status: true,
          response: await db.putOffer(req.params.offerId, {
            jobTitle,
            category,
            hoursADay,
            jobDesc,
            resolved,
          }),
        });
      }
    } else if (req.params.id) {
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
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.deleteOffer = async (req, res) => {
  if (req.params.offerId && req.query.apiKey) {
    let offer = await db.getOffer(req.params.offerId);
    let company = await db.getCompany(offer.userId);
    if (req.query.apiKey === company.apiKey) {
      return res.status(200).json({
        status: true,
        response: await db.deleteOffer(req.params.userId),
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
exports.getCompany = async (req, res) => {
  if (
    (await db.checkUser(req.params.id)) &&
    (await db.checkApiKey(req.query.apiKey))
  ) {
    return res.status(200).json({
      status: true,
      response: await db.getUser(req.params.id),
    });
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getCompanies = async (req, res) => {
  if (await db.checkApiKey(req.query.apiKey)) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getCompanies(),
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  }
};
exports.getCaretaker = async (req, res) => {
  if ((await db.checkApiKey(req.query.apiKey)) && checkUser(req.params.id)) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getUser(req.params.id),
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getMatches = async (req, res) => {
  if (
    (await db.checkUser(req.params.id)) &&
    (await db.checkApiKey(req.query.apiKey)) &&
    (await db.getRole(req.quer.apiKey)) === "caretaker"
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getMatches(req.params.id, req.query.apiKey),
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getCandidates = async (req, res) => {
  if (
    (await db.checkUser(req.params.id)) &&
    (await db.checkApiKey(req.query.apiKey)) &&
    (await db.getRole(req.query.apiKey)) === "company"
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getCandidates(req.params.id, req.query.apiKey),
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.postMatch = async (req, res) => {
  if (res.query.apiKey && res.params.offerId && res.params.id) {
    if (
      (await db.checkApiKey(res.query.apiKey)) &&
      (await db.getRole(req.query.apiKey)) === "caretaker" &&
      (await db.checkCaretaker(req.params.id))
    ) {
      try {
        return res.status(200).json({
          status: true,
          response: await db.postMatch(req.params.id, req.params.offerId),
        });
      } catch (e) {
        console.log(e);
        return res.status(403).json({
          status: false,
          response: "Something went wrong",
        });
      }
    } else {
      return res.status(403).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getMatch = async (req, res) => {
  if (res.query.apiKey && req.params.matchId) {
    if (
      (await db.checkApiKey(res.query.apiKey)) &&
      (await db.getRole(req.query.apiKey)) === "caretaker" &&
      (await db.getMatch(req.params.matchId))
    ) {
      try {
        return res.status(200).json({
          status: true,
          response: await db.getMatch(req.params.id, req.params.offerId),
        });
      } catch (e) {
        console.log(e);
        return res.status(403).json({
          status: false,
          response: "Something went wrong",
        });
      }
    } else {
      return res.status(403).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.putMatch = async (req, res) => {
  if (req.params.matchId && req.query.apiKey) {
    if (
      (await db.getRole(req.query.apiKey)) === "company" &&
      (await db.checkMatch(req.params.matchId))
    ) {
      return res.status(200).json({
        status: true,
        response: await db.putMatch(req.params.matchId, req.body),
      });
    } else {
      return res.status(403).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.deleteMatch = async (req, res) => {
  if (req.params.matchId && req.query.apiKey) {
    if (
      (await db.getRole(req.query.apiKey)) === "caretaker" &&
      (await db.checkMatch(req.params.matchId))
    ) {
      return res.status(200).json({
        status: true,
        response: await db.deleteMatch(req.params.matchId),
      });
    } else {
      return res.status(403).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.postEducation = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.getRole(req.query.apiKey)) === "caretaker" &&
    req.body
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.postEducation(req.params.Id, req.body),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.postExperience = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.getRole(req.query.apiKey)) === "caretaker" &&
    req.body
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.postExperience(req.params.id, req.body),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getExperience = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.checkApiKey(req.query.apiKey))
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getExperience(req.params.id),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getEducation = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.checkApiKey(req.query.apiKey))
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getEducation(req.params.id),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};

exports.putEducation = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.getRole(req.query.apiKey)) === "caretaker" &&
    req.body
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.putEducation(req.params.Id, req.body),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.putExperience = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.getRole(req.query.apiKey)) === "caretaker" &&
    req.body
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.putExperience(req.params.id, req.body),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getAllExperience = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.checkApiKey(req.query.apiKey))
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getAllExperience(req.params.id),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getAllEducation = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.checkApiKey(req.query.apiKey))
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getAllEducation(req.params.id),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.deleteEducation = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.getRole(req.query.apiKey)) === "caretaker"
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.deleteEducation(req.params.Id),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.deleteExperience = async (req, res) => {
  if (
    (await db.getUser(req.params.id).apiKey) === req.query.apiKey &&
    (await db.getRole(req.query.apiKey)) === "caretaker"
  ) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.deleteExperience(req.params.id),
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};

exports.deleteAccount = async (req, res) => {
  if (req.params.id && req.query.apiKey) {
    if (
      (await db.getRole(req.query.apiKey)) === "caretaker" &&
      (await db.checkMatch(req.params.id))
    ) {
      return res.status(200).json({
        status: true,
        response: await db.deleteAccount(req.params.id),
      });
    } else {
      return res.status(403).json({
        status: false,
        response: "Something went wrong",
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.editAccount = async (req, res) => {
  let { role, displayName, urlToImg, email, pwd, disp} = req.body;
  if (await db.checkEmail(email) && req.params.id) {
    return res.status(400).json({
      status: false,
      response: "Account already exists",
    });
  } else if (
    regExp.role.test(role) &&
    regExp.displayName.test(displayName) &&
    regExp.url.test(urlToImg) &&
    regExp.email.test(email) &&
    regExp.pwd.test(pwd)&&
    await db.checkUser(req.params.id)
  ) {
    let response = await db.editAccount(
      role,
      displayName,
      urlToImg,
      email,
      pwd,
      disp || 0,
      req.params.id
    );
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