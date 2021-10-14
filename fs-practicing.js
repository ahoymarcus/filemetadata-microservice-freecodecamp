// https://code-maven.com/system-information-about-a-file-or-directory-in-nodejs
const fs = require('fs');



// Tests the number of params from the Cli call
if (process.argv.length <= 2) {
	console.log('Usage: ' + __filename + ' path/to)');
	process.exit(-1);
};
// Take the 3rd parameter from de Cli
var path = process.argv[2];


fs.stat(path, function(err, stats) {
	console.log(path + '\n');
	console.log(stats);
	
	if (stats.isFile()) console.log("\t\t\tI'M A FILE");
	if (stats.isDirectory()) console.log("\t\t\tI'M A DIRECTORY\n");
	
	console.log('\t\tsize:\t\t ' + stats['size']);
	
	// Write - Read - Execute
	console.log('\t\tmode:\t\t ' + stats['mode']);
	console.log('\t\teXecute concers: ' + (stats['mode'] & 1 ? 'x' : '-'));
	console.log('\t\tWrites concerns: ' + (stats['mode'] & 2 ? 'w' : '-'));
	console.log('\t\tRead concers:\t ' + (stats['mod'] & 4 ? 'r' : '-'));
	
	// Groups
	console.log('\t\teXecute groups:\t ' + (stats['mode'] & 10 ? 'x': '-'));
	console.log('\t\tWrite groups:\t ' + (stats['mode'] & 20 ? 'r' : '-'));
	console.log('\t\tRead groups:\t ' + (stats['mode'] & 40 ? 'r' : '-'));
	
	// owner 
	console.log('\t\teXecutes byOwner:' + (stats['mode'] & 100 ? 'x' : '-'));
	console.log('\t\tWrites byOwner:\t ' + (stats['mode'] & 200 ? 'w' : '-'));
	console.log('\t\tRead byOwner:\t ' + (stats['mode'] & 400 ? 'r' : '-'));
	
	console.log('\t\tfile:\t\t ' + (stats['mode'] & 0100000 ? 'f' : '-'));
	console.log('\t\tdirectory:\t ' + (stats['mode'] & 0040000 ? 'd\n' : '-\n'));
	
});







