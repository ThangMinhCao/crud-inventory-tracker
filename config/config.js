const dotenv = require("dotenv");

dotenv.config();

const config = {
  mongoURL: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.vcopf.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
}

module.exports = config;