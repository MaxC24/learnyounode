var fs = require("fs");
var fileString = process.argv[2];

fs.readFile(fileString, "utf8", function(error, data) {
	if (error){
		console.error(error.message);
	} else {
		console.log(data.split("\n").length - 1);
	}
});
