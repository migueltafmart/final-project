const db = require("../models/db"),
  regExp = require("../utils/regExp");
const crypto = require("crypto"),
  fs = require("fs"),
  path = require("path");

exports.docs = (req, res) => {
  res.sendFile(path.resolve('docs/docs.html'));
}
exports.logo = (req, res) => {
  res.sendFile(path.resolve('assets/logo.png'));
}
exports.getUser = async (req, res) => {
  return res.status(200).json({
    status: true,
    response: await db.getUser(req.params.id),
  });
};

exports.signUp = async (req, res) => {
  if (await db.checkEmail(req.body.email)) {
    return res.status(400).json({
      status: false,
      response: "Account already exists",
    });
  } else if (req.body) {
    let { role, displayName, urlToImg, email, pwd, disp } = req.body;
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
      }else{
        return res.status(403).json({
          status: false,
          response: "Wrong credentials",
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
    if (await db.checkUser(req.params.id)) {
      return res.status(200).json({
        status: true,
        response: await db.getOffers(req.params.id),
      });
    }
  } else {
    return res.status(200).json({
      status: true,
      response: await db.getOffers(),
    });
  }
};
exports.getOffer = async (req, res) => {
  if (req.params.offerId) {
    //* Checkear la API key y la identidad de compañia
    if (await db.checkOffer(req.params.offerId)) {
      return res.status(200).json({
        status: true,
        response: await db.getOffer(req.params.offerId),
      });
    }else{
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
exports.postOffer = async (req, res) => {
  const { jobTitle, category, hoursADay, jobDesc, area } = req.body;
  let company = await db.getUser(req.params.id);
  if (req.query.apiKey === company.apiKey) {
    if (
      jobTitle.length > 0 &&
      hoursADay > 0 &&
      jobDesc.length > 0 &&
      jobDesc.length < 500
    ) {
      let response = await db.postOffer({
        jobTitle,
        category,
        hoursADay,
        jobDesc,
        area,
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
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
//* PUT an offer
exports.putOffer = async (req, res) => {
  let 
    { jobTitle, jobDesc, category, hoursADay, resolved } = req.body;
  if (
    jobTitle.length > 0 &&
    hoursADay > 0 &&
    jobDesc.length > 0 &&
    jobDesc.length < 500
  ) {
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
    let company = await db.getUser(offer.userId);
    if (req.query.apiKey === company.apiKey) {
      return res.status(200).json({
        status: true,
        response: await db.deleteOffer(req.params.offerId),
      });
    }
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.getCompany = async (req, res) => {
  return res.status(200).json({
    status: true,
    response: await db.getUser(req.params.id),
  });
};
exports.getCompanies = async (req, res) => {
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
};
exports.getCaretaker = async (req, res) => {
  if (req.params.id && checkUser(req.params.id)) {
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
  if (await db.checkUser(req.params.id)) {
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
  if (await db.checkOffer(req.params.id)) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.getCandidates(req.params.id),
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
  if (req.params.offerId && req.params.id) {
    if (await db.checkUser(req.params.id)) {
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
  if (req.params.matchId) {
    if (await db.checkMatch(req.params.matchId)) {
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
  if (req.params.matchId) {
    if (await db.checkMatch(req.params.matchId)) {
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
  if (req.params.matchId) {
    if (await db.checkMatch(req.params.matchId)) {
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
  if (req.body && req.params.id) {
    let response = await db.postEducation(req.params.id, req.body);
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
exports.postExperience = async (req, res) => {
  if (req.body && req.params.id) {
    let response = await db.postExperience(req.params.id, req.body);
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
exports.getExperience = async (req, res) => {
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
};
exports.getEducation = async (req, res) => {
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
};

exports.putEducation = async (req, res) => {
  if (req.body && req.params.id) {
    let response = await db.putEducation(req.params.id, req.body);
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
}
exports.putExperience = async (req, res) => {
  if (req.body) {
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
  if (req.params.id) {
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
  if (req.params.id) {
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
  if (req.params.id) {
    try {
      return res.status(200).json({
        status: true,
        response: await db.deleteEducation(req.params.id),
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
  if (req.params.id) {
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
  if (req.params.id) {
    return res.status(200).json({
      status: true,
      response: await db.deleteAccount(req.params.id),
    });
  } else {
    return res.status(400).json({
      status: false,
      response: "Something went wrong",
    });
  }
};
exports.editAccount = async (req, res) => {
  let { role, displayName, urlToImg, email, pwd, disp } = req.body;
  if (
     role && displayName && urlToImg && email && pwd &&
    (await db.checkUser(req.params.id))
  ) {
    let response = await db.editAccount(
      req.params.id,
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
