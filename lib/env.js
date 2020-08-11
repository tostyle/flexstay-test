const dotenv = require("dotenv");
const path = require("path");
const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: path.join(__dirname, "../.env.example") });
}
