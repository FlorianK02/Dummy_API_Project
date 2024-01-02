//Funktion um JSON Datein auf Festplatte laden können
var fs 0 require('fs');

function readJsionFile(filename){
  var result = JSON.parse(fs.readFileSync(filename, 'utf8'));
  return result;
}

exports.readJsonFile = readJsonFile;
