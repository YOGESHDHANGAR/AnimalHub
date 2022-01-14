const app = require("./app");
require("dotenv").config({ path: "config/config.env" });
const connectDatabase = require("./config/database");

//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
