const mongoose = require("mongoose");
const logger = require("../utils/logger");

async function dbconnect() {
    const mongoURI=process.env.MONGO_URI
  try {
    await mongoose.connect(mongoURI)
    logger.info("DB Connected")
  } catch (error) {
    logger.error("DB Failed ", error);
  }
}

module.exports=dbconnect