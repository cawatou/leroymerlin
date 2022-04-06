const express   = require("express");
const api       = express.Router();

api.get("/test", (req, res) => {
	res.send({"test": "OK"});
});

module.exports = api;