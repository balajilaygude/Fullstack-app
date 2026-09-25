const jwt = require("jsonwebtoken");
const logger = require("../utils/logger");

// async function varify(req, res, next) {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     decoded = jwt.verify(token, process.env.SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     logger.error("Middeleware email :-", error);
//   }
// }

// module.exports = varify;

async function varify(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }
    
    const token = authHeader.split(" ")[1];
    
    const decoded = jwt.verify(
      token,
      process.env.SECRET
    );
    
    req.user = decoded;
    
    next();
    
  } catch (error) {
    logger.error("Middleware auth :- ", error);
    
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}
module.exports = varify;