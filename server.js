require("dotenv").config();
const path = require("path");
const express = require("express");

// const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8888;

// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist")));

require("./routes")(app);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
