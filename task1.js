function checkPalindrome(str) {
	var str = str.replace(/\W*/g,'').toLowerCase();
	var strReverse = str.split('').reverse().join('')
	if (str == strReverse) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}

var myString = process.argv[2];

checkPalindrome(myString);