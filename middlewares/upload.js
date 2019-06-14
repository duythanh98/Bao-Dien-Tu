var multer = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/imgs/');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
})

var upload = multer({ storage: storage });

module.exports = function (app) {
	app.post('/upload', (req, res, next) => {
		upload.array('avatar')(req, res, err => {
			if (err) {
				return res.json({
					error: err.message
				});
			}
			res.json({});
		})
	})
}