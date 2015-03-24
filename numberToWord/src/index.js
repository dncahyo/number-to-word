exports.convert = convert;

function convert(input, config){
    var level3 = config.level3;
    var triEach = [];
    var output = '';

    if (input == '0') {
        return config.zero;
    }

    while (input.length > 3) {
        var lastThree = input.substr(input.length - 3);
        triEach.push(lastThree);
        input = input.substring(0, input.length - 3);
    }
    triEach.push(input);

    var level3count = 0;
    triEach.forEach(function(el,idx){
        el = triEachConvert(parseInt(el,10), config);
        triEach[idx] = el ? el + level3[level3count] : el;
        level3count++; 
    });

    triEach.forEach(function(el,idx){
        var notFirst = el ? el + "," : "";
        output = idx ? notFirst + output : el;
    });

    return output.trim();
}

//simple function to convert from numbers to words from 1 to 999
function triEachConvert(num, config){
    var numericWords = config.level2;
    var output = '';

    var helper = {
        divider: 100,
        current: 0
    };

    while(helper.divider >= 1){
        if (num >= helper.divider){
            helper.current = Math.floor(num / helper.divider);
            output += chooseWords(helper);
            num %= helper.divider;
        }
        helper.divider /= 10;
    }

    function chooseWords(h){
        if (num < numericWords["1"].length){
            h.divider /= 10;
            return numericWords["1"][num];
        }
        if (numericWords[h.divider].constructor === Array){
            var isTruthy = numericWords[h.divider][h.current];
            if (!isTruthy){
                h.divider /= 10;
            }
            return isTruthy ? numericWords[h.divider][h.current] : numericWords[h.divider][num];
        } else {
            return numericWords["1"][h.current] + numericWords[h.divider];
        }
    }

    return output;
}  