// https://www.npmjs.com/package/multer
var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()
const multer = require('multer');
const path = require('path');



// Use the Storage property from Multi to 
// have more definitions for the file
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		
		// error first callback
		cb(null, 'uploads/');
	},
	filename: function(req, file, cb) {
		
		// error first callback
		// 1. Example keeping the extensioin only
		//cb(null, `${file.name}-${Date.now()}.${path.extname(file.originalname)}`);
		
		// 2. Keeping the whole name
		const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		cb(null, uniquePrefix + '-' + file.originalname);
	}
});
const upload = multer({ storage });


var app = express();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(process.cwd() + '/public'));


// Home page route
app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


// Atenção: 'upfile' vem da propriedade
// name="upfile" do elemento Input que é 
// do tipo file
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
	//console.log(Object.keys(req));
	//console.log('req.body', req.body);
	
	const file = req.file;
	console.log('req.file.....', file);
	
	
	res.send({
		name: file.originalname,
		type: file.mimetype,
		size: file.size
	}); 
}); 



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});





