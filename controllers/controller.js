const contentful = require("contentful");
const client = contentful.createClient({
	space: process.env.CMS_SPACE_ID,
	accessToken: process.env.CMS_ACCESS_TOKEN,
});

exports.getRecentTen = (req, res) => {
	client
		.getEntries({
			limit: 11,
		})
		.then((entries) => {
			// console.log(entries);
			res.json(entries);
		});
};

exports.getOneById = (req, res) => {
	client.getEntry(req.params.id).then((entry) => {
		// console.log(entry);
		res.json(entry);
	});
};

exports.getOneByTitle = (req, res) => {
	const singleStr = req.params.title.replace(/\s+/g, "");
	const split = req.params.title.toLowerCase().split(" ");

	client.getEntries({}).then((entries) => {
		console.log(entries);
		const exactMatch = entries.items.filter(({ fields }) => {
			return fields.postTitle.toLowerCase().replace(/\s+/g, "") === singleStr;
		})[0];

		const similarArr = entries.items.filter(({ fields }) => {
			for (let i = 0; i < split.length; i++) {
				return (
					fields.postTitle.toLowerCase().includes(split[i]) &&
					fields.postTitle.toLowerCase().replace(/\s+/g, "") !== singleStr
				);
			}
		});

		res.json({ exactMatch: exactMatch, similar: similarArr });
	});
};
