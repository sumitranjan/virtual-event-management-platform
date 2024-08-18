const express = require("express");
const eventRoute = express.Router();

const {
  verifyToken,
  checkAuthoriseUserAccess,
} = require("../middlewares/auth");

const event = require("../controllers/event");

eventRoute.get("/", verifyToken, checkAuthoriseUserAccess, event.get);

eventRoute.post("/", verifyToken, checkAuthoriseUserAccess, event.create);

eventRoute.put("/:id", verifyToken, checkAuthoriseUserAccess, event.update);

eventRoute.delete("/:id", verifyToken, checkAuthoriseUserAccess, event.remove);

eventRoute.post("/:id/register", verifyToken, event.registerUser);

module.exports = eventRoute;
