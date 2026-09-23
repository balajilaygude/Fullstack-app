const jwt = require("jsonwebtoken");
const logger = require("../utils/logger");

async function varify(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error("Middeleware email :-", error);
  }
}

module.exports = varify;
