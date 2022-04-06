const express   = require("express");
const v1        = require('./api/v1');
const app       = express();
const port      = 3000;

app.use("/api/v1/", v1);

app.get("/alive", (req, res) => {
	res.send({"alive": "OK"});
});

app.listen(port, () => {
	console.log('%s listening at localhost:%s', app.name, port);
});

module.exports = app;