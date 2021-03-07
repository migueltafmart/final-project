const regExp = require("../utils/regExp");
const mariadb = require("mariadb"),
  { v4: uuidv4 } = require("uuid"),
  crypto = require("crypto");

const pool = mariadb.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPWD,
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
exports.checkCompany = async (id) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "SELECT COUNT(companyId) FROM companies WHERE companyId=?;",
      [id]
    );
    payload = res[0]["COUNT(companyId)"] > 0 ? true : false;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//*CHECK Caretaker
exports.checkCaretaker = async (id) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "SELECT COUNT(caretakerId) FROM caretakers WHERE caretakerId=?;",
      [id]
    );
    payload = res[0]["COUNT(caretakerId)"] > 0 ? true : false;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
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
        "SELECT displayName, role, apiKey FROM users WHERE userId=?",
        [userId]
      );
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No API key provided.";
  }
};
//* GET all session data from company
exports.getCompany = async (companyId) => {
  if (companyId) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "SELECT displayName, role, apiKey, urlToImg FROM users LEFT JOIN companies ON users.userId=companies.userId WHERE companyId=?",
        [companyId]
      );
      payload = res[0];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "No Id provided.";
  }
};
//*POST Signup user
exports.signUp = async (role, displayName, urlToImg, email, pwd) => {
  if ((await this.checkEmail(email)) > 0) {
    return "Account already exsists";
  } else if (
    regExp.role.test(role) &&
    regExp.displayName.test(displayName) &&
    regExp.url.test(urlToImg) &&
    regExp.email.test(email) &&
    regExp.pwd.test(pwd)
  ) {
    const hash = crypto.createHash("md5").update(pwd).digest("hex");
    const apiKey = uuidv4();
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO users (role, displayName, urlToImg, email, hashPw, apiKey) VALUES (?,?,?,?,?,?);",
        [role, displayName, urlToImg, email, hash, apiKey]
      );
      payload = await this.getUser(res.insertId);
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else if (role && displayName && urlToImg && email && pwd) {
    return "Fields do not meet the requirements";
  } else {
    return "Missing fields";
  }
};
//* POST Signup company
exports.newCompany = async (userId) => {
  let company = await this.getUser(userId);
  if (company.role === "company") {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("INSERT INTO companies (userId) VALUES (?);", [
        userId,
      ]);
      payload = res[0].insertId;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "The user selected is not a company";
  }
};
//*POST Signup caretaker
exports.newCaretaker = async (userId, hoursADay) => {
  let company = await this.getUser(userId);
  if (company.role === "caretaker") {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO caretakers (userId, ctHoursADay) VALUES (?,?);",
        [userId, hoursADay]
      );
      payload = res[0].insertId;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else {
    return "The user selected is not a caretaker";
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
exports.getOffers = async (companyId) => {
  let query = companyId
    ? "SELECT * FROM offers WHERE companyId?;"
    : "SELECT * FROM offers;";
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(query, [companyId]);
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
      let res = await conn.query("SELECT * FROM offers WHERE offerId=?;", [
        offerId,
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
    return "No offer Id provided";
  }
};
//* POST one offer
exports.postOffer = async ({
  jobTitle,
  category,
  hoursADay,
  jobDesc,
  companyId,
}) => {
  if (
    jobTitle.length > 0 &&
    category.length > 0 &&
    hoursADay > 0 &&
    jobDesc.length > 0 &&
    jobDesc.length < 500 &&
    (await this.checkCompany(companyId))
  ) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO offers (jobTitle, category, hoursADay, jobDesc, companyId) VALUES (?,?,?,?,?);",
        [jobTitle, category, hoursADay, jobDesc, companyId]
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
  
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "UPDATE offers SET jobTitle=?, category=?, hoursADay=?, jobDesc=?, resolved=? WHERE offerId=?",
      [jobTitle, category, hoursADay, jobDesc, resolved || false, offerId]
    );
    let offer = await this.getOffer(offerId);
    payload = offer;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
};
//* DELETE an offer
exports.deleteOffer = async (offerId) => {
  let conn;
  let payload;
  try {
    conn = await pool.getConnection();
    let res = await conn.query(
      "DELETE FROM offers WHERE offerId=?",
      [offerId]
    );
    payload = res;
  } catch (err) {
    console.log(err);
    payload = null;
  } finally {
    if (conn) conn.end();
    return payload;
  }
} 