const controller = require("../controllers/controller");
const path = require("path");

module.exports = function (app) {
	app.get("/api/recent", controller.getRecentTen);

	app.get("/api/featured/:id", controller.getOneById);

	app.get("/api/search/:title", controller.getOneByTitle);

	// app.get("*", (req, res) => {
	// 	res.sendFile("index.html", { root: dist });
	// });
};
