const regExp = require("../utils/regExp");
const mariadb = require("mariadb"),
  { v4: uuidv4 } = require("uuid"),
  crypto = require("crypto");

const pool = mariadb.createPool({
  host: "localhost",
  user: "migueltafmart",
  password: "Hola1234$",
  connectionLimit: 5,
  database: "reto-tripulaciones-ela",
});

exports.getUser = async (apiKey) => {
  if (apiKey) {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT * FROM users WHERE apiKey=?", [
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
    return "No API Key provided.";
  }
};

exports.checkEmail = async (email) => {
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query("SELECT COUNT(email) FROM users WHERE email=?", [
        email,
      ]);
      payload = res[0]["COUNT(email)"];
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      console.log(payload)
      return payload;
    }
};

exports.signUp = async ({ role, displayName, urlToImg, email, pw }) => {
  
  if(await this.checkEmail(email) > 0){ 
    return "Account already exsists";
  }else if (
    regExp.role.test(role) &&
    regExp.displayName.test(displayName)&&
    regExp.url.test(urlToImg) &&
    regExp.email.test(email) &&
    regExp.pw.test(pw)
  ) {
    const hash = crypto.createHash("md5").update(pw).digest("hex");
    let apiKey = uuidv4();
    let conn;
    let payload;
    try {
      conn = await pool.getConnection();
      let res = await conn.query(
        "INSERT INTO users (role, displayName, urlToImg, email, hashPw, apiKey) VALUES (?,?,?,?,?,?);",
        [role, displayName, urlToImg, email, hash, apiKey]
      );
      payload = res.insertId;
    } catch (err) {
      console.log(err);
      payload = null;
    } finally {
      if (conn) conn.end();
      return payload;
    }
  } else if (role && displayName && urlToImg && email && pw) {
    return "Fields do not meet the requirements";
  } else {
    return "Missing fields";
  }
};