var assert=require("assert"),
    numToWord = require('../src');
 
describe('english', function () {
	var config = {};
	before(function() {
    	var level3 = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion'];
		var level2 = {
	        "1" : ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
	        "10" : ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
	        "100" : " hundred"
	    };
	    config = {
	    	level2: level2,
	    	level3: level3,
	    	zero: "zero"
	    };	
  	});
	
    it('should return one hundred eleven', function () {
    	var output = numToWord.convert(111,config);
        assert.equal(output, 'one hundred eleven');
    });
});

describe('indonesian', function () {
	var config = {};
	before(function() {
    	var level3 = ['', ' ribu', ' juta', ' milyar', ' triliun', ' kuadriliun', ' quantiliun'];
		var level2 = { 
			"1" : ['', ' satu', ' dua', ' tiga', ' empat', ' lima', ' enam', ' tujuh', ' delapan', ' sembilan', ' sepuluh', ' sebelas', ' duabelas', ' tigabelas', ' empatbelas', ' limabelas', ' enambelas', ' tujuhbelas', ' delapanbelas', ' sembilanbelas'],
	        "10" : ' puluh',
	        "100" : ' ratus'
	    };
	    config = {
	    	level2: level2,
	    	level3: level3,
	    	zero: "nol"
	    };	
  	});
	
    it('should return lima ratus sebelas', function () {
    	var output = numToWord.convert(511,config);
        assert.equal(output, 'lima ratus sebelas');
    });
});