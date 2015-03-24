var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
var numberToWord = require('./numberToWord');
var level3 = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion'];
var level2 = {
      "1" : ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
      "10" : ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
      "100" : " hundred"
  };
var config = {
    level2: level2,
    level3: level3
  };

rl.setPrompt('input number> ');
rl.prompt();

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(numberToWord.convert(line.trim(), config));
      break;
  }
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});