var data = "bgvyzdsv";

var lowestFiveNum = 0;
var lowestSixNum = 0;
var hexCode = 0;

for (var i=0; i<99999999; i++) {
    //Converts puzzle input plus i integer tp hexcode
    hexCode = md5(data + i.toString());

    //Test for five leading 0s in hexCode
    if (lowestFiveNum == 0 && /^00000/.test(hexCode)) {
        //Set the lowestFiveNum to current i integer
        lowestFiveNum = i;
    }
    //Test for six leading 0s in hexCode
    if (lowestSixNum == 0 && /^000000/.test(hexCode)) {
        //Set the lowestSixNum to current i integer
        lowestSixNum = i;
    }

    //If both numbers have been found break the loop
    if (lowestFiveNum > 0 && lowestSixNum > 0) {
        break;
    }
}
console.log('Lowest Number containing five 0s: ' + lowestFiveNum);
console.log('Lowest Number containing six 0s: ' + lowestSixNum);
