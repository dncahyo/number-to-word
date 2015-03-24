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
	
    it('should convert: 111 -> one hundred eleven', function () {
    	var output = numToWord.convert('111',config);
        assert.equal(output, 'one hundred eleven');
    });

    it('should convert: 1234567 -> one million, two hundred thirty four thousand, five hundred sixty seven', function () {
    	var output = numToWord.convert('1234567',config);
        assert.equal(output, 'one million, two hundred thirty four thousand, five hundred sixty seven');
    });

    it('should convert: 1000007 -> one million, seven', function () {
    	var output = numToWord.convert('1000007',config);
        assert.equal(output, 'one million, seven');
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
	
    it('should convert: 551 -> lima ratus sebelas', function () {
    	var output = numToWord.convert(511,config);
        assert.equal(output, 'lima ratus sebelas');
    });
});