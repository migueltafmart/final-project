const regExp = require("../utils/regExp");
const mariadb = require("mariadb"),
  { v4: uuidv4 } = require("uuid"),
  crypto = require("crypto");

const pool = mariadb.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  connectionLimit: 5,
  database: "umbrela",
});
//*CHECK email
exports.checkEmail = async (email) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query("SELECT COUNT(email) FROM users WHERE email=?", [
      email,
    ]);
    payload = res[0]["COUNT(email)"] > 0 ? true : false;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//*CHECK API key
exports.checkApiKey = async (apiKey) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "SELECT COUNT(apiKey) FROM users WHERE apiKey=?;",
      [apiKey]
    );
    payload = res[0]["COUNT(apiKey)"] > 0 ? true : false;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//*CHECK Company
exports.checkUser = async (id) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "SELECT COUNT(userId) FROM users WHERE userId=?;",
      [id]
    );
    payload = res[0]["COUNT(userId)"] > 0 ? true : false;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};

//*CHECK Match
exports.checkMatch = async (id) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "SELECT COUNT(matchId) FROM matches WHERE matchId=?;",
      [id]
    );
    payload = res[0]["COUNT(matchId)"] > 0 ? true : false;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//*CHECK Match
exports.checkOffer = async (id) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "SELECT COUNT(offerId) FROM offers WHERE offerId=?;",
      [id]
    );
    payload = res[0]["COUNT(offerId)"] > 0 ? true : false;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//* GET role with apiKey
exports.getRole = async (apiKey) => {
  if (apiKey) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT role FROM users WHERE apiKey=?", [
        apiKey,
      ]);
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided.";
  }
};
//* GET all session data from yser
exports.getUser = async (userId) => {
  if (userId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "SELECT * FROM users WHERE userId=?",
        [userId]
      );
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      console.log(payload)
      return payload;
    }
  } else {
    return "No id provided.";
  }
};

//* GET all session data from company
exports.getCompanies = async () => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "SELECT displayName, role, urlToImg FROM users WHERE role='company';"
    );
    payload = res;
  } catch (err) {
    console.log(err);
    payload = "null";
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//*POST Signup user
exports.signUp = async (role, displayName, urlToImg, email, pwd, disp, area) => {
  if ((await this.checkEmail(email)) > 0) {
    return "Account already exsists";
  } else if (
    role && displayName && urlToImg && email
  ) {
    const hash = crypto.createHash("md5").update(pwd).digest("hex");
    const apiKey = uuidv4();
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO users (role, displayName, urlToImg, email, hashPw, apiKey, disp, area) VALUES (?,?,?,?,?,?,?,?);",
        [role, displayName, urlToImg, email, hash, apiKey, disp || 0, area || null]
      );
      payload = await this.getUser(res.insertId);
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "Missing fields";
  }
};

//*POST Login user
exports.logIn = async (email) => {
  if (regExp.email.test(email)) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT * FROM users WHERE email=?;", [email]);
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else if (email) {
    return "Not a valid email";
  } else {
    return "Not a valid email";
  }
};
//*GET all offers/ with param all offers of a company
exports.getOffers = async (userId) => {
  let query = userId
    ? "SELECT * FROM offers WHERE userId=?;"
    : "SELECT * FROM offers;";
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(query, [userId]);
    payload = res.filter((a) => typeof a === "object");
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//*GET one offer
exports.getOffer = async (offerId) => {
  if (offerId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "SELECT * FROM offers WHERE offerId=?;",
        [offerId]
      );
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      console.log(payload)
      return payload;
    }
  } else {
    return "No offer Id provided";
  }
};
//* POST one offer
exports.postOffer = async ({
  jobTitle,
  category,
  hoursADay,
  jobDesc,
  userId,
  area,
}) => {
  if (
    jobTitle.length > 0 &&
    hoursADay > 0 &&
    jobDesc.length > 0 &&
    jobDesc.length < 500 &&
    area.length > 0
  ) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO offers (jobTitle, category, hoursADay, jobDesc, userId, area) VALUES (?,?,?,?,?,?);",
        [jobTitle, category, hoursADay, jobDesc, userId, area]
      );
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "Fields do not meet the requirements";
  }
};
//*PUT an offer
exports.putOffer = async (
  offerId,
  { jobTitle, category, hoursADay, jobDesc, resolved }
) => {
  if (
    jobTitle.length > 0 &&
    hoursADay > 0 &&
    jobDesc.length > 0 &&
    jobDesc.length < 500
  ) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "UPDATE offers SET jobTitle=?, category=?, hoursADay=?, jobDesc=?, resolved=? WHERE offerId=?",
        [jobTitle, category, hoursADay, jobDesc, resolved || false, offerId]
      );
      console.log(res)
      console.log(offerId)
      let offer = await this.getOffer(offerId);
      payload = offer;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      console.log(payload)
      return payload;
    }
  } else {
    return "Fields missing";
  }
};
//* DELETE an offer
exports.deleteOffer = async (offerId) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query("DELETE FROM offers WHERE offerId=?", [offerId]);
    payload = res;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
