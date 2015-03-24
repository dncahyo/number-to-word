exports.config = lang;
	
function lang(){
	var enlevel3 = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion'];
	var enlevel2 = {
	    "1" : ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
	    "10" : ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
	    "100" : " hundred"
	};

	
	var idlevel3 = ['', ' ribu', ' juta', ' milyar', ' triliun', ' kuadriliun', ' quantiliun'];
	var idlevel2 = { 
		"1" : ['', ' satu', ' dua', ' tiga', ' empat', ' lima', ' enam', ' tujuh', ' delapan', ' sembilan', ' sepuluh', ' sebelas', ' duabelas', ' tigabelas', ' empatbelas', ' limabelas', ' enambelas', ' tujuhbelas', ' delapanbelas', ' sembilanbelas'],
        "10" : ' puluh',
        "100" : ' ratus'
    };

    var enconfig = {
		level2: enlevel2,
		level3: enlevel3,
		zero: "zero"
	};
	var idconfig = {
    	level2: idlevel2,
    	level3: idlevel3,
    	zero: "nol"
    };

    var lang = {
		english: enconfig,
		indonesian: idconfig
	};
	return lang;	
}
	