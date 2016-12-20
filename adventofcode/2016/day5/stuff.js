const crypto = require('crypto');
const doorId = "uqwqemis";

function createPassword(string) {
    console.log("input secret",string);
    var password = '';
    let i = -1;
    while(password.length < 8) {
        i++;
        var hash = crypto.createHash('md5').update(s + i).digest('hex');
        if(hash.indexOf('00000') === 0) {
            let pchar = hash.substr(5,1);
            password += pchar;
            console.log('Generating password: '+password);
        }
    }
		console.log("Given the actual Door ID, what is the password?",password);
}

createPassword(doorId);
