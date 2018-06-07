function declineOfNumber (number, str1, str2, str3) {
	if ((number % 100 > 4) && (number % 100 < 20)) return str3;
	if (number % 10 == 1) return str1;
	if ((number % 10 > 1) && (number % 10 < 5)) return str2;
	return str3;
}

function addTimes(firstTime, secondTime) {
	var time = parseInt(firstTime) + parseInt(secondTime);
	var days = Math.floor(time / (60*60*24));
	var hours = Math.floor((time - days*60*60*24) / (60*60));
	var minutes = Math.floor((time - hours*60*60 - days*60*60*24) / 60);
	var seconds = time % 60;
	var textDays = declineOfNumber(days,' день',' дня',' дней');
	var textHours = declineOfNumber(hours,' час',' часа',' часов');
	var textMinutes = declineOfNumber(minutes, ' минута',' минуты',' минут');
	var textSeconds = declineOfNumber(seconds ,' секунда',' секунды',' секунд');
	return [days + textDays , hours + textHours , minutes + textMinutes , seconds + textSeconds];
}

var a = process.argv[2];
var b = process.argv[3];
var time = addTimes(a,b);

console.log(time[0] + ' ' + time[1] + ' ' + time[2] + ' ' + time[3])