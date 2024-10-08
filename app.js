const express = require("express");
const authRoute = require("./src/routes/auth");
const eventRoute = require("./src/routes/event");
const { mongoDbConnect } = require("./src/connection");
const app = express();

app.use(express.json());

require("dotenv").config();
const port = process.env.PORT;

try {
  mongoDbConnect(process.env.MONGODB_URL)
    .then(() => console.log("Mongo Db Connected"))
    .catch((err) => console.log(err));
} catch (e) {
  console.log("Error", e);
}

app.get("", (req, res) => {
  return res.status(200).send(`Hello server calling on ${port}`);
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/events", eventRoute);

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
