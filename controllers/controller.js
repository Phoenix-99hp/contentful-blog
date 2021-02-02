const contentful = require("contentful");
const client = contentful.createClient({
	space: process.env.CMS_SPACE_ID,
	accessToken: process.env.CMS_ACCESS_TOKEN,
});

exports.getRecentTen = (req, res) => {
	client
		.getEntries({
			limit: 10,
		})
		.then((entries) => {
			console.log(entries);
			res.json(entries);
		});
};

exports.getOneById = (req, res) => {
	client.getEntry(req.params.id).then((entry) => {
		console.log(entry);
		res.json(entry);
	});
};

exports.getOneByTitle = (req, res) => {
	client
		.getEntries({
			limit: 1,
			"fields.postTitle": req.params.title,
			content_type: "blogPost",
		})
		.then((entry) => {
			console.log(entry);
			res.json({ exactMatch: entry, similar: null });
		});
};