exports.getMatches = async (id, apiKey) => {
  if (id && apiKey) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "SELECT matchId, matches.userId, offerId, resolved FROM matches LEFT JOIN users ON matches.userId=users.userId WHERE matches.userId=? AND users.apiKey=?;",
        [id, apiKey]
      );
      payload = res.filter((a) => typeof a === "object");
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else if (id) {
    return "No API key provided";
  } else if (apiKey) {
    return "No id provided";
  } else {
    return "No params provided";
  }
};
exports.getCandidates = async (id, apiKey) => {
  if (id && apiKey) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "SELECT displayName, users.userId, urlToImg FROM users LEFT JOIN matches ON matches.userId=users.userId WHERE matches.userId=? AND users.apiKey=?;",
        [id, apiKey]
      );
      payload = res.filter((a) => typeof a === "object");
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else if (id) {
    return "No API key provided";
  } else if (apiKey) {
    return "No id provided";
  } else {
    return "No params provided";
  }
};
exports.postMatch = async (userId, offerId) => {
  if (userId && offerId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO matches (userId, offerId) VALUES (?,?)",
        [userId, offerId]
      );
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No params provided";
  }
};
exports.getMatch = async (matchId) => {
  if (matchId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT * FROM matches WHERE matchId=?;", [
        matchId,
      ]);
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided";
  }
};
exports.putMatch = async (matchId, { resolved, outcome, resolutionMssg }) => {
  if (matchId && resolutionMssg) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      await conn.query(
        "UPDATE matches SET resolved=?, resolutionMssg=?, outcome=? WHERE matchId=?",
        [resolved || false, resolutionMssg, outcome || false, matchId]
      );
      let offer = await this.getMatch(matchId);
      payload = offer;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  }
};
exports.deleteMatch = async (matchId) => {
  if (matchId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("DELETE FROM matches WHERE matchId=?", [matchId]);
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided";
  }
};
exports.getEducation = async (id) => {
  if (id) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT * FROM education WHERE eduId=?", [id]);
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided";
  }
};
exports.getExperience = async (id) => {
  if (id) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT * FROM experience WHERE expId=?", [
        id,
      ]);
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided";
  }
};
exports.postEducation = async (userId, { eduTitle, eduLevel, eduDesc }) => {
  console.log(userId, eduTitle, eduLevel, eduDesc);
  if (
    userId &&
    eduTitle.length > 0 &&
    eduLevel >= 0 &&
    eduDesc.length > 0 &&
    eduDesc.length < 500
  ) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO education (eduTitle, eduLevel, eduDesc, userId) VALUES (?,?,?,?)",
        [eduTitle, eduLevel, eduDesc, userId]
      );
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "The given data doesn't meet the requirements";
  }
};

exports.postExperience = async (
  userId,
  { expTitle, expLength, expDesc, category }
) => {
  if (
    userId &&
    expTitle.length > 0 &&
    expLength > 0 &&
    expDesc.length > 0 &&
    expDesc.length < 500 &&
    category.length > 0
  ) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO experience (expTitle, expLength, expDesc, category, userId) VALUES (?,?,?,?,?)",
        [expTitle, expLength, expDesc, category, userId]
      );
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "The given data doesn't meet the requirements";
  }
};

exports.putEducation = async (eduId, { eduTitle, eduLevel, eduDesc }) => {
  if (
    eduId &&
    eduTitle.length > 0 &&
    eduLevel >= 0 &&
    eduDesc.length > 0 &&
    eduDesc.length < 500
  ) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "UPDATE education SET eduTitle=?, eduLevel=?, eduDesc=? WHERE eduId= ?;",
        [eduTitle, eduLevel, eduDesc, eduId]
      );
      payload = await this.getEducation(eduId);
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "The given data doesn't meet the requirements";
  }
};

exports.putExperience = async (
  expId,
  { expTitle, expLength, expDesc, category }
) => {
  if (
    expId &&
    expTitle.length > 0 &&
    expLength > 0 &&
    expDesc.length > 0 &&
    expDesc.length < 500
  ) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "UPDATE experience SET expTitle=?, expLength=?, expDesc=?, category=? WHERE expId=?;",
        [expTitle, expLength, expDesc, category, expId]
      );
      payload = await this.getExperience(expId);
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "The given data doesn't meet the requirements";
  }
};
exports.getAllEducation = async (id) => {
  if (id) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT * FROM education WHERE userId=?", [
        id,
      ]);
      payload = res.filter(a => typeof a === "object");
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      console.log(payload);
      return payload;
    }
  } else {
    return "No id provided";
  }
};
exports.getAllExperience = async (id) => {
  if (id) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT * FROM experience WHERE userId=?", [
        id,
      ]);
      payload = res.filter(a => typeof a === "object");
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided";
  }
};
exports.deleteEducation = async (eduId) => {
  if (eduId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("DELETE FROM education WHERE eduId= ?;", [
        eduId,
      ]);
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided";
  }
};

exports.deleteExperience = async (expId) => {
  if (expId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("DELETE FROM experience WHERE expId=?;", [
        expId,
      ]);
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No id provided";
  }
};
exports.deleteAccount = async (id) => {
  if (id) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      await conn.query("DELETE FROM experience WHERE userId= ?;", [id])
      await conn.query("DELETE FROM education WHERE userId= ?;", [id])
      await conn.query("DELETE FROM offers WHERE userId= ?;", [id])
      await conn.query("DELETE FROM matches WHERE userId= ?;", [id])
      let res = await conn.query("DELETE FROM users WHERE userId= ?;", [id])
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "The given data doesn't meet the requirements";
  }
};
exports.editAccount = async (userId, role, displayName, urlToImg, email, pwd, disp) => {
  if (
    role &&
    displayName&&
    urlToImg &&
    email&&
    pwd &&
    userId
  ) {
    const hash = crypto.createHash("md5").update(pwd).digest("hex");
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "UPDATE users SET role =?, displayName=?, urlToImg=?, email=?, hashPw=?, disp=? WHERE userId=?;",
        [role, displayName, urlToImg, email, hash, disp || 0, userId]
      );
      payload = res;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else{
    return "Missing fields";
  }
};